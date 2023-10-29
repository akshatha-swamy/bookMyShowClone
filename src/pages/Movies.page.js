import React from "react";
import NavBar from "../components/navbar/Navbar.component";
import HeroCarousel from "../components/heroCarousel/HeroCarousel.component";
import Movies from "../components/Movies/Movies.component";

const MoviePage=(props)=>{
    return(
        <>
        <div >
        <div className="hidden lg:block ">
            <NavBar/>
        </div>
            <HeroCarousel/>
            <Movies/>

        </div>
        </>
    );
}

export default MoviePage;