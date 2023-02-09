import React from 'react'
import { Footer } from '../componants/Footer'
import { Navbar } from '../componants/Navbar'
import { Search } from '../componants/Search'
import { useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-native";

export const Searchpage = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <>
      {/* <Navbar/> */}
      <Search state={searchParams.get('state')}  industry={searchParams.get('services')} page={searchParams.get('page')} />
      {/* <Footer/> */}
    </>
  )
}
