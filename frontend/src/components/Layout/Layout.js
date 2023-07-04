import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../../../src/globals.css'


function Layout({children}) {
  return (
    <>

    <Header/>
       
    <div className='conatiner  mx-auto lg:max-w-screen-2xl px-2 py-2 md:px-2'>{children}</div>

    <Footer />
    </>
  )
}

export default Layout