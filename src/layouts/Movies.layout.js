import React from "react";

//components
import NavBar from "../components/navbar/Navbar.component";

const MoviesLayout = (props) => {
  return (
    <>
   
   
    {props.children}
    </>
  );
};

export default MoviesLayout;