import React from 'react'
import PostCard from './PostCard'

function RelatedPosts() {
  return (
    <div className='py-4'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>پستهای مشابه</h1>
        <div className=" md:col-span-9 rounded-3xl  px-4 py-4 grid grid-cols-6 gap-8">
        {[1,2,3].map((item)=>{
            return <PostCard />
        })}
    </div>
    </div>
  )
}

export default RelatedPosts