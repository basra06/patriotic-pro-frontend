import React from 'react'
import "../sass/infobanner/info.css"
import "../sass/global/global.css"

export const Infobanner = () => {
  return (
    <>
    <div className='infobanner ' >
        <div className="container mt-2 mb-2">
            <div className="row  py-5 ">
                <div className="col-lg-10 mt-3 mb-2 mx-auto py-1">
                <div className="tex py-2">
                <h1 className='text-center text-white  mt-4'>Choose a better way to work.</h1>
                <p>You love America, Hire a Pro that does too. Free for Pros, Free for Homeowners.</p>

              <div className='but mt-5'>
              <button className='btn btn-danger p-2'>Login</button>
              </div>
               
                </div>
                </div>
            
            </div>
        </div>



     </div>
    </>
  )
}
