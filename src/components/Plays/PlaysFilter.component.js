import React from "react";
import LangCard from "../FilterCards/LangCard.component";
import GenresCard from "../FilterCards/GenresCard.component";
import DateCard from "../FilterCards/DateCard.component"; 
import PriceCard from "../FilterCards/PriceCard.component";
import MoreFiltersCard from "../FilterCards/MoreFiltersCard.component";
import CategoryCard from "../FilterCards/CategoryCard.component";


const PlaysFilter= (props) =>{
    return(
        <>
            <div className="w-full p-6">
                <h1 className="text-4xl font-bold py-2">Filters</h1>
                <div className="flex flex-col gap-3">
                    <DateCard/>
                    <LangCard/>
                    <GenresCard/>
                    <CategoryCard/>
                   <MoreFiltersCard/>
                   <PriceCard/>
                </div>

                <button className="w-full border border-buttonPink-300 text-buttonPink-300 h-10 rounded-md my-6">Browse by Cinemas</button>
            </div>
        </>
    )

}

export default PlaysFilter;