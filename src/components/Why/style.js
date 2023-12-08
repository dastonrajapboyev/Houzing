import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/cardEmail.svg";
import { ReactComponent as house } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as calculator } from "../../assets/icons/cardCalculator.svg";
import { ReactComponent as maps } from "../../assets/icons/cardMaps.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 48px 0px;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 96px;
  background-color: #f5f7fc;
`;

const Content = styled.div`
  max-width: 235px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  /* height: 434px; */
  padding: 0px 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;
const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.House = styled(house)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(maps)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icon };
