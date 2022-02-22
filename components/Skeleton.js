import React from 'react'
import Layout from './Layout'
const Skeleton = () => {
  return (
    <Layout>
      <div className="mt-0  w-full rounded-md">
        <div className="flex h-full animate-pulse flex-col items-center justify-center space-x-5">
          <div className="mb-4 h-16 w-full rounded-lg bg-gray-300 "></div>
        </div>
        <div className="flex h-full animate-pulse flex-col items-center justify-center space-x-5">
          <div className="mb-4 h-80 w-full rounded-lg bg-gray-300 "></div>
        </div>
        <div className="flex h-full animate-pulse flex-col items-center justify-center space-x-5">
          <div className="mb-4 h-80 w-full rounded-lg bg-gray-300 "></div>
        </div>
      </div>
    </Layout>
  )
}

export default Skeleton
