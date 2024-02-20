import React from 'react' ;
import { useNavigate , useParams} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css' 
import { Card } from 'react-bootstrap'

import { moviesData } from "../data";


const TrailerPage=(props)=>{

    const params = useParams() ;

    // ramener le movie qui viens en parametre
    const navigate = useNavigate() ;
    const idx = moviesData.findIndex  ( elem =>elem.id == params.idMovie  ) ;
    
    const movie = moviesData[  idx ];    

   return (

    <div>   

       <Card style={ { width: '100%' ,height:"100%" } }>      

         <Card.Body  onClick={() => navigate(  "/"   )        }  >  

           <Card.Text>   { movie.description }   </Card.Text>           
           <Card.Text>   { movie.trailer    }      </Card.Text> 
            
           <iframe 
                 width="750"
                 height="500"                
                 src= { movie.trailer }  title= { movie.title }  
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen
                 frameborder="0"
              >
              </iframe>

         </Card.Body>  

       </Card>
    </div>

   )


}

export default TrailerPage ;

