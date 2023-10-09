import React from "react";
import {BiSearch,BiChevronLeft,BiShareAlt, BiChevronRight,BiChevronDown,BiMenu} from 'react-icons/bi';


const NavSm=()=>{
return(
    <>
        <div className="text-white flex items-center justify-between">
            <div className="flex">
            <BiChevronLeft className="w-8 h-8"/>
                <h3 className="text-2xl font-bold">Jawan</h3>
                <span className="text-gray-400 text-xs flex items-center">
                   
                </span>
            </div>
            <div className="w-6 h-6 ">
                <BiShareAlt className="w-full h-full"/>
            </div>
        </div>
    </>

    );
};

const NavLg=()=>{
    return(
    <>
        <div className="container mx-auto  flex justify-between">
            <div className="flex items-center w-1/2">
            <div className="p-3">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                alt="logo"
                className="w-full h-full"/>
                
            </div>
            <div className="w-full h-8 flex item-center bg-white gap-3 px-3 py-2 rounded-sm" >
            <BiSearch className="w-5 h-5"/>
                <input type="search"
                className="w-full  focus:outline-none" 
                placeholder="Search for movies, events, place, sports and activities"/>
            </div>
            </div>

            <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xm flex items-center hover:text-white cursor-pointer">
                    Bangalore<BiChevronDown/>
                </span>
                <button className="text-sm text-white rounded px-2 py-1" style={{backgroundColor:"#F84464"}}>Sign In</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
    </>
    );
};

const MovieNavBar =()=>{

    return(
        <>
            <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-navCol-700 p-4 ">
                <div className="md:hidden">{
                    <NavSm/>
                }</div>

                <div className="hidden lg:hidden md:block">{
                    <NavSm/>
                }</div>

                <div className="hidden lg:flex">"{
                    <NavLg/>
                }</div>
            </nav>
        </>
    )

};

export default MovieNavBar; 
