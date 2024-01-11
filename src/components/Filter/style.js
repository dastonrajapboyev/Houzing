import styled from "styled-components";

import { ReactComponent as Houses } from "../../assets/icons/houses.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
// import { Select, Space } from "antd";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;
const Icons = styled.div``;

Icons.Houses = styled(Houses)`
  margin-right: 8px;
`;
Icons.Settings = styled(Settings)`
  margin-right: 8px;
`;
Icons.Search = styled(Search)`
  margin-right: 8px;
`;
const MenuWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container, Icons, MenuWrapper, Section /*, SelectAnt, SpaceAnt*/ };
