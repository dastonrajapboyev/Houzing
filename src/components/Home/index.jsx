import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
// import HouseCard from "../HouseCard";
// import CategoryCard from "../CategoryCard";
import Category from "../Category";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Category />
    </Container>
  );
};

export default Home;
