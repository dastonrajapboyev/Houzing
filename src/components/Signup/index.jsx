import React, { useState } from "react";
import { Content } from "./style";
import { Input, Button } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

import { message } from "antd";

const Signup = () => {
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
      url: `/public/auth/register`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      navigate("/signin");
      info();
    });
  };

  return (
    <Content>
      <div className="subTitle">Sign Up</div>
      <Input onChange={onChanged} placeholder="email" type="email" />
      <Input onChange={onChanged} placeholder="firstname" type="text" />
      <Input onChange={onChanged} placeholder="lastname" type="text" />
      <Input onChange={onChanged} placeholder="password" type="password" />
      <Button onClick={onSubmit} width={"%"}>
        Login
      </Button>
    </Content>
  );
};

export default Signup;
