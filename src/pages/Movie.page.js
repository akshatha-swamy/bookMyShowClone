import React from "react";
import MovieHero from "../components/MovieView/MovieHero.component";
import CastCrewSlider from "../components/MovieView/CastCrewSlider.component";
import JawanCast from "../components/MovieView/JawanCast.config";



const Movie=()=>{

  const launchRazorPay=()=>{
    let options={
      key:"rzp_test_qB2ngFhX6wqLzP",
      amount:500*100,
      currency:"INR",
      name:"Book My Show Clone",
      description:"Movie Purchase On Rental",
      image:"https://i.ibb.co/zPBYW3H/imgbin-bookmushow-office-android-ticket-png.png ",
      handler:()=>{
        alert("Payment Done")
      },
      theme:{color:"#c4242d"}
    };
  
    let rzp=new window.Razorpay(options);
    rzp.open();
  };
  
    return(
        <>
          <MovieHero launchRazorPay={launchRazorPay}/>
          <div className="my-12 container px-3 lg:w-2/3 lg:ml-16 md:w-1/2">
            <div className=" flex flex-col gap-2 items-start ">
            <h1 className="text-gray-800 font-bold md:text-2xl ">About the movie</h1>
            <p >A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.</p>
            </div>
            <div className="my-8">
            <hr/>
            </div>
            <div>
              <h1 className="text-gray-800 font-bold md:text-2xl">Cast</h1>
            </div>
            <div>
            <CastCrewSlider images={JawanCast} title="Premiers" subtitle="Brand New Releases Every Friday" isDark={false}/>
            </div>
           
          </div>
          
        </>
    );
};

export default Movie;