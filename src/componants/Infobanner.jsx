import React from 'react'
import "../sass/infobanner/info.css"
import "../sass/global/global.css"
import logomodal from "../assets/images/navbarimges/Transparent-logo 2.png"

export const Infobanner = () => {
  return (
    <>
    <div className='infobanner ' >
        <div className="container">
            <div className="row ">
                <div className="col-lg-10 mx-auto ">
                <div className="tex">
                <h1 className='text-center text-white '>Choose a better way to work.</h1>
                <p className='text-center'>You love America, Hire a Pro ove America, Hire a that does too.  a Pro that does too Free for Pros, Free for Homeowners.</p>

              <div className='but'>
              <button data-bs-toggle="modal" data-bs-target="#loginmodal" className='btn btn-danger'>Login</button>
              </div>
               
                </div>
                </div>
            
            </div>
        </div>



     </div>

     <div className="modal fade " id="loginmodal" tabindex="-1" >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="header-image text-center  mt-1 ">
              <img src={logomodal} />
              <h2>Login Now</h2>
            </div>


            <div className="modal-body ">
              <form className='p-2'>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Email :</label>
                  <input type="email" placeholder='Enter Your Email' className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Password :</label>
                  <input type="password" placeholder='Enter Your Password' className="form-control" />
                </div>
                <h6 className='mt-2 p-1'><a href='#'>Forgot Passsword?</a></h6>

              </form>
            </div>
            <div className="modal-footer   ">
              <button type="button" className="btn btn-danger w-100" data-bs-dismiss="modal">Login</button>

            </div>
            <div className='bottom mt-2 mb-3'>
              <p>I don’t have an account: <span> <a href='#'>Click Here</a>  </span> </p>
            </div>
          </div>
        </div>

      </div>







    </>





  )
}
