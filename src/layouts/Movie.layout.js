import React from "react";

//components
import MovieNavBar from "../components/MovieView/MovieNavbar.component";


const MovieLayout = (props) => {
  return (
    <>
   <MovieNavBar/>
   
    {props.children}
    </>
  );
};

export default MovieLayout;