import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesLayout from "../layouts/Movies.layout";

const MoviesHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component'
          <MoviesLayout>
            <Component {...rest} />
          </MoviesLayout>
        }
      />
    </Routes>
  );
};

export default MoviesHOC;