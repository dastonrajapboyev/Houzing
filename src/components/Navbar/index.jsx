import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Menu, Link, Logo, Section, Wrapper, Main } from "./style";
import Footer from "../Footer";
import LogoImg from "../../assets/icons/logo.png";
import Button from "../Generic/Button";
import Filter from "../Filter";
import { Dropdown, Space } from "antd";
export const Home = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/signin");
  };

  // const itemss = [
  //   {
  //     key: "1",
  //     label: <div>hahaha</div>,
  //   },
  // ];

  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate(`/home`);
    } else {
      navigate(`${name}`);
    }
  };
  
  const items = [
    {
      key: "1",
      label: (
        <Menu>
          <Menu.Item
            key="myprofile"
            data-name="myprofile"
            onClick={onClickProfile}>
            My profile
          </Menu.Item>
          <Menu.Item
            key="favourite"
            data-name="favourite"
            onClick={onClickProfile}>
            Favourites
          </Menu.Item>
          <Menu.Item key="logout" data-name="logout" onClick={onClickProfile}>
            Log out
          </Menu.Item>
        </Menu>
      ),
    },
  ];

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} className="logo">
            <Logo src={LogoImg} alt="LogoImg" />
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown menu={{ items }} trigger={["click"]}>
                <Space>
                  <Button type={"dark"}>Profile</Button>
                </Space>
              </Dropdown>
            ) : (
              <Space>
                <Button onClick={onClick} type={"dark"}>
                  Sign in
                </Button>
              </Space>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Home;
