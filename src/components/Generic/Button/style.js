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
      return { background: "#0061DF", border: "none", color: "#fff" };
  }
};

const getWidth = ({width}) => {
  if (!width) return "130px";
  if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${getWidth};
 
  /* opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)}; */
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")}; 
  ${getType}
  &:active {
    opacity: 0.7;
  }
`;

export { Container };
