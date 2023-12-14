import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
// import HouseCard from "../HouseCard";
// import Slider from "react-slick";
// import { useNavigate } from "react-router-dom";
import { Input, Button } from "../Generic";
// import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
// import { Carousel } from "antd";

const Recommended = () => {
  const request = useNavigate();
  const [body, setBody] = useState({});
  // const navigate = useNavigate();
  useEffect(() => {
    request({ url: `/public/auth/login`, body });
    // console.log(body);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const onSubmit = () => {
    console.log(body);
  };
  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChange} placeholder="email" />
        <Input onChange={onChange} placeholder="password" />
        <Button onClick={onSubmit} width={"%"}>
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default Recommended;
