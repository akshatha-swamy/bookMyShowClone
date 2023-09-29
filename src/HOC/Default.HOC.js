import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component'
          <DefaultLayout>
            <Component {...rest} />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default DefaultHOC;
