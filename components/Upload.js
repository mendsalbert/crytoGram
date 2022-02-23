import React, { useState } from 'react'
import { CameraIcon } from '@heroicons/react/outline'
const Upload = (props) => {
  const [file, setFile] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div className="mt-6 rounded-md bg-black p-5 font-Montserrat shadow-2xl">
      <div className="relative">
        <CameraIcon className="h-10 text-white" />
        <input
          type="file"
          onChange={(e) => props.captureFile(e.target.files[0])}
          className="absolute top-0 left-0 block cursor-pointer opacity-0 "
        />
      </div>
      <p className="text-xl text-white">Share Image</p>
      <input
        className="mt-3 block w-full appearance-none rounded  bg-[#161616]  py-3 px-4 leading-tight text-gray-500 focus:bg-[#161616] focus:outline-none"
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        placeholder="Enter image description"
      />
      <div className="flex flex-row justify-end">
        <div
          onClick={() => {
            props.uploadImage(description)
          }}
          className="mt-4 cursor-pointer rounded-full bg-pink-700 px-8 py-2 text-center text-xl text-white "
        >
          Upload
        </div>
      </div>
    </div>
  )
}

export default Upload
