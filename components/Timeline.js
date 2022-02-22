import React from "react";
import { CashIcon } from "@heroicons/react/outline";
const Timeline = () => {
  return (
    <>
      <div className=" mt-7 bg-black font-Montserrat ">
        <div className="rounded-tl-md object-cover rounded-tr-md bg-nft-image w-full h-72 bg-no-repeat bg-cover bg-center"></div>
        <div className="flex flex-col  p-3">
          <p className="text-white text-xl">
            This is the description of the image
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="text-white flex items-center space-x-2 text-lg">
              <p>Tips:</p>
              <CashIcon className="h-5 text-white" />
              <p>0 ETH</p>
            </div>
            <div className="">
              <div className="text-white text-xl bg-green-500 text-center px-8 py-2 rounded-full mt-4 cursor-pointer ">
                Tip
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-7 bg-black font-Montserrat ">
        <div className="rounded-tl-md object-cover rounded-tr-md bg-nft-image-1 w-full h-72 bg-no-repeat bg-cover bg-center"></div>
        <div className="flex flex-col  p-3">
          <p className="text-white text-xl">
            This is the description of the image
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="text-white flex items-center space-x-2 text-lg">
              <p>Tips:</p>
              <CashIcon className="h-5 text-white" />
              <p>0 ETH</p>
            </div>
            <div className="">
              <div className="text-white text-xl bg-green-500 text-center px-8 py-2 rounded-full mt-4 cursor-pointer ">
                Tip
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-7 bg-black font-Montserrat ">
        <div className="rounded-tl-md object-cover rounded-tr-md bg-nft-image-2 w-full h-72 bg-no-repeat bg-cover bg-center"></div>
        <div className="flex flex-col  p-3">
          <p className="text-white text-xl">
            This is the description of the image
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="text-white flex items-center space-x-2 text-lg">
              <p>Tips:</p>
              <CashIcon className="h-5 text-white" />
              <p>0 ETH</p>
            </div>
            <div className="">
              <div className="text-white text-xl bg-green-500 text-center px-8 py-2 rounded-full mt-4 cursor-pointer ">
                Tip
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
