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


function BlogPage({blogData}) { 
 console.log(blogData)
    const [isOpen, setIsOpen] =React.useState(false)
  
    return (
      <>
  
      <div className='conatiner bg-red-100  mx-auto lg:max-w-screen-2xl'>
   sallam
      </div>
      </>
    )
  }
  
  export default BlogPage

export async function getServerSideProps(){
 // const {data} =await axios.get('https://dummyjson.com/products')
  return {
    props: { blogData: "Welcome to the About Page" },
};
 }