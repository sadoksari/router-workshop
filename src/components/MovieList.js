
import React from "react";

const MovieList = ( props) => {
   return (
     <>
      {props.movies.map( (elem , index) =>( <MovieCard  title={ elem.title}  description ={ elem.description} 
                                             posterUrl ={elem.posterUrl}  rate={ elem.rate }   />
  
                 )
        )
     </>
}   

export default MovieList ;