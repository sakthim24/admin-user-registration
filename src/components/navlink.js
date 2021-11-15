import React from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'


export default function Navlink({ to, name, ...rest }) {
  const location = useLocation()

  const isActive = location.pathname === to

  return (
      
    <Link to={to}>
      <button className={isActive ? 'md:h-8 md:w-18 border-t-2 border-green-500 md:border-2-t border-purple-800  text-purple-800 font-medium px-2  ' : ' h-8 w-18 border-2 border-transparent  text-purple-800 text-center font-bold  px-2  '}               
    type="button" {...rest}> {name}</button>
    </Link>
  )
}