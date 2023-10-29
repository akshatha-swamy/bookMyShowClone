import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import FilterButton from "../Movies/FilterButton.component";

const MoreFiltersCard = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="w-full bg-white rounded-md overflow-hidden shadow-lg p-3">
                <div className="flex justify-between cursor-pointer">
                    <h1 className="text-xl font-semibold flex items-center text-buttonPink-300">
                        {isDropdownOpen ? <BiChevronUp style={{color:"#4b5563"}}  onClick={toggleDropdown}/> : <BiChevronDown style={{color:"#4b5563"}} onClick={toggleDropdown}/>}More Filters
                    </h1>
                    <p className="text-gray-600"  onClick={toggleDropdown}>clear</p>
                </div>
                {isDropdownOpen && (
                    <div className="flex flex-wrap m-2 max-h-40 ">
                        <FilterButton filter='Outdoor Events' />
                        <FilterButton filter='Fast Filling' />
                        
                       
                    </div>
                )}
            </div>
        </>
    );
};

export default MoreFiltersCard;
