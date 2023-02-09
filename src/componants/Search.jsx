import React, { useEffect, useState } from 'react'
import "../sass/search/search.css"
import "../sass/global/global.css"
import person from "../assets/images/search/unsplash_yEYmnaFuYVM.png"
import { Link } from 'react-router-dom'
import { getSearchData } from '../api/server'
import { useDispatch } from 'react-redux'
import { set_Filter_Data } from '../Redux-Store/actions'
import { useSearchParams } from "react-router-dom";

export const Search = (props) => {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState({
    states:[],
    industry:[],
  })
  const [page, setPage] = useState(0)
  let [searchParams, setSearchParams] = useSearchParams({});
  // const SearchAPI=async()=>{
  //   console.log(props.industry,'lllllllll')
  //   if(props){
  //   let searchTheData={
  //     states:props.state.split(",")[0]!==""?props.state.split(","):searchData.states,
  //     industry:props.industry.split(",")[0]!==""?props.industry.split(","):searchData.industry,
  //   }
  //   let page={
  //     page:parseInt(props.page)
  //   }
  //   setSearchData(searchTheData)
  //   dispatch(set_Filter_Data(Object.assign(searchData, page)))
  //   setPage(props.page)
  //   console.log(searchTheData)
  //   // if(searchData){
  //   await getSearchData(props.page,searchData)
  //   .then(x=>{
  //       console.log(x,'searchData')
  //     })
  //   // }
  // }
    
    
  // }
  useEffect(() => {
    // SearchAPI()
  }, [])
  
  return (
    <>
    {console.log(searchParams.get("__firebase_request_key"),'DataGetIt')}
      <div className="search">
        <div className="container ">
          <div className="row ">
            <h2>Lip Filler texas, USa</h2>
            <h6>All 363 Lip Filler Clinics in texas, UK</h6>

            <div className="col-lg-2 col-md-2 col-12 boxes ">
              <p>Industries</p>

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
                    Cleaning
                  </label>
                </div>




                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Skin Care
                  </label>
                </div>



                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Plumbering
                  </label>
                </div>


                <p>View All</p>
              </div>







              <p >States</p>
              <div className="filtersection">


                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                  <label className="form-check-label" for="flexCheckChecked">
                    Albama
                  </label>
                </div>


                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Arizone
                  </label>
                </div>




                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Arkansas
                  </label>
                </div>



                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    California
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

                        <div className="location">
                          <span ><i className='fa fa-map-marker'></i>
                            Lorem ipsum dolor e est, adipisc.</span>
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

                        <div className="location">
                          <span ><i className='fa fa-map-marker'></i>
                            Lorem ipsum dolor e est, adipisc.</span>
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

                        <div className="location">
                          <span ><i className='fa fa-map-marker'></i>
                            Lorem ipsum dolor e est, adipisc.</span>
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
          <div className="row m-1 ">
            <h2>Lip Filler texas, USa</h2>
            <h6>All 363 Lip Filler Clinics in texas, UK</h6>

            <div className="col-12">
              <div className="filtersection">
                <div className="row">
                  <div className="col-12 mx-auto">

                    <div className="filter">
                      <div className="industry">
                        <div class="dropdown">
                          <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Industries
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                      </div>

                      <div className="state">
                        <div class="dropdown">
                          <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            States
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>


            {/* */}
            <div className="col-12 mx-auto">
              <div className="card mt-2 mb-2">

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-6 ">
                    <img src={person} className="image-fluid" alt="..." />
                  </div>
                  <div className="col-lg-8 col-md-8 col-6 ">
                    <div className="card-body mx-auto">

                      <div className="firstsection">
                        <div className="name">
                          <h3 className='fw-bold'>Emergency Dentist</h3>
                        </div>
                      </div>

                      <div className="secondsection">

                        <div className="location">
                          <span ><i className='fa fa-map-marker'></i>
                            Lorem ipsum <span> ...</span>.</span>
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


            {/* */}



            <div className="col-12 mx-auto">
              <div className="card mt-2 mb-2">

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-6 ">
                    <img src={person} className="image-fluid" alt="..." />
                  </div>
                  <div className="col-lg-8 col-md-8 col-6 ">
                    <div className="card-body mx-auto">

                      <div className="firstsection">
                        <div className="name">
                          <h3 className='fw-bold'>Emergency Dentist</h3>
                        </div>
                      </div>

                      <div className="secondsection">

                        <div className="location">
                          <span ><i className='fa fa-map-marker'></i>
                            Lorem ipsum dolor e est, adipisc.</span>
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
      </div>



    </>
  )
}
