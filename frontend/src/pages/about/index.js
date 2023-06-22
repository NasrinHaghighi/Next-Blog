import React from 'react'
import axios from 'axios'



function About({blogData}) {
    //console.log(blogData)
  return (
    <div>about page</div>
  )
}

export default About


// export async function getServerSideProps(){
//      const {data} =await axios.get('https://dummyjson.com/products')
//      return {
//        props: { blogData: data },
//    };
//     }