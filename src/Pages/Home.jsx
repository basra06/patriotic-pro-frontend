import React from 'react'
import { Banner } from '../componants/Banner'
import { Check } from '../componants/Check'
import { Contact } from '../componants/Contact'
import { Enquiry } from '../componants/Enquiry'
import { Footer } from '../componants/Footer'
import { Industry } from '../componants/Industry'
import { Infobanner } from '../componants/Infobanner'
import { Logo } from '../componants/Logo'
import { Navbar } from '../componants/Navbar'
import { State } from '../componants/State'

export const Home = () => {
  return (
    <>
        <Logo/>
        <div className="navbarsection sticky-top  ">
        <Navbar/> 
        </div>     
      <Banner/> 
     <Industry/>
    <State/>
    <Infobanner/>
    <Contact/>  
    <Footer/>
    {/* <Enquiry/> */}
    </>
  )
}
