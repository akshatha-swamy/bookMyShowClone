import React from "react";
import {BiSearch, BiChevronRight,BiChevronDown,BiMenu} from 'react-icons/bi';

const NavSm=()=>{
return(
    <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Bangalore<BiChevronRight/>
                </span>
            </div>
            <div className="w-8 h-8 ">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
    </>

    );
};
const NavMd=()=>{
    return(
        <>
            <div className="w-full flex item-center bg-white gap-3 px-3 py-2 rounded-md" >
            <BiSearch className="w-7 h-7"/>
                <input type="search"
                className="w-full focus:outline-none" 
                placeholder="Search for movies, events, place, sports and activities"/>
            </div>
        </>
    );
};
const NavLg=()=>{
    return(
    <>
        <div className="container mx-auto p-0 flex items-center justify-between">
            <div className="flex items-center w-1/2">
            <div className="w-12 h-12">
                <img src=""
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
                <button className="bg-red-600 text-sm text-white rounded px-2 py-1">Sign In</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
    </>
    );
};

const NavBar =()=>{

    return(
        <>
            <nav className="bg-navCol-700 p-4">
                <div className="md:hidden">{
                    <NavSm/>
                }</div>

                <div className="hidden lg:hidden md:flex">{
                    <NavMd/>
                }</div>

                <div className="hidden lg:flex">"{
                    <NavLg/>
                }</div>
            </nav>
        </>
    )

};

export default NavBar; 
