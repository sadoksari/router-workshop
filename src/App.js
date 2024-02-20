import {  Link,  Routes,  Route } from "react-router-dom";
import AffListMovies from "./AffListMovies";
import TrailerPage from "./Pages/TrailerPage";
const App = () => {

   return (
      <div className="App">
         
        <Routes>    
      
          <Route path='/'                      element={<AffListMovies/>} /> 
          <Route path='/trailerPage/:idMovie'  element={<TrailerPage  />} />
         
        </Routes>
      </div>
    );
}  

export default App;


