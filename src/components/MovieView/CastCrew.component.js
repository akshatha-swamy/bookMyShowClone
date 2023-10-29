import React from "react";

const CastCrew=(props)=>{
    return(
        <>
        <div className=" flex flex-col item-start gap-2 px-2">
            <div className="h-70 flex ">
            <img src={props.src} alt={props.name} className="rounded-full"/>
            </div>
            <h4 className={`text-lg font-bold ${
                props.isDark?"text-white":"text-gray-700 " 
            } truncate`}>{props.name}</h4>
            <p  className={`text-sm ${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.role}</p>
        </div>
        </>
    );
}

export default CastCrew;