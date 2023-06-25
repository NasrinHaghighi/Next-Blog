import React from 'react'
import {FaUserSecret} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'
import {BsBookmarkHeart} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import Link from 'next/link'
function PostList() {
  return (
    <div className="bg-white md:col-span-9 rounded-3xl  px-4 py-4 grid grid-cols-6 gap-8">
    {[1,2,3,4,5].map((blog)=>{
        return(
          <div key={blog} className='col-span-3 md:col-span-3 lg:col-span-2 bg-gray-50 rounded-3xl p-4 h-fit flex flex-col justify-between'>
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
                 
                 <div className='flex gap-3'>
                  <div className='bg-gray-200 p-0.25 rounded flex items-center gap-x-1 text-gray-400 hover:bg-gray-500 hover:text-white transition-all'><BiCommentDetail /><spn>10</spn></div>
                  <div className='bg-red-100 p-0.25 rounded flex items-center gap-x-1 text-red-500
      hover:bg-red-500 hover:text-red-100 transition-all'>    <AiOutlineHeart /><spn>10</spn></div>
                  <div className='bg-blue-100 text-blue-500 p-0.25 rounded flex items-center gap-x-1
      hover:bg-blue-500 hover:text-white transition-all'> <BsBookmarkHeart/></div>
                 
                    </div>
                   {/* reading time */}
                   <div className='flex items-center font-normal text-gray-400'> <BiTimeFive /><span className='font-normal mr-1'> 12 دقیقه</span></div>
               </div>
               </div>
             </div>
            
    
        )
        
      })}
      </div>
  )
}

export default PostList