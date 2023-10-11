import React from "react";
import MovieImages from "./MoviesList.component"; // Import the MovieImages array
import MoviePoster from "./MoviePoster.component"; // Import the Poster component

const PosterDisplay = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Map through the MovieImages array and render Poster component for each movie */}
      {MovieImages.map((movie, index) => (
        <MoviePoster
          key={index}
          src={movie.src}
          title={movie.title}
          subtitle={movie.subtitle}
          isDark={false} // Set the isDark prop as needed
        />
      ))}
    </div>
  );
};

export default PosterDisplay;
