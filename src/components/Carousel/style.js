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
  background-color: rgba(255, 255, 255, 0.2);
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
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  align-items: center;
`;
Content.Title = styled.h1`
  color: #fff;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.02px;
`;
Content.Desc = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
Content.Price = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.02px;
`;

export { Container, Arrow, Img, Blur, Content };
