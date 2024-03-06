import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='w-full h-dvh flex flex-col justify-between'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
