import React from "react";
import { Container, Icons } from "./style";
import { Input, Button } from "../Generic";

const Filter = () => {
  return (
    <Container>
      <Input
        $icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Button type={"light"}>
        {" "}
        <Icons.Settings /> Search
      </Button>
      <Button>
        <Icons.Search />
        Advanced
      </Button>
    </Container>
  );
};

export default Filter;
