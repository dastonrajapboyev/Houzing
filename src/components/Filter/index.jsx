import React, {useRef}from "react";
import { Dropdown } from "antd";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generic";


const Filter = () => {

  const countryRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()

  const roomsRef = useRef()
  const sortRef = useRef()
  const sizeRef = useRef()

  const minPriceRef = useRef()
  const maxPriceRef = useRef()

  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper>
          <h1 className="subtitle">Address</h1>
          <Section>
            <Input ref={countryRef} placeholder="Country" />
            <Input ref={regionRef} placeholder="Region" />
            <Input ref={cityRef} placeholder="City" />
            <Input ref={zipRef} placeholder="Zip Code" />
          </Section>
          <h1 className="subtitle">Apartment info</h1>
          <Section>
            <Input ref={roomsRef} placeholder="Rooms" />
            <Input ref={sizeRef} placeholder="Size" />
            <Input ref={sortRef} placeholder="Sort" />
          </Section>
          <h1 className="subtitle">Price</h1>
          <Section>
            <Input ref={minPriceRef} placeholder="Min Price" />
            <Input ref={maxPriceRef} placeholder="Max Price" />
          </Section>
        </MenuWrapper>
      ),
      disabled: true,
    },
  ];

  return (
    <Container>
      <Input
        $icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown menu={{ items }}>
        <a href="$" onClick={(e) => e.preventDefault()}>
          <Button type={"light"}>
            <Icons.Settings /> Advanced
          </Button>
        </a>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search{" "}
      </Button>
    </Container>
  );
};

export default Filter;
