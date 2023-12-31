import React, { useState } from "react";
import { Content } from "./style";
import { Input, Button } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

import { message } from "antd";

const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChanged = ({ target: { value, placeholder } }) => {
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
    <Content>
      <div className="subTitle">Sign In</div>
      <Input onChange={onChanged} placeholder="email" type="email" />
      <Input onChange={onChanged} placeholder="password" type="password" />
      <Button onClick={onSubmit} width={"%"}>
        Login
      </Button>
    </Content>
  );
};

export default Signin;
