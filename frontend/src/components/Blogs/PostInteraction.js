import React from 'react'
import {BiCommentDetail} from 'react-icons/bi'
import {BsBookmarkHeart} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'


function PostInteraction({post, isSmall}) {
  return (
    <div className={`flex ${isSmall ? 'gap-8' :'gap-3'}`}>
    <div className='bg-gray-200 p-0.25 rounded flex items-center gap-x-1 text-gray-400 hover:bg-gray-500 hover:text-white transition-all'><BiCommentDetail /><spn>10</spn></div>
    <div className='bg-red-100 p-0.25 rounded flex items-center gap-x-1 text-red-500
hover:bg-red-500 hover:text-red-100 transition-all'>    <AiOutlineHeart /><spn>10</spn></div>
    <div className='bg-blue-100 text-blue-500 p-0.25 rounded flex items-center gap-x-1
hover:bg-blue-500 hover:text-white transition-all'> <BsBookmarkHeart/></div>
   
      </div>
  )
}

export default PostInteraction