import {Container, Content,Blur, Img } from "./style";
import { Button } from '../Generic';

import Img1 from "../../assets/images/house1.png";

const GenCarousel = () => {

  return (
    <Container>
      <Img src={Img1} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default GenCarousel;
