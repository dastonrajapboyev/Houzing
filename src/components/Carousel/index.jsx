import React, { useRef } from "react";
import { Container, Arrow, Img } from "./style";
import { Carousel } from "antd";

import Img1 from '../../assets/images/house1.png'
import Img2 from '../../assets/images/house2.png'


const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const onMove = (event) => {
    const { name } = event.target.dataset;
    if (name === "left") slider.current.next();
    if (name === "right") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
       <Img src={Img1}/>
       <Img src={Img2}/>
      </Carousel>
      <Arrow onClick={onMove} name="left" data-name="left" direction="left" />
      <Arrow
        onClick={onMove}
        name="right"
        data-name="right"
        direction="right"
      />
    </Container>
  );
};

export default GenCarousel;
