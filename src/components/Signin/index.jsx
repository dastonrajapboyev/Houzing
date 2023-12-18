import React, { useState } from "react";
import { Container, Content } from "./style";
import { Input, Button } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

import { message } from "antd";

const Recommended = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info("Successfully logged in ");
  };

  const onSubmit = () => {
    request({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
      }
      info();
    });
  };
  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChange} placeholder="email" type="email" />
        <Input onChange={onChange} placeholder="password" type="password" />
        <Button onClick={onSubmit} width={"%"}>
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default Recommended;
