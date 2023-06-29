import React from 'react'
import CommentForm from './CommentForm'
import Singlecomment from './Singlecomment'

function PostComments() {
    const now=new Date()
    //console.log(now) 
  return (
    <div className='py-4'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>نظرات</h1>
        {/* we need to map on post.comments */}
        {/* here we need to find comment that are basic//and thier responseTo are null and status===2//means they confirme by admin */}
        {/* SO if !comment.responseTo && comment.status===2 do a map */}
        {[1,2,3].map((comment)=>{
            // WE need to pass comment TO SINGLECOMMENT component 
            return <Singlecomment />
        })}

        <CommentForm />
        </div>
  )
}

export default PostComments