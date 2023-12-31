import styled from "styled-components";
// import { ReactComponent as bed } from "../../assets/icons/bed.svg";
// import { ReactComponent as bath } from "../../assets/icons/bath.svg";
// import { ReactComponent as car } from "../../assets/icons/car.svg";
// import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
// import { ReactComponent as love } from "../../assets/icons/love.svg";
// import { ReactComponent as resize1 } from "../../assets/icons/resize1.svg";

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  /* min-height: 350px; */
  border-radius: 3px;
  margin: auto;
  border-radius: 3px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  border-radius: 3px;
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
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  border-radius: 3px;
`;

const Icons = styled.div``;

export { Container, Img, Content, Icons, Blur };
