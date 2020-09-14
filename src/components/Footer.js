import React from 'react'
import '../css/cse.css'
import '../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
 
export default function Footer(props) {
 var x=(window.innerWidth >768) ? false : true;
  return (
    <div className="container my-5 inner2 p-3  ">
    <Player className="embed-responsive " fluid={x} width={580}
        height={420}>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
  
     
    </Player>
    
    </div>
  );
};