import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/delete.svg";


const Wrapper = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 70px;
`;
const MenuWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ $flex }) => ($flex ? "column" : "row")};
  justify-content: ${({ $gap }) => ($gap ? "space-around" : "start")}; 
  gap: 20px;
  margin-bottom: 20px;
`;

const IconDelete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  &:hover {
    & path {
      fill: red;
    }
  }
`;
export { Wrapper, MenuWrapper, Section, IconDelete };
