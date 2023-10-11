import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import MoviesHOC from "./HOC/Movies.HOC";

//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import MoviePage from "./pages/Movies.page";




//npm-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie}/>
     <MoviesHOC path="/movies" exact component={MoviePage}/>
    </>
  );
}

export default App;
