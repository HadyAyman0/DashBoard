import React from 'react'
import { SideBar } from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
      <section className='flex '>
          <SideBar/>
      <Outlet/>
      </section>
        </>
    )
}
