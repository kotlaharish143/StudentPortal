import React from 'react'
import logo from '../Images/logoap.png'
import '../css/cse.css'

export default function Cse() {
 
    return (
        
        <div className="container my-md-5 ">
             <div class="card row border-0 " >
      <div class=" mx-2 my-2 border rounded shadow d-flex ">
     
      <div class="card-body text-center col-xs-12 col-md-8">
      <h1   className="d-none d-md-block inner " >Computer Science Department</h1>
           <h3 className="d-block d-md-none inner">Computer Science Department</h3>
    <p class="card-text">  he Department of Computer Science was established in the year 1971 and is one of the earliest Computer Science & Engineering departments in the country. Currently, it has 22 faculty members and over 800 students working towards their Bachelor’s, Master’s and Doctoral degrees. In addition, it actively participates in select off-campus programmes.
The department attracts high quality students from all over India and has an impressive placement record. Many of graduates choose to join some of the best institutions of higher learning around the world, whereas some prefer to gain a few years of work experience before deciding their next course of action. Still some others choose to chase their dream taking a path that is less travelled like taking the social welfare route or liberal arts based vocations</p>
  
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
