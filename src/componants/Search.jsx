import React from 'react'
import "../sass/search/search.css"
import person from "../assets/images/search/unsplash_yEYmnaFuYVM.png"

export const Search = () => {
  return (
    <>
    
   <div className="search">

    <div className="container mt-3 mb-3">
        <div className="row">
            <h2>Lip Filler texas, USa</h2>
            <h6>All 363 Lip Filler Clinics in texas, UK</h6>


         <div className="col-lg-2 col-md-4 col-sm-12 mt-3 mb-2 ">
            <div className="chek mt-2 mb-3">
                <p style={{color:"#B1B1B1"}}>Industries</p>
                <div className="checkbutton">
                
                
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
  Medical
  </label>
                 </div>


                



                 <div class="form-check my-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
  Cleaning
  </label>
                 </div>



                 <div class="form-check my-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
  Plumbing
  </label>
                 </div>



                 <div class="form-check my-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
  Skin Care
  </label>
                 </div>



                 <p className="more"><a href="#">View All</a></p>


                </div>

            </div>








            <div className="chek mt-2 mb-3 ">
                <p style={{color:"#B1B1B1"}}>States</p>
                <div className="checkbutton">
                
                
                <div class="form-check my-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
  Albama
  </label>
                 </div>


            


                 <div class="form-check my-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
  Alaksa
  </label>
                 </div>



                 <div class="form-check my-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
  Arizona
  </label>
                 </div>



                 <div class="form-check my-1">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
   Califonia
  </label>
                 </div>



                 <p><a href="#">View All</a></p>


                </div>

            </div>


         </div>


         <div className="col-lg-10 col-md-8 col-sm-12 mt-3 mb-2">
            <div className="info mt-2 mb-2 mx-4 ">
            <div class="card mb-3" >
  <div class="row g-0 p-2">
    <div class="col-md-2 col-lg-2">
      <img  src={person} class="img-fluid " alt="..."/>
    </div>
    <div class="col-md-10 col-lg-10">
      <div class="ind ">
        <div className="name">
            <h3 className='fw-bold'>Emergency Dentist</h3>
        </div>

        <div className="Inquiry">
            <button className='btn btn-danger'>Inquiry <span><i className='fa fa-arrow-right'></i></span></button>
        </div>

      </div>


      <div className="loc">
        <div className="icon">
            <i className=' fa fa-map-marker '></i>
        </div>
        <div className="detail m-1">
            <p>Lorem ipsum dolor  sapiente saepe est, adipisc.</p>
        </div>
      </div>

      <h6>Medical</h6>

      <div className="card-tex m-2 p-1">
        <p className='m-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
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
