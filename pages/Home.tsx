import React from "react";

import CarouselComponent from "../utilities/Carousel";
import Features from "../components/Features";
import Asidebar from "../components/Asidebar";
function Home() {
  return (
    <>
      <div className="carousel-main_div">
        <CarouselComponent />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Asidebar />
      </div>
    </>
  );
}

export default Home;
