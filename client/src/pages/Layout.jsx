import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'     // ✅ your Sidebar component
import { Outlet } from 'react-router-dom'      // ✅ correct import
import { Menu, X } from 'lucide-react'         // ✅ icons only
import { dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'
import { useSelector } from 'react-redux'

const Layout = () => {
  
  const user = useSelector((state)=>state.user.value)
  const [sideBarOpen, setSidebarOpen] = useState(false)

  return user ? (
    <div className='w-full flex h-screen relative'>
      {/* Sidebar */}
      <div className={`${sideBarOpen ? 'block' : 'hidden'} sm:block`}>
        <Sidebar sideBarOpen={setSidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>

      {/* Main content */}
      <div className='flex-1 bg-slate-100'>
        <Outlet />
      </div>

      {/* Toggle button */}
      {sideBarOpen ? (
        <X
          className='absolute top-3 right-3 p-2 z-50 bg-white rounded-md shadow w-10 h-10 text-amber-600 sm:hidden cursor-pointer'
          onClick={() => setSidebarOpen(false)}
        />
      ) : (
        <Menu
          className='absolute top-3 right-3 p-2 z-50 bg-white rounded-md shadow w-10 h-10 text-amber-600 sm:hidden cursor-pointer'
          onClick={() => setSidebarOpen(true)}
        />
      )}

      <h1 className='absolute bottom-3 left-3 text-white'>Hello</h1>
    </div>
  ) : (
    <Loading />
  )
}

export default Layout
