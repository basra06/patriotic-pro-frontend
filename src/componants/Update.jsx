import React from 'react'
import "../sass/update/update.css"
import person from "../assets/images/search/unsplash_yEYmnaFuYVM.png"

export const Update = () => {
  return (
    <>
      <div className="update">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-4 mx-auto">
              <div className="image">
                <img src={person} className="imagefluid"></img>
              </div>

              <div className="updatetext">
                <h6>To Curran</h6>
                <p>Info@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-8 col-sm-12 col-md-8">
              <div className="form">
                {/* <label >Email address</label>
                <div className="input-group">
               
                  <input type="email" value="hamza" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <span className="">Edit</span>
                 
                </div>
                <div  className="form-floating input-group mb-5">
                  <textarea className="form-control"
                   value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."   placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                  <label for="floatingTextarea2">Bio</label>
                </div> */}
                <div className="form-floating mb-3">
                  <input type="email" value="Tom Curran" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" value="info@gmail.com" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Email</label>
                </div>


                <div className="form-floating mb-3">
                  <input type="password" value="12334" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" value="123-4567" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Phone Number</label>
                </div>


                <div className="form-floating mb-3">
                  <input type="text" value="Medical" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Industry</label>
                </div>
                <div className="form-floating mb-3">
                  <input value="Microsoft" type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword"> Company Name</label>
                </div>



                <div className="form-floating mb-3">
                  <textarea type="text" className="form-control" id="floatingPassword" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." placeholder="" />
                  <label for="floatingPassword"> Bio</label>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
