

import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import CategoryPart from '@/components/Blogs/CategoryPart';
import SortPart from '@/components/Blogs/SortPart';
import PostList from '@/components/Blogs/PostList';



function BlogPage({postCategory,posts}) { 
 console.log(posts)

  
    return (
      <>
  
       <div className='conatiner  mx-auto lg:max-w-screen-2xl px-2 py-2 md:px-2'>
       <div className="grid gap-4  md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] text-lg min-h-screen">
        {/* category */}
     
         <CategoryPart postCategory={postCategory}/>
        
          {/* sort */}
          <SortPart />
     
           <PostList />
      </div>
      </div>
     
      </>
    )
  }
  
  export default BlogPage


  export async function getServerSideProps(context) {
  const {params,query} =context
 //here we need all post//we dont use context


  //const {data :posts} =   await axios.get('http://localhost:5000/api/post')
  const {data:postCategory}= await axios.get('http://localhost:5000/api/post-category')
    return {
      props: { postCategory },
    }
  }