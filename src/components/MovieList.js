import MovieCard from "./MovieCard";

// afficher la liste des movies
const MovieList = ( props ) => {
 
   return (
    
    <>
    
      { props.movies.map( (elem) => (   
          
             <MovieCard  title={ elem.title}  description ={ elem.description} id={elem.id}
                                 posterUrl ={elem.posterUrl}  rate={ elem.rate }  trailer={elem.trailer}   /> 
         

        )  )

      }
    </>
   )
}   

export default MovieList ;