import React from "react";
import { Container } from "./style";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import CategoryCard from "../CategoryCard"

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
      <CategoryCard/>
    </Container>
  );
};

export default Home;
