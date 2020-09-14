import React from 'react'
import { Button } from 'react-bootstrap'


export default function Card(props) {
 
    return (
        
           
             <div class="card col-md-3 border-0 " >
      <div class=" mx-2 my-2 border rounded shadow">
     
      <div class="card-body">
    <p class="card-text">{props.description}</p>
    <Button size="md" className="  bg-light border border-info text-primary mx-2" href={props.title.replace(/\s+/g, '')

}>{props.title}</Button>
      </div>
    </div>
    </div>
    
    )
}

