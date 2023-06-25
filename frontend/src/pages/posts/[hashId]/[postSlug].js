import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import {BsShareFill} from 'react-icons/bs'
import {LuSave} from 'react-icons/lu'

function PostDetail({postDetail}) {
    //console.log(postDetail)
  return (
    <div className='conatiner  mx-auto lg:max-w-screen-2xl px-4 py-4 md:px-2'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
         <div className='flex flex-row justify-start items-center'>
<div className='w-20 h-20 rounded-full bg-red-600 ml-6'>

</div>
{/* info */}
<div className='flex flex-col'>
<div className='flex flex-row'>
    <span className='ml-2 text-lg' >صاحب محمدی</span>
    <Link href={`/blogs/nustjs`}>
    <span className='border-2 border-blue-300 px-1 py-1 rounded-3xl text-blue-300'> Nuxt js</span></Link>
</div>
<div className='text text-gray-600'>Front-end Developer</div>
<div className='text-lg text-gray-300'>Reading time: 12 min</div>
</div>
</div>
         <div className='flex flex-row items-center mt-5 md:mt-0'>
        <BsShareFill className='text-gray-300 ml-2'/>
        <div className='flex flex-row items-center border-2 border-gray-300 px-1 py-1 rounded-3xl'> 
        <span className='text-gray-500'>Save</span>
        <LuSave className='text-gray-600'/>
        </div>
         </div>
        </div>
    </div>
  )
}

export default PostDetail



export async function getServerSideProps(ctx){
    const {query} =ctx
    console.log(query) 
    //res:: { hashId: '111222', postSlug: 'redux' }
//const {data} =await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`)
    return{
        props:{
            postDetail:'data'
        }
    }

}