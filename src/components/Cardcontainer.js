import React from 'react'

import Card from './Card'


export default function Cardcontainer(){
    const data=[{
        id:0,
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        title: "About CSE"
    },{ id:1,
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        title: "Vision&Mission "
    },{ id:2,
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        title: "About Ifrastructure"
    },{ id:3,
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        title: "Our Faculty"
    }]

    return(

     <div className="container py-md-5">
         <div className="row">
          {
              data.map((item)=>
                 
                  <Card key={item.id} title={item.title} description={item.description}/>
              )
          }

         </div>


     </div>


    )
}