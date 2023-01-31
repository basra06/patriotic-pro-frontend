import React from 'react'
import "../sass/global/global.css"
import "../sass/banner/banner.css"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/footerimage/Transparent-white 1.png"

export const Banner = () => {
  return (
    <>

      <div className='banner'>
        <div className=" mt-5 mb-5">
          <div className="row  py-5 ">
            <div className="col-lg-10 mt-3 mb-2 mx-auto py-2">
              <div className="tex py-3">

                 <div className="logoimage">
                  <img src={logo} className="image-fluid" />
                 </div>
                <h1  >Find Patriotic-pros for your home project.</h1>
                <p>You love America, Hire a Pro that does too. Free for Pros, Free for Homeowners.</p>


                <div className="conatiner w-100">
                  <div className=' mt-5 '>
                    
                    <div className="first">
                    <select style={{ borderRight: "1px solid rgba(51, 51, 51, 0.3)"}} name="select" className='form  w-40 p-2 m-2' id="select" >
                      <option value="1">option 1</option>
                      <option value="2">option 2</option>
                      <option value="3">option 3</option>
                      <option value="4">option 4</option>
                      <option value="5">option 5</option>
                      <option value="6">option 6</option>
                    </select>
                    </div>
                    

                    <div className="seacond">
                    <select  name="select" className='form  w-40 p-2 m-2' id="select" >
                      <option value="1">option 1</option>
                      <option value="2">option 2</option>
                      <option value="3">option 3</option>
                      <option value="4">option 4</option>
                      <option value="5">option 5</option>
                      <option value="6">option 6</option>
                    </select>
                    </div>
                    

                  
                   <div className="but ">
                   <button className='btn-danger ' ><NavLink className="go" to="/search">Search Now</NavLink></button>
                   </div>

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
