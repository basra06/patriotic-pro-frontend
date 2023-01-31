import React from 'react'
import logo from "../assets/images/footerimage/Transparent-white 1.png"
import "../sass/footer/footer.css"
export const Footer = () => {
  return (
    <>
    
    <div className="footer">
        <div className="container mt-5 mb-5">
             <div className="row">
                <div className="image text-center mt-3 p-2">
                    <img src={logo}/>
                </div>
                <p>© 2023 Patrioticpro.com | Privacy Policy | Cookies Policy | Terms of Service</p>
                 
                   



  <div className="mb-2 text-center mt-2">
     
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
