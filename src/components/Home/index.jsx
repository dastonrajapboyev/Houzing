import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import Recommended from "../Recommended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";
// import HouseCard from "../HouseCard";
// import CategoryCard from "../CategoryCard";
import Category from "../Category";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner/>
      <Recent />
    </Container>
  );
};

export default Home;
