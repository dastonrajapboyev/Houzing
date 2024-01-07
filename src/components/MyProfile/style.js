import styled from "styled-components";
import { Table } from "antd";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

const Container = styled.div`
  border-radius: 3px;
  border: 1px solid var(--Border-Color, #e6e9ec);
  background: var(--Color-5, #fff);
  box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
  margin-top: 32px;
  padding: 30px;
`;
const NoDataMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: red; /* Adjust the color as needed */
  margin-top: 20px;
`;

const Wrapper = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 70px;
`;
const AntTable = styled(Table)``;

const Icons = styled.div``;
Icons.Edit = styled(edit)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
`;
Icons.Delete = styled(del)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
`;
const User = styled.div`
display: flex;
flex-direction: ${({$flex})=> $flex ? 'column': 'row'};
margin-left: ${({$flex})=> $flex && '16px'};
`
User.Img = styled.img`
width: 113px;
height: 113px;
`
export { Container, Wrapper, AntTable, Icons, NoDataMessage,User };
