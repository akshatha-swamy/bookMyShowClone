import React from "react";
import NavBar from "../components/navbar/Navbar.component";
import HeroCarousel from "../components/heroCarousel/HeroCarousel.component";
import Movies from "../components/Movies/Movies.component";

const MoviePage=(props)=>{
    return(
        <>
            <HeroCarousel/>
            <Movies/>
        </>
    );
}

export default MoviePage;