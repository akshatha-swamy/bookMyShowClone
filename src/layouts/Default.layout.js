import React from "react";

//components
import NavBar from "../components/navbar/Navbar.component";
import HeroCarousel from "../components/heroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
  return (
    <>
   <NavBar/>
   <HeroCarousel/>
    {props.children}
    </>
  );
};

export default DefaultLayout;