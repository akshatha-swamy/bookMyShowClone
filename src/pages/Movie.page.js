import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";

const Movie=()=>{
    return(
        <>
          <MovieHero/>
          <div className="my-12 container px-3 lg:w-2/3 lg:ml-16">
            <div className=" flex flex-col gap-2 items-start ">
            <h1 className="text-gray-800 font-bold md:text-2xl ">About the movie</h1>
            <p >A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.</p>
            </div>
            <div className="my-8">
            <hr/>
            </div>
           
          </div>
          
        </>
    );
};

export default Movie;