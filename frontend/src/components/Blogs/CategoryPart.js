import React,{useState} from 'react'
import Link from 'next/link';
import {BsChevronDown} from 'react-icons/bs'



function CategoryPart({postCategory}) {
//console.log(postCategory)//data in data
    const [isOpen, setIsOpen] =useState(true)
  return (
    <>
    <div className="hidden md:block md:col-span-3 md:row-span-2">
    <div className='bg-white rounded-3xl overflow-hidden'>
     
 <div onClick={()=>setIsOpen(!isOpen)} className='  bg-purple-200 flex items-center justify-between py-4 px-4 cursor-pointer '>
  <span>Category Of Articles</span>
  <BsChevronDown className={`w-6 h-6 fill-purple-400 transition-all duration-400 ${isOpen ? 'rotate-180' : 'rotate-0'} fill-orange-500 hover:fill-purple-900`}/>
  </div>  
   
 <div className={`  ${isOpen ? 'block' :'hidden'}`} >
  {postCategory.data.map((item, index)=>{
    return <Link href={`/blogs/${item.englishTitle}`} className='block mb-1 py-4 px-4 hover:bg-purple-50' key={item._id}>{item.title
    } </Link>
  })}
  
</div> 

      </div>
      </div>
      <div className="md:hidden flex gap-5 overflow-auto pb-5">
      {postCategory.data.map((item, index)=>{
    return <Link href={`/blogs/${item.englishTitle}`} className='border border-gray-500 hover:bg-purple-50 text-gray-500 text-sm py-1 px-5 rounded-3xl' key={item._id}>{item.title
    } </Link>
    })}
      </div>
      </>
  )
}

export default CategoryPart

export async function getServerSideProps(context) {
  return {
    props: { message: "Welcome to the About Page" },
  }
}