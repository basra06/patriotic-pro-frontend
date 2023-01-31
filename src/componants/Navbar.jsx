import React, { useEffect, useState } from 'react'
import "../sass/navbar/navbar.css"
import logo from "../assets/images/navbarimges/logo.png"
import {NavLink} from "react-router-dom"
import flag from "../assets/images/navbarimges/flag.png"
import logomodal from "../assets/images/navbarimges/Transparent-logo 2.png"
import axios from 'axios';
export const Navbar = () => {
  const [data, setdata] = useState([]);
  const [statevalue, setstatevalue] = useState("");
  console.log(statevalue)

  const [active, setactive] = useState(true);








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

  console.log(data);


  return (
    <>

      <div className="navbarsection sticky-top  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
              <nav className="navbar  navbar-expand-lg ">
                <div className="container py-1">
                  <NavLink className="navbar-brand" to="/"><img src={logo} /></NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0 ">

                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">About Us</NavLink>
                      </li>

                      <li className="nav-item">
                        <select onChange={(e) => setstatevalue(e.target.value)} className="form-select   " >
                          <option selected>New York</option>
                          {
                            data.map((val, ind) => {
                              return (

                                <option value={val.state}> {val.state} <img src={val.map_image_url
                                } /></option>


                              )
                            })
                          }
                        </select>


                      </li>


                      <li className="nav-item">
                        <NavLink style={{ color: "#D42443" }} className="nav-link " data-bs-toggle="modal" data-bs-target="#loginmodal" to="/">Login</NavLink>
                      </li>




                      <li className="nav-item">
                        <NavLink className="nav-link btn btn-danger" data-bs-toggle="modal" data-bs-target="#signup1" to="/">Sign Up <span><i className='fa fa-arrow-right'></i></span></NavLink>
                      </li>


                    </ul>

                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>





      {/* Login Modal */}
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






      {/* Signupmodal 1 */}
      <div className="modal fade " id="signup1" tabindex="-1" >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="header-image text-center  mt-1 mb-1">
              <img src={logomodal} />
              <h2>Add Your Company</h2>
            </div>



            <div className="progress mt-3">
              <div className="progressbar" role="progressbar" style={{ width: '0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              <div className="circle">0</div>

            </div>




            <div className="modal-body ">
              <form className='p-2'>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Name :</label>
                  <input type="email" placeholder='Enter Your Email' className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Email :</label>
                  <input type="password" placeholder='Enter Your Email' className="form-control" />
                </div>


                <div >
                  <label htmlFor="message-text" className="col-form-label">Company Name :</label>
                  <input type="text" placeholder='Enter Your company Name' className="form-control" />
                </div>


              </form>
            </div>
            <div className="modal-footer mb-3  ">
              <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#signup2" >Next</button>


            </div>

          </div>
        </div>

      </div>



      {/* Signupmodal 2 */}
      <div className="modal fade " id="signup2" tabindex="-1" >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="header-image text-center  mt-1 mb-1">
              <img src={logomodal} />
              <h2>Add Your Company</h2>
            </div>


            <div className="progress mt-3">
              <div className="progressbar-active" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              {active ? <div className="circle">1</div> : <div className="circle"><i className='fa fa-check'></i></div>}
            </div>

            <div className="modal-body ">
              <form className='p-2'>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Chose Industry :</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="message-text" className="col-form-label">Chose State :</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

              </form>
            </div>
            <div className="modal-footer mb-3  ">
              <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#signup3" >Next</button>

            </div>

          </div>
        </div>

      </div>


      {/* signupmodal 3 */}
      <div className="modal fade " id="signup3" tabindex="-1" >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="header-image text-center  mt-1 mb-1">
              <img src={logomodal} />
              <h2>Add Your Company</h2>
            </div>
            <div className="progress mt-3">
              <div className="progressbar-active" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              <div className="circle">2</div>
            </div>
            <div className="modal-body ">
              <form className='p-2'>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Address :</label>
                  <input type="email" placeholder='Enter Your Email' className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Bio :</label>
                  <textarea type="password" placeholder='Description' className="form-control" />
                </div>



                <div className=''>
                  <label htmlFor="message-text" className="col-form-label">Upload Pic:</label>
                  <div className=" im">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                      alt="example placeholder" style={{ width: "50px" }} />
                    <div className="d-flex justify-content-center">
                      <div className="browse m-1">
                        <label className="form-label " for="customFile1"><p>Browse file</p></label>
                        <p>Upload Pic</p>
                        <input type="file" className="form-control d-none" id="customFile1" />

                      </div>
                    </div>
                  </div>

                </div>


              </form>
            </div>
            <div className="modal-footer mb-3  ">
              <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#signup4" >Next</button>


            </div>

          </div>
        </div>

      </div>



      {/* signupmodal 4 */}
      <div className="modal fade " id="signup4" tabindex="-1" >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="header-image text-center  mt-1 mb-1">
              <img src={logomodal} />
              <h2>Add Your Company</h2>
            </div>


            <div className="progress mt-3">
              <div className="progressbar-active" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              <div className="circle">3</div>
            </div>

            <div className="modal-body ">
              <form className='p-2'>

                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Email :</label>
                  <input type="email" placeholder='Enter Your Email' className="form-control" />
                </div>


                <div className="">
                  <label htmlFor="message-text" className="col-form-label">Password:</label>
                  <input type="password" placeholder='Enter Your Password' className="form-control" />
                </div>


              </form>
            </div>
            <div className="modal-footer mb-3 ">
              <button type="button" className="btn btn-danger w-100" data-bs-dismiss="modal" >Sign Up</button>


            </div>

          </div>
        </div>

      </div>



    </>
  )
}
