import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "primary":
      return { background: "#0061DF", border: "none", color: "#fff" };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    default:
      return { background: "#0061df", border: "none", color: "#fff" };
  }
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  padding-left: ${({ $icon }) => ($icon ? "35px" : "20px")};

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  border: 1px solid #e6e9ec;
  /* ${getType} */
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;
width: ${({ width }) => (width ? `${width}px` : "100%")};
`
const Icon = styled.div`
position: absolute;
left: 10px;
`

export { Container, Wrapper, Icon };
