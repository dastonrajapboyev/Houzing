import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
  height: 100%;
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


export { Container,Content };
