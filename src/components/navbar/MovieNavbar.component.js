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
    <div className="flex flex-col w-full">
        <div className=" mx-5  flex justify-between  items-center my-3 mx-12">
            <div className="flex  w-3/5 ">
            <div className="w-40 h-full ">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                alt="logo"
                className="w-full h-full"/>
                
            </div>
            <div className="w-full h-9 flex item-center bg-white gap-3 px-3 mx-4 py-2 rounded-md" >
            <BiSearch className="w-5 h-5" style={{color:"#999999"}}/>
                <input type="search"
                className="w-full  focus:outline-none" 
                placeholder="Search for movies, events, place, sports and activities"/>
            </div>
            </div>

            <div className="flex items-center gap-3">
            <span className="text-white text-xm flex items-center hover:text-white cursor-pointer">
                    Bangalore<BiChevronDown/>
                </span>
                <button className="text-sm text-white rounded px-2 py-1" style={{backgroundColor:"#F84464"}}>Sign In</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
        <div className=" w-full justify-between flex">
            <div>
            <ul className="flex my-2 gap-5  my-2 mx-12 text-gray-400 text-base">
                <li>Movies</li>
                <li>Stream</li>
                <li>Events</li>
                <li>Plays</li>
                <li>Sports</li>
                <li>Activities</li>
                <li>Buzz</li>


            </ul>

            </div>

            <div>
            <ul className="flex my-2 gap-3 text-white mx-12 text-gray-400 text-sm">
                <li>ListYourShow</li>
                <li>Corporates</li>
                <li>Offers</li>
                <li>Gift Cards</li>
                


            </ul>

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
