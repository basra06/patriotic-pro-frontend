import React from 'react'
import { Banner } from '../componants/Banner'
import { Check } from '../componants/Check'
import { Contact } from '../componants/Contact'
import { Footer } from '../componants/Footer'
import { Industry } from '../componants/Industry'
import { Infobanner } from '../componants/Infobanner'
import { Navbar } from '../componants/Navbar'
import { State } from '../componants/State'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Industry/>
    <State/>
    <Infobanner/>
    <Contact/>
    <Footer/>
    </>
  )
}
