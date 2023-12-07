import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import Recommended from "../Recommended";
// import HouseCard from "../HouseCard";
// import CategoryCard from "../CategoryCard";
import Category from "../Category";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Category />
    </Container>
  );
};

export default Home;
