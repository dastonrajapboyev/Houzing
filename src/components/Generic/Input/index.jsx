import React from "react";
import { Container } from "./style";

const Input = ({ type, onChange, placeholder, name, value, defaultValue, width, height }) => {
  return (
    <Container
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
