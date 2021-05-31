import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Films(props){
 
    const {film}=props;
    
return  (

<div >

<img className="small" src={film.image} alt={film.name}/>

<h3>{film.name}</h3>
      <div>Rate{film.Rate}</div>
      <Link to={`/description/${film.name}`}>
                    <Button variant="primary">Go to desc</Button>
                </Link>
      
      <div>
       
      </div>
</div>

)
    
    }