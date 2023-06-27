import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import {BsShareFill} from 'react-icons/bs'
import {LuSave} from 'react-icons/lu'

function PostDetail({postDetail}) {
    //console.log(postDetail)
  return (
    <div className='conatiner  mx-auto lg:max-w-screen-xl  px-5 py-5 md:px-2'>
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
        <main
            className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl  prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 
            prose-img:rounded-xl prose-img:m-auto prose-a:text-red-500 mb-8 max-w-screen-xl  mx-auto py-8
        "
          >
            <h1>عنوان اصلی...</h1>
            <h2>عنوان اول تستی</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
              شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
              را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
              حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
              استفاده قرار گیرد.
            </p>
          <img src='/images/Vue.png' alt="" width={500} height={500} /> 
            <h2>عنوان تستی دوم </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
              شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
              را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
              حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
              استفاده قرار گیرد.
            </p>
            <h2>نحوه کانفیگ تیلویند</h2>
            <p>
              بدون استفاده از <a href="https://highlightjs.org/">highlight.js</a> میتوان به سادگی
              کدها را داخل محتوای بلاگ ها قرار داد!
            </p>
            <p>
              به عنوان مثال، برای کانفیگ تیلویند باید از فایل <code>tailwind.config.js</code>{" "}
              استفاده کرد:
            </p>
            <pre dir="ltr">{`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
`}</pre>
          </main>
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