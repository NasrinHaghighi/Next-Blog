import React from 'react'
import CategoryPart from '@/components/Blogs/CategoryPart'
import SortPart from '@/components/Blogs/SortPart'
import PostList from '@/components/Blogs/PostList'
import axios from 'axios'
import queryString from 'query-string';


function CategoryPage({postCategory, posts}) {
  return (
    <>
  
    <div className='conatiner  mx-auto lg:max-w-screen-2xl px-2 py-2 md:px-2'>
    <div class="grid gap-4  md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] text-lg min-h-screen">
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

export default CategoryPage

export async function getServerSideProps(context) {
    const {query} =context
  //here we use query-stringyfy that convert query ti format that backend work//
  //
  // { categorySlug: 'node.js&limit=5&page=1' }RES OF CONSOLE QUERY//
 // console.log(queryString.stringify(query)) RES..{ page: '1', limit: '50', categorySlug: 'node.js' }
    //const {data:posts} =await axios.get(`http://localhost:5000/api/posts??${queryString.stringify(query)}`)
    const {data:postCategory}= await axios.get('http://localhost:5000/api/post-category')
      return {
        props: { postCategory },
      }
    }