import React, { useState } from 'react'
import {FaRegUserCircle} from 'react-icons/fa'

import CommentForm from './CommentForm'
import toLocalDate from 'utils/tolocaldate'


function Singlecomment() {
    const now=new Date()
    //console.log(now) 
    const [replyTo, setReplyTo] =useState(false)
  return (
    <>
         <div className='border rounded roun border-gray-300 p-4 mb-2'>
         <div className='flex flex-col md:flex-row items-center'>
     
                <div><FaRegUserCircle  className='text-gray-400 w-8 h-8'/></div>
                <div className='flex flex-col mr-4 '>
                 <div>صاحب محمدی</div>
               <div>{toLocalDate(now)}</div>
                </div>
                
         </div>
           <div className='mt-5 px-3 text-lg'>دوره ها شما بسیار کاربردی هستند...</div>
           <button className='text-blue-400 text-2xl px-5 py-8'
           onClick={()=>setReplyTo(!replyTo)} 
           >{replyTo ? 'بی خیال' : 'پاسخ به'}</button>
           {
            replyTo && <CommentForm isReply/>
           }
            </div>

           
            </>
  )
}

export default Singlecomment