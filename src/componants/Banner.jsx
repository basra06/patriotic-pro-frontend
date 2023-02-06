import React, { useEffect, useState } from 'react'
import "../sass/global/global.css"
import "../sass/banner/banner.css"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/footerimage/Transparent-white 1.png"
import axios from 'axios';
export const Banner = () => {
  const[services,setservices]=useState(["Air Conditioning" ,
  "Carpentry","Cleaning","Concrete","Drywall","Electrician",
  "Fencing","Garage Door Installation","Handyman","Heating & Furnace","HVAC Contractors"
 ,"HVAC Contractors","Landscaping","Painting","Pest Control","Plumbing","Remodeling","Roofing","Tile"]);

 const[servise,setservice]=useState("");
  
 const [data, setdata] = useState([]);
 const [state, setstate] = useState("");

 useEffect(() => {

    getStat()
 }, []);
 const getStat = () => {
   axios.get('https://raw.githubusercontent.com/CivilServiceUSA/us-states/master/data/states.json')
     .then(function (response) {
       // setdata(response.data);
       console.log(response.data);
       console.log(data);
       setdata(response.data);
       console.log(data);

     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .finally(function () {

     });


 }
  
  return (
    <>

      <div className='banner'>
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
                      <select onChange={(e)=>{setservice(e.target.value)}}    name="select" className='form-select ' id="select" >
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
                      <select onChange={(e)=>{setstate(e.target.value)}} name="select" className='form-select ' id="select" >
                        <option selected value="">States</option>
                        {
                            data.map((val, ind) => {
                              return (

                                <option value={val.state}> {val.state} </option>
                              )
                            })
                          }
                      </select>
                    </div>
                    <span className="searchbutton ">
                     <button className='btn-danger'><NavLink to="/search">Search </NavLink></button> 
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
