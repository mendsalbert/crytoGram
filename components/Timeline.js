import React from 'react'
import { CashIcon } from '@heroicons/react/outline'
import Identicon from 'identicon.js'
const Timeline = (props) => {
  return (
    <>
      {props.images.map((imgs, idx) => (
        <div className=" mt-7 bg-black font-Montserrat ">
          <div className="flex items-center space-x-1 p-2">
            <img
              className="h-12 w-12 rounded-md  object-cover"
              src={`data:image/png;base64,${new Identicon(
                imgs.author,
                30
              ).toString()}`}
            />
            <p className="text-white">{imgs.author}</p>
          </div>
          <div className="bg-cover bg-center bg-no-repeat object-cover ">
            {/* {console.log(imgs.hash)} */}
            <img
              className="h-72 w-full rounded-tl-md rounded-tr-md object-cover"
              src={`https://ipfs.infura.io/ipfs/${imgs.hash}`}
            />
          </div>
          {/* <div className="h-72 w-full rounded-tl-md rounded-tr-md bg-nft-image bg-cover bg-center bg-no-repeat object-cover"></div> */}
          <div className="flex flex-col  p-3">
            <p className="text-xl text-white">{imgs.description}</p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-lg text-white">
                <p>Tips:</p>
                <CashIcon className="h-5 text-white" />
                <p>
                  {window.web3.utils.fromWei(
                    imgs.tipAmount.toString(),
                    'Ether'
                  )}{' '}
                  ETH
                </p>
              </div>
              <div className="">
                <div
                  onClick={(event) => {
                    let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                    console.log(event.target.name, tipAmount)
                    props.tipImageOwner(event.target.name, tipAmount)
                  }}
                  className="mt-4 cursor-pointer rounded-full bg-green-500 px-8 py-2 text-center text-xl text-white "
                >
                  Tip
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Timeline
