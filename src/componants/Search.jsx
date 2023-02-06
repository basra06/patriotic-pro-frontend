import React from 'react'
import "../sass/search/search.css"
import "../sass/global/global.css"
import person from "../assets/images/search/unsplash_yEYmnaFuYVM.png"
import { Link } from 'react-router-dom'

export const Search = () => {
  return (
    <>

      <div className="search">
        <div className="container ">
          <div className="row ">
            <h2>Lip Filler texas, USa</h2>
            <h6>All 363 Lip Filler Clinics in texas, UK</h6>

            <div className="col-lg-2 col-md-2 col-12 boxes ">
              <p style={{ color: "#B1B1B1" }}>Industries</p>

              <div className="filtersection">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>





                </div>


                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>
                </div>




                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>
                </div>



                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>
                </div>


                <p>View All</p>
              </div>








              <div className="filtersection">
                <p style={{ color: "#B1B1B1" }}>Industries</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>





                </div>


                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>
                </div>




                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>
                </div>



                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Medical
                  </label>
                </div>

                <p className='view'>View All</p>
              </div>
            </div>

            <div className="col-lg-10 col-md-10 col-12 detail ">

              <div className="card">
                <div className="row ">
                  <div className=" col-lg-2 col-md-3 col-12 ">
                    <img src={person} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-lg-10 col-md-9 col-12">
                    <div className="card-body mx-auto">

                      <div className="firstsection">
                        <div className="name">
                          <h3 className='fw-bold'>Emergency Dentist</h3>
                        </div>
                        <div className="but">
                          <button className='btn btn-danger'><Link to="/enquiry" >Enquiry </Link> <span><i className='fa fa-arrow-right'></i></span></button>
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


                      <div className="thirdsection">
                        <p>Medical</p>
                      </div>


                      <div className="fourthsection">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              {/*thirdinfo */}
              <div className="card">
                <div className="row ">
                  <div className=" col-lg-2 col-md-3 col-12 ">
                    <img src={person} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-lg-10 col-md-9 col-12">
                    <div className="card-body mx-auto">

                      <div className="firstsection">
                        <div className="name">
                          <h3 className='fw-bold'>Emergency Dentist</h3>
                        </div>
                        <div className="but">
                          <button className='btn btn-danger'><Link to="/enquiry" >Enquiry </Link> <span><i className='fa fa-arrow-right'></i></span></button>
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


                      <div className="thirdsection">
                        <p>Medical</p>
                      </div>


                      <div className="fourthsection">
                        <p>Lorem Ipsum is simply dummy text of the printing
                          and typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and


                          scrambled it to make a type specimen book.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>



              {/* end */}
              <div className="card">
                <div className="row ">
                  <div className=" col-lg-2 col-md-3 col-12 ">
                    <img src={person} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-lg-10 col-md-9 col-12">
                    <div className="card-body mx-auto">

                      <div className="firstsection">
                        <div className="name">
                          <h3 className='fw-bold'>Emergency Dentist</h3>
                        </div>
                        <div className="but">
                          <button className='btn btn-danger'><Link to="/enquiry" >Enquiry </Link> <span><i className='fa fa-arrow-right'></i></span></button>
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


                      <div className="thirdsection">
                        <p>Medical</p>
                      </div>


                      <div className="fourthsection">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>




      {/* mobileviewsection */}

      <div className="mobileview">
        <div className="container ">
          <div className="row ">
            <h2>Lip Filler texas, USa</h2>
            <h6>All 363 Lip Filler Clinics in texas, UK</h6>
            {/* */}
            <div className="card">
              <div className="row m-2 ">
                <div className=" col-6 ">
                  <img src={person} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-6">
                  <div className="card-body mx-auto">

                    <div className="firstsection">
                      <div className="name">
                        <h3 className='fw-bold'>Emergency Dentist</h3>
                      </div>
                      {/* <div className="but">
                          <button className='btn btn-danger'><Link to="/enquiry" >Enquiry </Link> <span><i className='fa fa-arrow-right'></i></span></button>
                        </div> */}
                    </div>

                    <div className="secondsection">
                      <div className="icon">
                        <i className=' fa fa-map-marker '></i>
                      </div>
                      <div className="detail">
                        <p>Lorem ipsum dolor  sapiente saepe est, adipisc.</p>
                      </div>
                    </div>


                    <div className="thirdsection">
                      <p>Medical</p>
                    </div>




                  </div>
                </div>

                <div className="col-12">
                  <div className="fourthsection">
                    <p>Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and


                      scrambled it to make a type specimen book.</p>
                  </div>

                  <div className="but">
                    <button className='btn btn-danger'><Link to="/enquiry" >Enquiry </Link> <span><i className='fa fa-arrow-right'></i></span></button>
                  </div>
                </div>


              </div>




            </div>


            {/* */}
            <div className="card">
              <div className="row ">
                <div className=" col-6 ">
                  <img src={person} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-6">
                  <div className="card-body mx-auto">

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


                    <div className="thirdsection">
                      <p>Medical</p>
                    </div>




                  </div>
                </div>

                <div className="col-12">
                  <div className="fourthsection">
                    <p>Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.</p>
                  </div>

                  <div className="but">
                    <button className='btn btn-danger'><Link to="/enquiry" >Enquiry </Link> <span><i className='fa fa-arrow-right'></i></span></button>
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
