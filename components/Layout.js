import React from 'react'
import Head from 'next/head'
import { GlobeAltIcon } from '@heroicons/react/outline'
const Layout = (props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&family=Secular+One&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&family=Montserrat:wght@200;300&family=Secular+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-full w-full flex-col items-center bg-background-image  bg-cover  ">
        <div className="mt-20 w-11/12 bg-[#161616] p-6 md:w-7/12">
          {props.children}
        </div>
        <div className="mt-6 flex h-32 w-full flex-col items-center justify-center bg-blue-500 font-Montserrat text-white">
          <p className="text-lg text-white">Developed By : Mends Albert</p>
          <div className="flex items-center space-x-1">
            <GlobeAltIcon className="h-8" />
            <a
              href="https://mendsalbert.netlify.com"
              className=" text-lg text-white"
            >
              mendsalbert.netlify.app
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
