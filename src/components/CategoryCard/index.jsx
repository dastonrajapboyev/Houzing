import noImg from "../../assets/images/noimg.png";
import { Container, Content, Img, Blur } from "./style";
import category from "../../assets/images/category-img.png";

export const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;

  return (
    <Container onClick={onClick}>
      <Img src={category || noImg} />
      <Blur />
      <Content>{name || "category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
