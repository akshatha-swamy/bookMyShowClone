import React from "react";
import PlaysList from "./PlaysList.component"; // Import the Playslist array
import PlaysPoster from "./PlaysPoster.component"; // Import the Poster component

const PlaysDisplay = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Map through the MovieImages array and render Poster component for each movie */}
      {PlaysList.map((play, index) => (
        <PlaysPoster
          key={index}
          src={play.src}
          name={play.name}
          place={play.place}
          lang={play.lang}
          price={play.price}
          isDark={false} // Set the isDark prop as needed
        />
      ))}
    </div>
  );
};

export default PlaysDisplay;
