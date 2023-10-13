import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Link, Logo, Section, Wrapper, Main } from "./style";

import LogoImg from "../../assets/icons/logo.png";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} className="logo">
            <Logo src={LogoImg} alt="LogoImg" />
          </Section>
          <Section>
            {navbar.map(({ title, path }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}>
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <button>Sign in</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Home;
