// import React from "react";
// import { Container, Content, Details, Divider,  Icons, Img } from "./style";
import noImg from "../../assets/images/noimg.png";
import { Container, Content, Img, Blur } from "./style";

export const HouseCard = ({ data = {} }) => {
 const { name } = data;

  return (
    <Container>
      <Img src={ noImg} alt="img" />
      <Blur />
      <Content>
        {name || "category Name"}
      </Content>
    </Container>
  );
};

export default HouseCard;
