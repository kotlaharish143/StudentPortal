import React from 'react'
import {Form,Button} from 'react-bootstrap'
import '../css/cse.css'
import {Link} from 'react-router-dom'
export default function Cse() {
 
    return (
        <div className="container pb-2 px-2 my-md-4">
            <div className="row">
        <Form className=" col-md-6 offset-md-3 card shadow py-5 ">
        <h2  className="d-none d-md-block text-center innerp p-2" >Login </h2>
           <h3 className="d-block d-md-none text-center innerp p-2">Login </h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to="/student"><Button size="lg" className="bg-light border border-info text-primary mx-2 ">Sign in </Button></Link>
      </Form>
      </div>
      </div>
    )
}
