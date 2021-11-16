import React from 'react'
import  Navbar from './Navbar'


export function Layout({ children }) {
  return (
    <div >
      <div>{children}</div>
    </div>
  )
}