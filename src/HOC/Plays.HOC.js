import React from "react";
import { Route, Routes } from "react-router-dom";
import PlaysLayout from "../layouts/Plays.Layout";

const PlaysHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component'
          <PlaysLayout>
            <Component {...rest} />
          </PlaysLayout>
        }
      />
    </Routes>
  );
};

export default PlaysHOC;