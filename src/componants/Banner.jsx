import React, { useEffect, useState } from 'react'
import "../sass/global/global.css"
import "../sass/banner/banner.css"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/footerimage/Transparent-white 1.png"
import axios from 'axios';
import { getStates } from '../api/server'
import { useDispatch, useSelector } from 'react-redux'
import { get_UnitedStates_states } from '../Redux-Store/actions'
import { createSearchParams, useNavigate } from "react-router-dom";


export const Banner = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const storeState = useSelector(state => state.US_states.country_states);
  const[services,setservices]=useState([
    "Air Conditioning" ,
    "Carpentry",
    "Cleaning",
    "Concrete",
    "Drywall",
    "Electrician",
    "Fencing",
    "Garage Door Installation",
    "Handyman",
    "Heating & Furnace",
    "HVAC Contractors",
    "Landscaping",
    "Painting",
    "Pest Control",
    "Plumbing",
    "Remodeling",
    "Roofing",
    "Tile"]);

 const[search,setSearch]=useState({
  states:[],
  industry:[]
 });
  
 const [data, setdata] = useState([]);
 const [state, setstate] = useState("");
 const setValue=(e)=>{
  let setData={...search}
  if(e.target.name==="states"){
    if(e.target.value===''){
      setData[e.target.name]=[]
    }else{
    setData[e.target.name]=[e.target.value]
  }
  }
  if(e.target.name==="industry"){
    if(e.target.value===''){
      setData[e.target.name]=[]
    }else{
    setData[e.target.name]=[e.target.value]
  }
  }
  setSearch(setData)
 }
const searchData=()=>{
  navigate({
    pathname: "/search",
    search: createSearchParams({
        state: search.states.join(','),
        services:search.industry.join(','),
        page:1
    }).toString(),
    state:search
});
}
 useEffect(() => {

    // getStat()
    if(storeState.length===0){
    getStates().then(x=>{
      console.log(x,'yes')
      dispatch(get_UnitedStates_states(x.data.data))
    })
  }
 }, []);
  
  return (
    <>
      <div className='banner'>
        {console.log(search)}
        <div className="bannersection">
          <div className="row ">
            <div className="col-lg-10  mx-auto ">
              <div className="bannerheading">
                <div className="logoimage">
                  <img src={logo} className="image-fluid" />
                </div>
                <h1>Find Patriotic-pros for your home project.</h1>
                <p>You love America, Hire a Pro that does too. Free for Pros, Free for Homeowners.</p>
                <div className="conatiner w-100 ">
                  <div className='options'>
                    <div  className="firstsection ">
                      <select onChange={(e)=>{setValue(e)}}    name="industry" className='form-select ' id="select" >
                       <option selected value="" >Services</option>
                      {
                      services.map((val, ind) => {
                              return (
                                <option value={val}> {val}</option>
                              )
                            })
                          }
                      </select>
                    </div>
 
                    <div className="seacondsection">
                      <select onChange={(e)=>{setValue(e)}} name="states" className='form-select ' id="select" >
                        <option selected value="">States</option>
                        {
                            storeState.length>0&&storeState.map((val, ind) => {
                              return (

                              <option value={val.state}> {val.state} </option>
                            )
                          })
                        }
                    </select>
                     
                    </div>

                    <span className="searchbutton ">
                     <button className='btn-danger'>
                       <NavLink to="/search"> 
                        Search 
                         </NavLink>
                        </button> 
                    </span>

                  </div>
                </div>



                <div className="conatiner w-100 mobileview ">
                  <div className='options'>
                     
                     {/* {services==="" ? */}
                     <>
                      <div  className="firstsection ">
                      <select onChange={(e)=>{setservices(e.target.value)}}    name="select" className='form-select ' id="select" >
                       <option selected value="" >Services</option>
                      {
                      services.map((val, ind) => {
                              return (
                                <option value={val}> {val}</option>
                              )
                            })
                          }
                      </select>
                    </div>
                     </>
                     {/* } */}
                    <span onClick={searchData} className="searchbutton" style={{cursor:'pointer'}}>
                     <button  className='btn-danger'>
                        Search 
                        </button> 
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
