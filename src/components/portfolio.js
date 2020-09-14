import React from 'react'
import { Button } from 'react-bootstrap'
import responsive from '../Images/responsive.png'
import '../css/cse.css'
import {MarkGithubIcon, ZapIcon} from '@primer/octicons-react'
export default function Portfolio() {
 
    return (
        <div className="container-fluid " >
           
             <div class=" card col-md-8 border-0 p-3 offset-md-2 " >
      <div class=" mx-2 my-2 border d-md-flex p-3 shadow d" >
     
     
      <div className="col-md-4">

          <img className="card-img img-fluid " src={responsive} />
          </div>
          <div className="col-md-8 ">

         <h3 class="card-title text-info">Project Manag</h3>
          <p class="card-text">lorem glyphicon glyphicon-okglyphicon glyphicon-okglyphicon glyphicon-okglyphicon glyphicon-okglyphicon </p>
          <span class="badge mx-1  badge-info">Responsive</span>
          <span class="badge  mx-1 badge-info">PHP</span>
          <span class="badge  mx-1 badge-info">Javascript</span> <br />
          
         <MarkGithubIcon size="small" className="mx-3"/> <ZapIcon />
          </div>
  
    </div>
    </div>



<div class=" card col-md-8 border-0 p-3 offset-md-2 " >
<div class=" mx-2 my-2 border d-md-flex p-3 shadow d" >


<div className="col-md-4">

    <img className="card-img img-fluid " src={responsive} />
    </div>
    <div className="col-md-8 ">

   <h3 class="card-title text-info">Project Manag</h3>
    <p class="card-text">lorem glyphicon glyphicon-okglyphicon glyphicon-okglyphicon glyphicon-okglyphicon glyphicon-okglyphicon </p>
    <span class="badge mx-1  badge-info">Responsive</span>
    <span class="badge  mx-1 badge-info">PHP</span>
    <span class="badge  mx-1 badge-info">Javascript</span> <br />
   
    </div>

</div>
</div>
</div>
    
    )
}

