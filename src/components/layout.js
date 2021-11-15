import React from 'react'
import  Navbar from './Navbar'


export function Layout({ children }) {
  return (
    <div >
    <Navbar/>
      <div>{children}</div>
    </div>
  )
}