import React from 'react'
import logo from '../Images/logoap.png'
import '../css/cse.css'

export default function Cse() {
 
    return (
        
        <div className="container my-md-5 ">
             <div class="card row border-0 " >
      <div class=" mx-2 my-2 border rounded shadow d-flex ">
     
      <div class="card-body text-center col-xs-12 col-md-8">
      <h1   className="d-none d-md-block inner " >Vision & Mision</h1>
           <h3 className="d-block d-md-none inner">Vision & Mision</h3>
    <p class="card-text"> To achieve excellence in technical education by imparting world class teaching and best practices of research, consultancy and outreach activities.</p>
    <p class="card-text"> To achieve excellence in technical education by imparting world class teaching and best practices of research, consultancy and outreach activities.</p>
      </div>
    <div className="d-none d-md-block col-md-3 ">
    <div className="d-flex flex-column  ">
      <img className=" img-fluid my-3 d-none d-md-block"   src={logo} />
     
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}
