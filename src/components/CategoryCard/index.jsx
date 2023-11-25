// import React from "react";
// import { Container, Content, Details, Divider,  Icons, Img } from "./style";
import noImg from "../../assets/images/noimg.png";
import { Container, Content, Img, Blur } from "./style";
import category from "../../assets/images/category-img.png"
export const CategoryCard = ({ data = {} }) => {
 const { name } = data;

  return (
    <Container>
      <Img src={category || noImg}  />
      <Blur />
      <Content>
        {name || "category Name"}
      </Content>
    </Container>
  );
};

export default CategoryCard;
