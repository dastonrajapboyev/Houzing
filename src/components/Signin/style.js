import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  background: #e6e9ec;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 30px;
  width: 100%;
  max-width: 580px;
  background: #fff;
  padding: 30px;
  margin: 64px;

  border-radius: 3px;
  border: 1px solid var(--border-color, #e6e9ec);
  box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
`;

export { Container, Content };
