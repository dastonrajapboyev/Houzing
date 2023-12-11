import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/cardEmail.svg";
import { ReactComponent as house } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as calculator } from "../../assets/icons/cardCalculator.svg";
import { ReactComponent as maps } from "../../assets/icons/cardMaps.svg";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 48px 0px;
  position: relative;
  width: 100%;
  height: 427px;
  margin-top: 96px;
  background-color: #0d263b;
`;

const Content = styled.div`
  max-width: 235px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

Content.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: #fff;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
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

export { Container, Content, Icon };
