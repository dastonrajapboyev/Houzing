import React, { useRef, useEffect, useState } from "react";
import { Dropdown, Select, Space } from "antd";
// import { Select, Space } from "antd";
import {
  Container,
  Icons,
  MenuWrapper,
  Section /*
  SelectAnt,
  SpaceAnt,*/,
} from "./style";
import { Input, Button } from "../Generic";
import { uzeReplace } from "../../hooks/uzeReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  // const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  // const [cities, setCities] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  // const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  console.log(query.get("country"), "params");

  const onChange = ({ target: { name, value /*placeholder*/ } }) => {
    // console.log(name, value, placeholder);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiMTc2NHJhamFib3Z2QGdtYWlsLmNvbSIsImV4cCI6MTcxOTQ0NzEyMSwiaWF0IjoxNzAxNDQ3MTIxLCJzY29wZSI6IlJPTEVfVVNFUiJ9.g2o6XEw0S3eU86BpOtwtYwGyd1k873Dk9npnqe4r83RS0cAILS8HWkiPAG_cTnFp8x3xPjmFyTQxK37ek-PXI15gXXXqcN0Duv9QVljLgXEt4cQp_bPzAayQolJJ0QlvSQUlEGXOedyr5MPWizPPT2A4YxqYmvKZvR1YwXW9DcfaPxD498hDpF62KslxDXkg3KDVRTXfWPZ1bS7ms4MGmteTW3R7qVUKlB2zZnBNkHuFydhxXLnrJGA0O6KD5pP-EYzG-C_CZ82M-dS1F-o9iN5BnzzHn4iseVLf1wrvh4I8M4u6IrVXvw6yKkoVa9zoyCPfshf3Yb4i0VqPnsfbYA",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  const onChangeCategory =(category_id)=>{
console.log(category_id);
navigate(`/properties/${uzeReplace('category_id', category_id)}`)
  }

  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper>
          <h1 className="subtitle">Address</h1>
          <Section>
            <Input
              defaultValue={query.get("country")}
              onChange={onChange}
              name="country"
              ref={countryRef}
              placeholder="Country"
            />
            <Input
              defaultValue={query.get("region")}
              onChange={onChange}
              name="region"
              ref={regionRef}
              placeholder="Region"
            />
            <Input
              defaultValue={query.get("city")}
              onChange={onChange}
              name="address"
              ref={cityRef}
              placeholder="City"
            />
            <Input
              defaultValue={query.get("zip_code")}
              onChange={onChange}
              name="zip_code"
              ref={zipRef}
              placeholder="Zip Code"
            />
          </Section>
          <h1 className="subtitle">Apartment info</h1>
          <Section>
            <Input ref={roomsRef} placeholder="Rooms" />
            <Input ref={sortRef} placeholder="Sort" />
            {/* <Input ref={sizeRef} placeholder="Size" /> */}
            <Space>
              <Select
                style={{
                  width: 120,
                }}
                defaultValue='Select' // Set the default value to the id of the option you want to select
                // onChange={(value) => {
                //   console.log("Selected value:", value); // Use the selected value here
                // }}
                onChange={onChangeCategory}
              >
                {data.map((value, index) => {
                  return (
                    
                    <Select.Option value={value?.id} key={index}>
                      {value.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Space>
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
