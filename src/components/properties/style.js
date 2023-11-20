import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
const NoDataMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: red; /* Adjust the color as needed */
  margin-top: 20px;
`;
export { Container, NoDataMessage };
