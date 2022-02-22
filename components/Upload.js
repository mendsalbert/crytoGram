import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
const Upload = (props) => {
  const [file, setFile] = useState("");
  return (
    <div className="bg-black shadow-2xl p-5 rounded-md mt-6 font-Montserrat">
      <div className="relative">
        <CameraIcon className="h-10 text-white" />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="cursor-pointer absolute block top-0 left-0 opacity-0 "
        />
      </div>
      <p className="text-white text-xl">Share Image</p>
      <input
        className="appearance-none block w-full bg-[#161616] text-gray-500  mt-3  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#161616]"
        type="text"
        placeholder="Enter image description"
      />
      <div className="flex flex-row justify-end">
        <div
          onClick={() => {
            props.captureFile(file);
          }}
          className="text-white text-xl bg-pink-700 text-center px-8 py-2 rounded-full mt-4 cursor-pointer "
        >
          Upload
        </div>
      </div>
    </div>
  );
};

export default Upload;
