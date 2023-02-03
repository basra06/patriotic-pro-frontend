import React from 'react'
import logo from "../assets/images/footerimage/Transparent-white 1.png"
import "../sass/footer/footer.css"
export const Footer = () => {
  return (
    <>
    
    <div className="footer">
        <div className="container ">
             <div className="row">
                <div className="image text-center">
                    <img src={logo}/>
                </div>
               <div className="para">
               <p>© 2023 Patrioticpro.com | Privacy Policy | Cookies Policy | Terms of Service</p>
               </div>
                 
                   



  <div className=" text-center">
     
      <a
        className="btn text-white btn-floating m-1"
       
        href="#"
        role="button"
        ><i className="fa fa-facebook-f"></i
      ></a>

 
      <a
        className="btn text-white btn-floating m-1"
       
        href="#!"
        role="button"
        ><i className="fa fa-twitter"></i
      ></a>

      <a
        className="btn text-white btn-floating m-1"
       
        href="#!"
        role="button"
        ><i className="fa fa-google"></i
      ></a>

      
    

      
      <a
        className="btn text-white btn-floating m-1"
       
        href="#"
        role="button"
        ><i className="fa fa-linkedin"></i
      ></a>
    
      <a
        className="btn text-white btn-floating m-1"
        href="#"
        role="button"
        ><i className="fa fa-github"></i
      ></a>
    </div>
             </div>
        </div>
    </div>
    
    </>
  )
}
