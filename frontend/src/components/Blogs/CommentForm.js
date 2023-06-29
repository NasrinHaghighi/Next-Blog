import React, { useState } from 'react'

function CommentForm() {
    const [comment, setComment] =useState('')
    //console.log(comment)
  return (
    <div className='w-full p-8'>
        <h3 className='mb-5 text-4xl '>ارسال دیدگاه جدید</h3>
        <form >
            <textarea  className='w-full border border-gray-300 rounded-lg  outline-gray-500
            px-4 py-2 ' 
            onChange={(e)=>setComment(e.target.value)}
            placeholder='نظری بنویس...'
            ></textarea>
        </form>
    </div>
  )
}

export default CommentForm