import React from 'react'
import { Footer } from '../componants/Footer'
import { Navbar } from '../componants/Navbar'
import { Search } from '../componants/Search'

export const Searchpage = () => {
  return (
    <>
    <div className="navbarsection sticky-top ">
        <Navbar/> 
        </div>    
    <Search/>

    <Footer/>
    </>
  )
}
