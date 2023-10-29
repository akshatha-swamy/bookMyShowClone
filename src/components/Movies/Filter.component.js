import React from "react";
import LangCard from "../FilterCards/LangCard.component";
import GenresCard from "../FilterCards/GenresCard.component";
import FormatCard from "../FilterCards/FormatCard.component";


const Filter= (props) =>{
    return(
        <>
            <div className="w-full p-6">
                <h1 className="text-4xl font-bold py-2">Filters</h1>
                <div className="flex flex-col gap-3">
                    <LangCard/>
                    <GenresCard/>
                    <FormatCard/>
                </div>

                <button className="w-full border border-buttonPink-300 text-buttonPink-300 h-10 rounded-md my-6">Browse by Cinemas</button>
            </div>
        </>
    )

}

export default Filter;