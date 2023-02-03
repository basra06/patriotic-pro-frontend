import React from 'react'
import { Enquiry } from '../componants/Enquiry'
import { Footer } from '../componants/Footer'
import { Navbar } from '../componants/Navbar'

export const Enquire = () => {
  return (
    <>
    
    <div className="navbarsection sticky-top  ">
        <Navbar/> 
        </div> 
        <Enquiry/>
        <Footer/>
       
    </>
  )
}
