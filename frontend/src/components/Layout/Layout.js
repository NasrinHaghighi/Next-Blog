import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../../../src/globals.css'


function Layout({children}) {
  return (
    <>

    <Header/>
       
    <div>{children}</div>

    <Footer />
    </>
  )
}

export default Layout