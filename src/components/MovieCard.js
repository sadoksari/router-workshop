import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Card } from 'react-bootstrap'

import { useNavigate} from "react-router-dom";


   const MovieCard=(props)=> {
  
   const navigate = useNavigate();   
  
   return (


      <div  className="MovieCard">   


        <Card style={ { width: '19rem' ,height:"100%" } }>         
          
        
          <Card.Body  onClick={() => navigate(  `/trailerPage/${props.id}` )   }  >    

            <Card.Img   src= { props.posterUrl} alt={"Image of " }   />
            <Card.Title>  { props.title }         </Card.Title>
            <Card.Text>   { props.description }   </Card.Text>           
            <Card.Text>   { props.rate     }      </Card.Text> 
      
           
          </Card.Body>          

        </Card>
      </div>
    ) 

}

export default MovieCard ;