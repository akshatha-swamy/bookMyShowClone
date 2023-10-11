import React from "react";

const MoviePoster=(props)=>{
    return(
        <>
        <div className=" hidden lg:block flex flex-col item-start gap-2 px-2 ">
            <div className="h-84 w-60 flex ">
            <img src={props.src} alt={props.title} className="rounded-md w-full h-full"/>
            </div>
            <h4 className={`text-lg font-bold truncate w-60 ${
                props.isDark?"text-white":"text-gray-700 " 
            } truncate`}>{props.title}</h4>
            <p  className={`text-sm truncate w-60 ${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.subtitle}</p>
        </div>

        <div className="hidden md:block lg:hidden flex-col item-start gap-2 px-2 ">
            <div className="h-60 w-40 flex ">
            <img src={props.src} alt={props.title} className="rounded-md w-full h-full"/>
            </div>
            <h4 className={`text-lg font-bold w-40 truncate ${
                props.isDark?"text-white":"text-gray-700 " 
            } `}>{props.title}</h4>
            <p  className={`text-sm truncate w-40${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.subtitle}</p>
        </div>

        <div className="md:hidden flex flex-col item-start gap-2 px-2 ">
            <div className="h-60 w-40 flex ">
            <img src={props.src} alt={props.title} className="rounded-md w-full h-full"/>
            </div>
            <h4 className={`text-lg font-bold truncate w-40 ${
                props.isDark?"text-white":"text-gray-700 " 
            } `}>{props.title}</h4>
            <p  className={`text-sm truncate w-40 ${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.subtitle}</p>
        </div>
        </>
    );
}

export default MoviePoster;