import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//pages
import HomePage from "./pages/Home.page";

import MovieHOC from "./HOC/Movie.HOC";
import Movie from "./pages/Movie.page";


//npm-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie}/>
    
    </>
  );
}

export default App;
