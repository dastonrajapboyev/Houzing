import React from "react";
import { Dropdown } from "antd";
import { Container, Icons } from "./style";
import { Input, Button } from "../Generic";

const Filter = () => {
  const menu = <div>test</div>
  return (
    <Container>
      <Input
        $icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        menu={{ menu }}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}>
        <div>
          <Button type={"light"}>
            <Icons.Settings /> Advanced
          </Button>
        </div>
        <Button>bottomRight</Button>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
