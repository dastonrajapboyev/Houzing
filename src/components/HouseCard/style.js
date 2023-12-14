import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize1 } from "../../assets/icons/resize1.svg";

const Container = styled.div`
  width: 100%;
  max-width: 360px;
  min-width: 330px;
  height: 430px;
  border-radius: 3px;
  margin: ${({ gap }) => {
    return gap && `0 ${gap}px`;
  }};
  background-color: #fff;
  border-radius: 3px;
  &:hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  border: 1px solid #e6e9ec;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 200px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex-direction: ${({ $footer }) => ($footer ? "row" : "column")};
  justify-content: ${({ $footer }) => $footer && "space-between"};
  padding-top: 24px;
  padding: 16px 20px;
  background: #fff;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ $detailsFooter }) =>
    $detailsFooter ? "row" : "column"};
  flex-direction: ${({ $row }) => ($row ? "row" : "column")};
  align-items: ${({ $detailsFooter }) => !$detailsFooter && "center"};
`;
const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize1)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background-color: #e6e9ec;
  width: 100%;
  height: 1px;
`;
export { Container, Img, Content, Details, Icons, Divider };
