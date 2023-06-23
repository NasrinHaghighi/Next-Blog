import React,{useState} from 'react'
import Link from 'next/link';
import {BsChevronDown} from 'react-icons/bs'

function CategoryPart() {
    const [isOpen, setIsOpen] =useState(false)
  return (
       
    <div className='bg-white rounded-3xl overflow-hidden'>
     
 <div onClick={()=>setIsOpen(!isOpen)} className='  bg-purple-200 flex items-center justify-between py-4 px-4 cursor-pointer '>
  <span>Category Of Articles</span>
  <BsChevronDown className={`w-6 h-6 fill-purple-400 transition-all duration-400 ${isOpen ? 'rotate-180' : 'rotate-0'} fill-orange-500 hover:fill-purple-900`}/>
  </div>  
   
 <div className={`  ${isOpen ? 'block' :'hidden'}`} >
  <Link href='/' className='block mb-1 py-4 px-4 hover:bg-purple-50'>All </Link>
  <Link href='/' className='block mb-1 py-4 px-4 hover:bg-purple-50'>React </Link>
  <Link href='/' className='block   py-4 px-4 hover:bg-purple-50'>Vue </Link>
</div> 

      </div>
  )
}

export default CategoryPart