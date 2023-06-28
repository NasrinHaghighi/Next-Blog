import React from 'react'
import Link from 'next/link'
import {FaUserSecret} from 'react-icons/fa'

import {BiTimeFive} from 'react-icons/bi'
import PostInteraction from './PostInteraction'


function PostCard() {
  return (
    <div  className='col-span-3 md:col-span-3 lg:col-span-2 bg-gray-50 rounded-3xl p-4 h-fit flex flex-col justify-between'>
    {/* image container */}
       <div className='aspect-w-5 aspect-h-5'>
        {/* link img to /posts/item.hashid/item.slug . WE CREATED THIS ROUT*/}
       {/* href={`/posts/${item.hashId}/${item.slug}`} */}
        <Link href={`/posts/111/redux`}>
        <img className='rounded-2xl w-full h-full object-center object-cover' src='/images/vue.png'/>
        </Link>
       </div> 
     {/* content */}
     <div className='bg-gray-50 rounded-3xl py-2 px-2 flex flex-col justify-between flex-1  '>
      {/* content header */}
      <div className='flex justify-center'><h1 className='mb-4 font-bold'>بررسی کامل ریکت و ریداکس</h1></div>
       {/* CONTENT data detail */}
    
       <div className='flex items-center justify-between mb-4'>
       <div className='flex'> <FaUserSecret className='rounded-full fill-purple-400 ml-3 outline outline-offset-2 outline-purple-400'/> <div>    </div > صاحب محمدی       </div>
       <span class='px-2  bg-blue-100 rounded-2xl text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all curser-pointer duration-300'>ریکت</span>
       </div>
       {/* content last line */}
       <div className='flex justify-between'>

             <PostInteraction />
       
           {/* reading time */}
           <div className='flex items-center font-normal text-gray-400'> <BiTimeFive /><span className='font-normal mr-1'> 12 دقیقه</span></div>
       </div>
       </div>
     </div>
  )
}

export default PostCard