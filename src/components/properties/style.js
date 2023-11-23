import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  gap: 20px;
  flex-wrap: wrap; */
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px,1fr));
  grid-gap: 20px;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;
const NoDataMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: red; /* Adjust the color as needed */
  margin-top: 20px;
`;
export { Container, NoDataMessage };
