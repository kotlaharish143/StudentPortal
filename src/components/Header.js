import React from 'react'
import logo from '../Images/logoap.png'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import '../css/Header.css'
import '../css/Header.css'
import { Button } from 'react-bootstrap'
export default function Header(){




    return(
        <div className=" py-5">
         <div className=" container">
         <div className=" row">
         <div className=" col-md-7 mx-2 mx-md-0">
           <h1   className="d-none d-md-block Headerh1 d" >Student Portal</h1>
           <h3 className="d-block d-md-none">Student Portal</h3>
            <p>National Institute of Technology, Andhra Pradesh is the 31st institution among the chain of NITs started by the Government of India. NIT Andhra Pradesh is established in the state of Andhra Pradesh recently in the academic year 2015 – 2016</p>
        <Link to="/Login"><Button size="lg" className="bg-light border border-info text-primary mr-2 ">Student</Button></Link>
        <Link to="/Login"><Button size="lg" className="bg-light border border-info text-primary ">Faculty</Button></Link>
        </div>
 <div className="col-md-5">

 <img src={logo} class="c d-none d-md-block img-fluid HeaderImg" alt="" download/>
 </div>
        </div>

        </div>

        </div>
    )
}