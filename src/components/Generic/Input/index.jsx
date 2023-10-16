import React from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
  $icon,
}) => {
  return (
    <Wrapper>
      <Icon>{$icon}</Icon>
      <Container
        $icon={$icon}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        width={width}
        height={height}
      />
    </Wrapper>
  );
};

export default Input;
