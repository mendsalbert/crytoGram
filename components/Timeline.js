import React from 'react'
import { CashIcon } from '@heroicons/react/outline'
const Timeline = (props) => {
  return (
    <>
      {props.images.map((imgs, idx) => (
        <div className=" mt-7 bg-black font-Montserrat ">
          <div>
            <p>fdf</p>
          </div>
          <div className="  bg-cover bg-center bg-no-repeat object-cover ">
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
                <p>0 ETH</p>
              </div>
              <div className="">
                <div className="mt-4 cursor-pointer rounded-full bg-green-500 px-8 py-2 text-center text-xl text-white ">
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
