import React from "react";

//components
import MovieNavBar from "../components/navbar/MovieNavbar.component";
import HeroCarousel from "../components/heroCarousel/HeroCarousel.component";

const MovieLayout = (props) => {
  return (
    <>
   <MovieNavBar/>
   
    {props.children}
    </>
  );
};

export default MovieLayout;