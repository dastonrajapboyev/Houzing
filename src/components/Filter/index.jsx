import React, { useRef } from "react";
import { Dropdown, Space } from "antd";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generic";
import { uzeReplace } from "../../hooks/uzeReplace";
import {useNavigate, useLocation} from 'react-router-dom'
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const location = useLocation()
  const navigate = useNavigate()
const query = useSearch()


  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  console.log(query.get('country'), 'params');

  const onChange = ({ target: { name, value, placeholder } }) => {
    // console.log(name, value, placeholder);
    navigate(`${location?.pathname}${uzeReplace(name,value)}`)
  };

  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper>
          <h1 className="subtitle">Address</h1>
          <Section>
            <Input
            defaultValue={query.get('country')}
              onChange={onChange}
              name="country"
              ref={countryRef}
              placeholder="Country"
            />
            <Input
            defaultValue={query.get('region')}
              onChange={onChange}
              name="region"
              ref={regionRef}
              placeholder="Region"
            />
            <Input
            defaultValue={query.get('city')}
              onChange={onChange}
              name="address"
              ref={cityRef}
              placeholder="City"
            />
            <Input
            defaultValue={query.get('zip_code')}
              onChange={onChange}
              name="zip_code"
              ref={zipRef}
              placeholder="Zip Code"
            />
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

  console.log(uzeReplace("address", "toshkent"));

  return (
    <Container>
      <Input
        $icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown menu={{ items }} trigger={["click"]}>
        <span onClick={(e) => e.preventDefault()}>
          <Space>
            <Button type={"light"}>
              <Icons.Settings /> Advanced
            </Button>
          </Space>
        </span>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search{" "}
      </Button>
    </Container>
  );
};

export default Filter;
