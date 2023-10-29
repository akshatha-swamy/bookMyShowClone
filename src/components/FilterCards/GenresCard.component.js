import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import FilterButton from "../Movies/FilterButton.component";

const GenresCard = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="w-full bg-white rounded-md overflow-hidden shadow-lg p-3" >
                <div className="flex justify-between cursor-pointer">
                    <h1 className="text-xl font-semibold flex items-center text-buttonPink-300">
                        {isDropdownOpen ? <BiChevronUp style={{color:"#4b5563"}} onClick={toggleDropdown}/> : <BiChevronDown style={{color:"#4b5563"}} onClick={toggleDropdown}/>}Genres
                    </h1>
                    <p className="text-gray-600"  onClick={toggleDropdown}>clear</p>
                </div>
                {isDropdownOpen && (
                    <div className="flex flex-wrap m-2 max-h-auto ">
                        <FilterButton filter='Drama' />
                        <FilterButton filter='Action' />
                        <FilterButton filter='Thriller' />
                        <FilterButton filter='Adventure'/>
                        <FilterButton filter='Comedy'/>
                        <FilterButton filter='Fantasy'/>
                        <FilterButton filter='Sci-Fi'/>
                        <FilterButton filter='Crime'/>
                        <FilterButton filter='Historical'/>
                        <FilterButton filter='Horror'/>
                        <FilterButton filter='Mystery'/>
                        <FilterButton filter='Animation'/>
                        <FilterButton filter='Biography'/>
                        <FilterButton filter='Family'/>
                        <FilterButton filter='Musical'/>
                        <FilterButton filter='Political'/>
                        <FilterButton filter='Suspense'/>

                    </div>
                )}
            </div>
        </>
    );
};

export default GenresCard;
