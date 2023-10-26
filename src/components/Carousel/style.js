import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow1.svg";
const Container = styled.div`
  position: relative;
  height: 571px;
`;
const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  padding: 18px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  transform: ${({ direction }) =>
    direction === "left" ? "rotate(-180deg)" : "rotate(0deg)"};
  left: ${({ direction }) => direction === "right" && "20px"};
  right: ${({ direction }) => direction === "left" && "20px"};
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
width: 100%;
height: 100%;
`

export { Container, Arrow, Img };
