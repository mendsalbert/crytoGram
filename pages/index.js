// import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

import Web3 from 'web3'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Skeleton from '../components/Skeleton'
import Timeline from '../components/Timeline'
import Upload from '../components/Upload'
import DecentralGram from '../src/abis/DecentralGram.json'
// import { create } from "ipfs-http-client";
// const ipfs = create("https://ipfs.infura.io:5001/api/v0");
const ipfsClient = require('ipfs-http-client')

const Home = () => {
  const [account, setAccount] = useState('0x0')
  const [decentralGram, setDecentralGram] = useState({})
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [imageCount, setImageCount] = useState(0)
  const [buffer, setBuffer] = useState('')
  const loadWeb3 = async () => {
    if (window.ethereuem) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereuem.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('no ethereum browser detected')
    }
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])

    //Network Id
    const networkId = await web3.eth.net.getId()
    const networkData = DecentralGram.networks[networkId]

    if (networkData) {
      const decentralGram = new web3.eth.Contract(
        DecentralGram.abi,
        networkData.address
      )
      setDecentralGram(decentralGram)
      const imageCount = await decentralGram.methods.imageCount().call()
      setImageCount(imageCount)
      setIsLoading(false)
    } else {
      window.alert('Decentragram contract not deployed to detected network')
    }
  }

  const captureFile = (file) => {
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result))
      console.log('buffer', buffer)
    }
  }

  // const uploadImage = (description) => {
  //   console.log("submitting file to ipfs...");
  //   // ipfs.add(buffer, (error, result) => {
  //   //   console.log("Ipfs result", result);
  //   //   if (error) {
  //   //     console.log(error);
  //   //     return;
  //   //   }
  //   // });
  // };

  useEffect(() => {
    loadWeb3()
    loadBlockchainData()
  }, [])

  // if (!loading) {
  if (isLoading) {
    return <Skeleton />
  } else {
    return (
      <Layout>
        <Nav account={account} />
        <Upload captureFile={captureFile} />
        <Timeline />
      </Layout>
    )
  }
}

export default Home
