import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow1.svg";
const Container = styled.div`
  position: relative;
  height: fit;
  margin-bottom: 20px;
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
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */

  letter-spacing: -0.02em;
  color: #ffffff;
`;

Content.Desc = styled.div`
  /* Paragraph/Medium/Regular */

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffffff;
`;

Content.Price = styled.div`
  /* Heading/H4/Semibold/Desktop */

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */

  letter-spacing: -0.02em;

  color: #ffffff;
`;

export { Container, Arrow, Img,Content, Blur, };
