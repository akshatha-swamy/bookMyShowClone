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
import PlaysHOC from "./HOC/Plays.HOC";
import PlaysPage from "./pages/Plays.page";

//axios
import axios from "axios";


//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};//to remove all the errors
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie}/>
     <MoviesHOC path="/movies" exact component={MoviePage}/>
     <PlaysHOC path="/plays" exact component={PlaysPage}/>
    </>
  );
}

export default App;
