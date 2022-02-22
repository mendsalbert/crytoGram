import React from "react";
import { CubeTransparentIcon, UserIcon } from "@heroicons/react/outline";
const Nav = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="text-white flex flex-row items-center space-x-3">
        <p className="font-DancingStyle font-semibold text-4xl ">CryptoGram</p>
        <CubeTransparentIcon className="h-10" />
      </div>
      <div className="text-white flex flex-row items-center space-x-2">
        <p className=" text-lg ">{props.account}</p>
        <UserIcon className="h-10" />
      </div>
    </div>
  );
};

export default Nav;
