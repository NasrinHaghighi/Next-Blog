"use client";

import React, { useState ,useEffect} from 'react'
import {use} from 'react'
import Link from 'next/link'
import {BsChevronDown} from 'react-icons/bs'
import {TbAdjustmentsAlt} from 'react-icons/tb'
import {FaUserSecret} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'
import {BsBookmarkHeart} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import axios from 'axios';


 async function getPost(){
  const response = await fetch('http://localhost:5000/api/post-category');
  const jsonData = await response.json()
  return jsonData
  }


function BlogPage() { 
  const [data, setData] =useState()


useEffect(() => {
  getPost().then(posts => {
    setData(posts.data);
  });

}, [])
console.log(data)

  const [isOpen, setIsOpen] =React.useState(false)

  return (
    <>

    <div className='conatiner  mx-auto lg:max-w-screen-2xl'>
    <div class="grid gap-4  md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] text-lg min-h-screen">
      {/* category */}
      <div class="hidden md:block md:col-span-3 md:row-span-2">
    <div className='bg-white rounded-3xl overflow-hidden'>
<div onClick={()=>setIsOpen(!isOpen)} className='  bg-purple-200 flex items-center justify-between py-4 px-4 cursor-pointer '>
  <span>Category Of Articles</span>
  <BsChevronDown className={`w-6 h-6 fill-purple-400 transition-all duration-400 ${isOpen ? 'rotate-180' : 'rotate-0'} fill-orange-500 hover:fill-purple-900`}/>
  </div>
<div className={`  ${isOpen ? 'block' :'hidden'}`}>
  <Link href='/' className='block mb-1 py-4 px-4 hover:bg-purple-50'>All </Link>
  <Link href='/' className='block mb-1 py-4 px-4 hover:bg-purple-50'>React </Link>
  <Link href='/' className='block   py-4 px-4 hover:bg-purple-50'>Vue </Link>
</div>

      </div>
      </div>
         {/* sort */}
      <div class="  hidden md:block md:col-span-9">
        <div class="flex bg-white rounded-3xl  px-4">
        <div class='flex gap-x-4 items-center py-4'>
        <TbAdjustmentsAlt className='w-6 h-6 fill-purple-100 '/><span>مرتب سازی :</span>
        </div>
        <ul className='flex gap'>
        <li href='#' class='px-8 py-4 cursor-progress hover:bg-purple-50'>جدیدترین</li>
        <li href='#' class='px-8 py-4 cursor-progress hover:bg-purple-50'>محبوبترین</li>
        <li href='#' class='px-8 py-4 cursor-progress hover:bg-purple-50'>پر بازدیدترین</li>
        </ul>
        </div>
      </div>
     {/* blog post */}
      <div class="bg-white md:col-span-9 rounded-3xl  px-4 py-4 grid grid-cols-6 gap-8"> 

      {[1,2,3,4,5].map((blog)=>{
        return(
          <div key={blog} class='col-span-6 md:col-span-3 lg:col-span-2 bg-gray-50 rounded-3xl p-4 h-fit flex flex-col justify-between'>
            {/* image container */}
               <div className='aspect-w-5 aspect-h-5'>
                <img class='rounded-2xl w-full h-full object-center object-cover' src='/images/vue.png'/>
               </div>
             {/* content */}
             <div className='bg-gray-50 rounded-3xl py-2 px-2 flex flex-col justify-between flex-1  '>
              {/* content header */}
              <div className='flex justify-center'><h1 class='mb-4 font-bold'>بررسی کامل ریکت و ریداکس</h1></div>
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
    </div>
    </div>
    </>
  )
}

export default BlogPage


 
// export async function getServerSideProps(){
//  // const {data} =await axios.get('https://dummyjson.com/products')
//   return {
//     props: { blogData: "Welcome to the About Page" },
// };
//  }








     {/* <div>{posts.map((item)=>{
      return <div>{item.title}</div>
    })}</div>  */}




// const [data, setdata] =useState()

// const getdata=async()=>{
//   await axios.get('https://dummyjson.com/products').then((res) =>setdata(res.data))

// }

// useEffect(() => {

// getdata()


// }, [])
// console.log(data)