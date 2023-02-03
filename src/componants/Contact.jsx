import React from 'react'
import "../sass/contact/contact.css"
import contact from "../assets/images/contactimage/60-[Converted].png"

export const Contact = () => {
  return (
    <>

      <div className="contact ">
        <div className="container">

          <div className="row ">
            <h2>Get in touch</h2>
          <div className="para">
          <p >You love America, Hire a Pro that does too. Free for Pros, Free for Homeowners.</p>
          </div>



            <div className="col-lg-5 col-md-6 col-sm-12  ">
              <div className="image ">
                <img style={{ width: '100%' }} src={contact} />
              </div>
            </div>


            <div className="col-lg-7 col-md-6 col-sm-12 p-2">
              <div className="form">

                <div className="row p-1 m-1">
                  <div className="col-lg-6 col-md-6 col-sm-12  ">


                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput" className=' fw-bold'>Enter Name</label>
                    </div>


                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="123@gmail.com" />
                      <label htmlFor="floatingInput " className='fw-bold'>Enter Email</label>
                    </div>


                    <div className="form-floating mb-3">
                      <input type="tel" className="form-control text-dark" id="floatingInput" placeholder="1234-1234567" />
                      <label fhtmlForr="floatingInput " className='fw-bold'>Phone Number</label>
                    </div>
                  </div>


                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="form-floating">
                      <textarea  className="form-control " placeholder="Leave a comment here" ></textarea>
                      <label htmlFor="floatingTextarea" className=' fw-bold'>Message</label>
                    </div>

                  </div>

                  <div className="butt mt-2 mb-2 p-2">
                    <button className='btn btn-danger w-100'>Send</button>
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
