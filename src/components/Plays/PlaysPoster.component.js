import React from "react";
import {BiRupee} from "react-icons/bi";

const PlaysPoster=(props)=>{
    return(
        <>
        <div className=" hidden lg:block flex flex-col item-start gap-2 px-2 ">
            <div className="h-84 w-60 flex ">
            <img src={props.src} alt={props.name} className="rounded-md w-full h-full"/>
            </div>
            <h4 className={`text-lg font-bold truncate w-60 ${
                props.isDark?"text-white":"text-gray-700 " 
            } truncate`}>{props.name}</h4>
            <p  className={`text-sm truncate w-60 ${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.place}</p>
            <p  className={`text-sm truncate w-60 ${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.lang}</p>
            <p  className={`text-sm truncate w-60 flex items-center ${
                props.isDark?"text-white":"text-gray-700"
            }`}><BiRupee/>{props.price}</p>
        </div>

        <div className="hidden md:block lg:hidden flex-col item-start gap-2 px-2 ">
            <div className="h-60 w-40 flex ">
            <img src={props.src} alt={props.name} className="rounded-md w-full h-full"/>
            </div>
            <h4 className={`text-lg font-bold w-40 truncate ${
                props.isDark?"text-white":"text-gray-700 " 
            } `}>{props.name}</h4>
            <p  className={`text-sm truncate w-40${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.place}</p>
            <p  className={`text-sm truncate w-40${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.lang}</p>
            <p  className={`text-sm truncate w-40 flex items-center${
                props.isDark?"text-white":"text-gray-700"
            }`}><BiRupee/>{props.price}</p>
        </div>

        <div className="md:hidden flex flex-col item-start gap-2 px-2 ">
            <div className="h-60 w-40 flex ">
            <img src={props.src} alt={props.name} className="rounded-md w-full h-full"/>
            </div>
            <h4 className={`text-lg font-bold truncate w-40 ${
                props.isDark?"text-white":"text-gray-700 " 
            } `}>{props.name}</h4>
            <p  className={`text-sm truncate w-40 ${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.place}</p>
            <p  className={`text-sm truncate w-40 ${
                props.isDark?"text-white":"text-gray-700"
            }`}>{props.lang}</p>
            <p  className={`text-sm truncate w-40 flex items-center ${
                props.isDark?"text-white":"text-gray-700"
            }`}><BiRupee/>{props.price}</p>
        </div>
        </>
    );
}

export default PlaysPoster;