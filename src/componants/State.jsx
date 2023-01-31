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
  
    console.log(data);

  console.log(data);
  return (
    <>
    <div className="states">
        <div className="container mt-5 mb-5">
            <div className="row  ">

               <div className="text">
                <h2>All states list</h2>
                <p>You love America, Hire a Pro that does too. Free for Pros, Free for Homeowners.</p>

               </div>
                    {
                     data.map((val,ind)=>{
                      
                        return(
                           
                              <div className="col-lg-2 col-md-4 col-6  mt-1 mb-1 p-2 ">
                             <span className='p-1 '>
                        <img style={{width:'24px'}} className='image-fluid'  src={val.state_flag_url} />
                         <a href="#">  {val.state}</a> 
                    </span>
                    </div>

                    
                         
                        )
                      
                     })
                }


 <h6 className='text-center mt-4 mb-2 '>View All States</h6> 

                   

            </div>
        </div>
    </div>
    
    </>
  )
}
