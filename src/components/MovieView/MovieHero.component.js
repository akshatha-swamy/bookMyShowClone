import React from "react";
import {BiSolidStar,BiChevronRight,BiPlay} from "react-icons/bi"
const MovieHero=()=>{
    return(
    <>
    <div className="md:hidden">
    <div className=" flex justify-center items-center relative">
    <div className="absolute flex  items-center z-10 bg-black bg-opacity-50 text-white p-1 rounded-md">
        <BiPlay />
        <div>Trailer (9)</div>
    </div>

    <img
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg"
        alt="poster" 
    />
</div>

<div className="flex space-x-2 items-center py-4">
            <BiSolidStar className="w-6 h-6 " style={{color:"#F84464"}}/>
            <p className="text-xl font-bold ">8.4/10</p>
            <p className=" flex items-center">562.5K Votes<BiChevronRight/></p>
            
            </div>
            <div className="flex p-1">
                <div className="bg-gray-200 w-50 px-4 py-1 items-center rounded-sm my-3 
                text-sm ">
                    <h3>
                    <a href="#" className="hover:underline cursor-pointer">2D</a>, <a href="#" className="hover:underline cursor-pointer">ICE</a>, <a href="#" className="hover:underline cursor-pointer">4DX</a>, <a href="#" className="hover:underline cursor-pointer"> IMAX 2D</a>
                    </h3>
                </div>
                <div className="bg-gray-200 w-50 px-4 py-1 text-sm items-center rounded-sm m-3"><h3>
                    <a href="#" className="hover:underline cursor-pointer">Hindi</a>, <a href="#" className="hover:underline cursor-pointer">Tamil</a>, <a href="#" className="hover:underline cursor-pointer">Telugu</a>
                    </h3>
                </div>
            </div>

</div>


    
        <div className=" hidden relative lg:block md:block" style={{height:"36rem"}}>
        <div className="absolute h-full w-full z-10 "
            style={{
      backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"
    }}
        />
        <div className="container absolute z-30 left-12 top-36 flex">
        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg" alt="movie" className="  w-64 h-96 rounded-md "/>

        <div className=" flex flex-col  px-8 py-3 w-full">
            <h1 className="text-4xl text-white font-bold py-3">Jawan</h1>
            <div className="flex space-x-2 items-center py-4">
            <BiSolidStar className="w-8 h-8 " style={{color:"#F84464"}}/>
            <p className="text-2xl font-bold text-white">8.4/10</p>
            <p className="text-white text-base flex items-center">562.5K Votes<BiChevronRight style={{color:"white"}}/></p>
            
            </div>

            <div className="flex w-96 h-20 justify-between items-center px-6 py-3 rounded-md md:text-sm
            " style={{backgroundColor:"#333333"}}>
            <div className="flex flex-col text-white text-lg">
            <h3 className="font-bold ">Add your rating & review</h3>
            <p className="text-base/6 text-gray-300">Your ratings matter</p>
            </div>
            <button className="bg-white w-24 h-10 text-lg font-bold rounded-md " style={{color:"#333333"}}>Rate Now</button>
                
            </div>

            <div className="flex p-1">
                <div className="bg-gray-200 w-50 px-4 py-1 items-center rounded-sm my-3">
                    <h3>
                    <a href="#" className="hover:underline cursor-pointer">2D</a>, <a href="#" className="hover:underline cursor-pointer">ICE</a>, <a href="#" className="hover:underline cursor-pointer">4DX</a>, <a href="#" className="hover:underline cursor-pointer"> IMAX 2D</a>
                    </h3>
                </div>
                <div className="bg-gray-200 w-50 px-4 py-1  items-center rounded-sm m-3"><h3>
                    <a href="#" className="hover:underline cursor-pointer">Hindi</a>, <a href="#" className="hover:underline cursor-pointer">Tamil</a>, <a href="#" className="hover:underline cursor-pointer">Telugu</a>
                    </h3>
                </div>
            </div>

            <div className="flex text-white text-base">
                <div>2h 49 min</div>
                <li className="px-2"><a href="#" className="hover:underline cursor-pointer">Action</a>, 
                <a href="#" className="hover:underline cursor-pointer">Thriller</a></li>
               
                <li>UA</li>
               
                <li className="px-2">7 Sep, 2023</li>

            </div>

            <button className="py-3 px-5 text-white w-52 rounded-md my-2 text-base font-bold my-6"  style={{backgroundColor:"#F84464"}}>Book tickets</button>
           
        </div>

       
        </div>

        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg"
            alt="poster" className="w-full h-full"
        />
       
        </div>

    </>
    );
};

export default MovieHero; 

