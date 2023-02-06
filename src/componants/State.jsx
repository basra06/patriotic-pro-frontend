import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../sass/state/state.css"

export const State = () => {
    const[data,setdata]=useState([]);
    useEffect(()=>{
        getStat();
    },[]);
    const getStat=()=>{
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
    <div className="states">
        <div className="container ">
            <div className="row  ">

               <div className="Stateheading">
                <h2>All states list</h2>
                <p>You love America, Hire a Pro that does too. Free for Pros, Free for Homeowners.</p>

               </div>
                    {
                     data.map((val,ind)=>{
                      
                        return(
                           
                              <div className="col-lg-2 col-md-4 col-6 mt-1 mb-1 p-1 mx-auto credits">
                             <span className='flagdata '>
                        <img  className='image-fluid'  src={val.state_flag_url} />
                         <a href="#">  {val.state}</a> 
                    </span>
                    </div>
      
                        )
                      
                     })
                }
                  <h6 className='text-center  '>View All States</h6> 
            </div>
        </div>
    </div>
    
    </>
  )
}
