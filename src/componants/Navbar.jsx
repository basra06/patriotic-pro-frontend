import React, { useEffect, useState } from 'react'
import "../sass/navbar/navbar.css"
import logo from "../assets/images/navbarimges/Transparent-logo 2.png"
import logo2 from "../assets/images/navbarimges/Transparent-logo 1 (1).png"
import { NavLink, useNavigate } from "react-router-dom"
import flag from "../assets/images/navbarimges/flag.png"
import logomodal from "../assets/images/navbarimges/Transparent-logo 2.png"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik} from 'formik'
import * as Yup from 'yup';


export const Navbar = () => {
  const navigate=useNavigate();

  const [initialValues, setInitialValues] = useState({
  
    userName:'',
    password:'',
    email:'',
    companyName:'',
    industry:'',
    state:'',
    address:'',
    bio:'',
    file:''
  });
  const[login,setLogin]=useState({
    email:"",
    password:""
  })

  const [process, setProcess] = useState({
    firtStep:true,
    secondStep:false,
    thirdStep:false,
    fourthstep:false,
  })
  const[progress,setprogress]=useState(0);
  const[email,setEmail]=useState("");
  const[modaelShow,setmodelShow]=useState(true);
   const[emailError,setEmailError]=useState("");
  const[password,setPassword]=useState("");
  const[passworderror,setPasswordError]=useState("");
  const[width,setwidth]=useState(0)
  const [data, setdata] = useState([]);
  const [statevalue, setstatevalue] = useState();
  const [active, setactive] = useState(true);
  const[error,seterror]=useState(false);
  const [flag, setflag] = useState();
  const setFlagState = (value) => {
    setstatevalue(value);
    let flagData = data && data.filter(x => x.state === value)
    flagData && setflag(flagData[0])
  }
  useEffect(() => {
    getStat();

  }, []);

  const getStat = () => {
    axios.get('https://raw.githubusercontent.com/CivilServiceUSA/us-states/master/data/states.json')
      .then(function (response) {
        let defalt = response.data;
        setdata(defalt)
        setflag(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {

      });


  }

  const SignUpSchema=Yup.object({
    userName:Yup.string().min(2).max(20).required('Please enter your First Name'),
    email:Yup.string().email().required("Enter Your Email"),
    password:Yup.string().min(6).required("Enter Your Password"),
    companyName:Yup.string().min(3).max(40).required("Enter Your Company Name"),
    industry:Yup.string().required("Select The Industry Field"),
    address:Yup.string().min(5).max(50).required("Address Is Required"),
    state:Yup.string().required("Select The State Field"),
    bio:Yup.string().min(5).max(100).required("Bio Field Is Required")
    // file:Yup.mixed().required("File is Required"),
})

  const {handleChange,touched,handleSubmit,values,errors,handleBlur}= useFormik({ 
    initialValues:initialValues,
    validationSchema:SignUpSchema,
     onSubmit:(values,action) => { 
       console.log(values);
     }  
  }); 

  const changes=()=>{
    if(process.firtStep===true){
      setprogress(1);
      setwidth(25);
      console.log(values.userName);
      if(values.userName!=="" && values.companyName!==""){
        // alert("both field empty");

         console.log(errors.userName)
        if(errors.userName===undefined,errors.companyName===undefined){
          setProcess({...process,firtStep:false,secondStep:true});
        }
        
      }
      
        
      }

      else if(process.secondStep===true){
        setwidth(50);
        setprogress(2);
        if(values.state!=="" && values.industry!==""){
         
          if(errors.state===undefined,errors.industry===undefined){
           
            setProcess({...process,secondStep:false,thirdStep:true});
          }
          
        }
      }



      else if(process.thirdStep===true){
        setprogress(3);
        setwidth(75);
        if(values.bio!=="" && values.address!=="" ){
          if(errors.bio===undefined,errors.address===undefined){
            setProcess({...process,thirdStep:false,fourthstep:true});
          }
          
        }
      }






      else if(process.fourthstep===true){
        setprogress(4);
        setwidth(100);
        if(values.email!=="" && values.password!==""){
           console.log(errors.state)
          if(errors.email===undefined,errors.password===undefined){
      
            console.log(values);
            setInitialValues({});
            setProcess("");

            setProcess("");
            toast.success("signIn Successfully");
          }
          
        }
      }
    
    
  }

  const LoginSubmit=()=>{
     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email==""){
      setEmailError("Enter Your Email Address");
      return false
    }
    else if(regex.test(email) === false){
      setEmailError("Not a Valid Email Address");
      return false;
    }
    else if(password==""){
      setEmailError("");
      setPasswordError("Enter Your Password");
      
      return false;
    }
    else if(password.length<=6){
      setEmailError("");
      setPasswordError("Password Must Be Greater Then Six Characters");
      return false;
    }
    else{
        setEmailError("");
        setPasswordError("");
        setEmail("");
        setPassword("");
      setLogin(login.email=email,login.password=password);
      console.log(login);
      toast.success("login successfully");
      setmodelShow(false);
      navigate("/");

    }



  }

  return (
    <>
      <div   className=" desktop sticky-top ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
              <nav   className="navbar  navbar-expand-lg ">
                <div className="container py-1">
                  <NavLink className="navbar-brand" to="/"><img className='leftimage' src={logo} /> <span><img className='rightimage' src={logo2} /></span></NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0 ">

                      <li className="nav-item ">
                        <NavLink  className="nav-link" to="/">About Us</NavLink>
                      </li>
                      <li className="nav-item">
                        <span>
                          {flag && <img src={flag.state_flag_url} />}
                        </span>
                        <select  onChange={(e) => setFlagState(e.target.value)} className="select" >
                          {
                            data.map((val, ind) => {
                              return (
                                <option key={ind} value={val.state}  > {val.state} </option>
                              )
                            })
                          }
                        </select>
                      </li>
                      <li className="nav-item">
                        <NavLink  className="nav-link login " data-bs-toggle="modal" data-bs-target="#loginmodal" to="/">Login</NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink className="nav-link btn btn-danger " data-bs-toggle="modal" data-bs-target="#signup1" to="/">Sign Up <span><i className='fa fa-arrow-right'></i></span></NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* tablet view */}
      <div className="tablet sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
              <nav className="navbar  navbar-expand-lg  ">
                <div className="container py-1">
                  <NavLink className="navbar-brand" to="/"><img className='leftimage'  src={logo} /> <span><img className='rightimage' src={logo2} /></span></NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-lg-0 ">

                      <li className="nav-item ">
                        <NavLink className="nav-link" to="/">About Us</NavLink>
                      </li>

                      <li className="nav-item">
                        <span>
                          {flag && <img  src={flag.state_flag_url} />}
                        </span>
                        <select  onChange={(e) => setFlagState(e.target.value)} className="select" >
                          {
                            data.map((val, ind) => {

                              return (

                                <option value={val.state}  > {val.state} </option>


                              )
                            })
                          }
                        </select>
                      </li>
                      <li className="nav-item">
                        <NavLink style={{ color: "#D42443" }} className="nav-link login " data-bs-toggle="modal" data-bs-target="#loginmodal" to="/">Login</NavLink>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile  View*/}
      <div className="mobile sticky-top ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
              <div className="navbar">
                <div className="but">
                  <button id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="button">< i className='fa fa-bars'></i></button>
                  <ul style={{ transform: 'translate(40px, 54px, 0px)' }} className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                    <li ><a className="dropdown-item active" href="/">About Us</a></li>
                    <li ><a className="dropdown-item " >
                      <select style={{ border: 'none', backgroundColor: "white " }} onChange={(e) => setFlagState(e.target.value)} className="select" >
                        {
                          data.map((val, ind) => {
                            return (

                              <option value={val.state}  > {val.state} </option>
                            )
                          })
                        }
                      </select></a></li>
                    <li ><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#loginmodal" href="/">Login</a></li>
                  </ul>
                </div>

                <div className="bu">
                  <button className='btn '><a data-bs-toggle="modal" data-bs-target="#loginmodal" href='#'>Login</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login Modal */}
      <div className="modal fade "  id="loginmodal" tabindex="-1" >
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
              <form  className='p-2'>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Email :</label>
                  <input autoComplete='off' onChange={(e)=>setEmail(e.target.value)}  type="email" required value={email} placeholder='Enter Your Email' className="form-control" />
                  { emailError ? <p className='text-danger'>{emailError}</p>:null}
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Password :</label>
                  <input autoComplete='off' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Your Password' value={password} className="form-control" />
                  { passworderror ? <p className='text-danger'>{passworderror}</p>:null}  
                </div>
                <h6 className='mt-2 p-1'><a href='#'>Forgot Passsword?</a></h6>
                <div className="modal-footer   ">
              <button onClick={()=>LoginSubmit()} type="button" className="btn btn-danger w-100" >Login</button>

            </div>
              </form>
            </div>    
            <div className='bottom mt-2 mb-3'>
              <p>I don’t have an account: <span> <a data-bs-toggle="modal" data-bs-target="#signup1" href='#'>Click Here</a>  </span> </p>
            </div>
          </div>
        </div>

      </div>


      {/* Signupmodal 1 */}
      <div className="modal fade " id="signup1" tabIndex="-1" >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header ">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="header-image text-center  mt-1 mb-1">
              <img src={logomodal} alt="" />
              <h2>Add Your Company</h2>
            </div>



            <div className="progress mt-3">
              <div className="progressbar" role="progressbar" style={{width:`${width}%` }} aria-valuenow="25" aria-valuemin="25" aria-valuemax="100"></div>
              <div className="circle">{progress}</div>

            </div>




            <div className="modal-body ">
              <form  className='p-2'>
 
                 { process.firtStep
                   ? 
                   <>
                     <div className="mb-3">
                  <label  className="col-form-label">Name :</label>
                  <input onChange={handleChange} onBlur={handleBlur}  value={values.userName}  required  type="text" id="userName"   name="userName"  placeholder='Enter Your userName ' className="form-control" />
                   { errors.userName  && touched.userName  ? <p className='text-danger'>{errors.userName}</p> :null} 
                </div>
               
                <div lassName="mb-3" >
                  <label  className="col-form-label">Company Name :</label>
                  <input  onChange={handleChange}  onBlur={handleBlur} value={values.companyName} required type="text" name="companyName" id="companyname" placeholder='Enter Your company Name' className="form-control" />
                   { errors.companyName  && touched.companyName  ? <p className='text-danger'>{errors.companyName}</p>:null}  
                </div>
                </>
              
                :""}






                {/* Chose industry */}
                { process.secondStep 
                ?
                <>
                  <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Chose Industry :</label>
                  <select onChange={handleChange} onBlur={handleBlur} value={values.industry} name="industry" className="form-select" aria-label="Default select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  { errors.industry  && touched.industry  ? <p className='text-danger'>{errors.industry}</p>:null}  
                </div> 

                  
                 
                 <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Chose State :</label>
                  <select  onChange={handleChange} onBlur={handleBlur} value={values.state} name="state" className="form-select" aria-label="Default select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  { errors.state  && touched.state  ? <p className='text-danger'>{errors.state}</p>:null}  
                </div>

                </>:"" }
             


                   
         



                 {process.thirdStep?
                  
                  <>
                    <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Address :</label>
                  <input onChange={handleChange}  onBlur={handleBlur} value={values.address} autoComplete='off'  type="text" name="address" placeholder='Enter Your Address' className="form-control" />
                  { errors.address  && touched.address  ? <p className='text-danger'>{errors.address}</p>:null}  
                </div> 

            
                 <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Bio :</label>
                  <textarea  autoComplete='off'  onChange={handleChange}  onBlur={handleBlur} value={values.bio}  name="bio" type="text" placeholder='Description' className="form-control" />
                  {errors.bio  && touched.bio ? <p className='text-danger'>{errors.bio}</p>:null}  
                </div> 

             
                 <div className='mb-3'>
                  <label htmlFor="message-text" className="col-form-label">Upload Pic:</label>
                  <div className=" im">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                      alt="example placeholder" style={{ width: "50px" }} />
                        <div className="d-flex justify-content-center">
                      <div className="browse m-1">
                        <label className="form-label " for="customFile1"><p>Browse file</p></label>
                        <p>Upload Pic</p>
                        <input onChange={handleChange}  onBlur={handleBlur} value={values.file} name="file" type="file" className="form-control d-none" id="customFile1" />
                      </div>
                    </div>
                  </div>
                  
                </div> 
                  </> :""
                 
                }


               

                    {process.fourthstep?
                    <>
                 <div className="mb-3">
                  <label  className="col-form-label">Email :</label>
                  <input onChange={handleChange} value={values.name} onBlur={handleBlur}  name="email" type="email" placeholder='Enter Your Email' className="form-control" />
                  { errors.email  && touched.email  ? <p className='text-danger'>{errors.email}</p>:null}  
                </div>           
               <div className="mb-3">
                  <label  className="col-form-label">Password:</label>
                  <input onChange={handleChange} value={values.password} onBlur={handleBlur}  name="password" type="password" placeholder='Enter Your Password' className="form-control" />
                  { errors.password  && touched.password  ? <p className='text-danger'>{errors.password}</p>:null}  
                </div> 
                    </>:""}
                 
                <div className="modal-footer mb-0 mt-3  ">
                    <button onClick={()=>changes()}   type="button"  className="btn btn-danger w-100">Next</button>            
                </div>

              </form>





            </div>
            
          </div>
        </div>
      </div>

<ToastContainer position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
    </>
  )
}
