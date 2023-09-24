import React from 'react'
import store_logo from "../media/store_logo.png"
import { Link } from 'react-router-dom'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

function Header({nbrItem}) {
  return (
    <header className='w-screen'>
        <Head/>
        <Search nbrItem = {nbrItem}/>
        <Navbar/>
    </header>
  )
}

export default Header
