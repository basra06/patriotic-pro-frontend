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
                    <img src={logo} alt=""/>
                </div>
               <div className="para">
               <p>© 2023 Patrioticpro.com | Privacy Policy | Cookies Policy | Terms of Service</p>
               </div>
                 
                   



  <div className="text-center justify">
     
      <a className="btn text-white"
       href="#"
      
        ><i className="fa fa-facebook-f"></i></a>

 
      <a className="btn text-white "
       
        href="#"
       
        ><i className="fa fa-twitter"></i></a>

      <a
        className="btn text-white  "
       
        href="#"
       
        ><i className="fa fa-google"></i></a>

      
    

      
      <a
        className="btn text-white btn-floating "
       
        href="#"
      
        ><i className="fa fa-linkedin"></i></a>
    
      <a
        className="btn text-white btn-floating "
        href="#"
       
        ><i className="fa fa-github"></i></a>
    </div>
             </div>
        </div>
    </div>
    
    </>
  )
}
