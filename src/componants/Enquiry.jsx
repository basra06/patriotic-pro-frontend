import React from 'react'
import "../sass/enquiry/enquiry.css"
import person from "../assets/images/search/unsplash_yEYmnaFuYVM.png"

export const Enquiry = () => {
  return (
    <>

      <div className="enquiry">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-12">
              <div className="cardsinfo">
                <div class="card mb-3" >
                  <div class="row">
                    <div class="col-md-4 ">
                     <div className="image">
                     <img  src={person} class="image-fluid " alt="..." />
                     </div>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <div className="firstsection">
                          <div className="name">
                            <h3 className='fw-bold'>Emergency Dentist</h3>
                          </div>

                        </div>




                        <div className="secondsection">
                          <div className="icon">
                            <i className=' fa fa-map-marker '></i>
                          </div>
                          <div className="detail">
                            <p>Lorem ipsum dolor  sapiente saepe est, adipisc.</p>
                          </div>
                        </div>


                        <div className="thirsection">
                          <div className="question">
                            <p>Industry :</p>
                          </div>
                          <div className="answer">
                            Medical
                          </div>
                        </div>



                        <div className="fourection">
                          <div className="question">
                            <p>State :</p>
                          </div>
                          <div className="answer">
                            Taxes
                          </div>
                        </div>


                        <div className="fifthsection">
                          <div className="question">
                            <p>Company :</p>
                          </div>
                          <div className="answer">
                            jsf ewkfow fwr wjrqj
                          </div>
                        </div>



                      </div>
                    </div>
                  </div>




                  <hr>
                  </hr>


                  <div className="cardsecondsection">
                    <div class="card-body">
                      <h5 class="">About Tom/Bio</h5>
                      <div class="f"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                      <div class="s"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                    </div>
                  </div>


                </div>



              </div>



            </div>













            <div className="col-lg-6 col-md-12 col-12">

              <div style={{
                background: "#FFFFFF",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)"
              }} className="p-2">

                <h3 className='text-center mt-5  mb-5'>Contact Texas Denture Care</h3>

                <div className="form  p-2">



                  <div className="form-floating mb-3 w-100">
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


                  <div className="form-floating">
                    <textarea style={{ height: "180px" }} className="form-control " placeholder="Leave a comment here" ></textarea>
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



    </>
  )
}
