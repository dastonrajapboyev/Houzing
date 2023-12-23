import React, { useRef, useEffect, useState } from "react";
import { Dropdown, Select, Space } from "antd";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generic";
import { uzeReplace } from "../../hooks/uzeReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
// const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");
  // useEffect(() => {
  //   if (query.get("category_id")) {
  //     let res = data.filter(
  //       (ctg) => ctg.id === Number(query.get("category_id"))
  //     );
  //     setValue(res?.name);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // const [cities, setCities] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  // console.log(query.get("country"), "params");

  const onChange = ({ target: { name, value } }) => {
    // console.log(name, value, placeholder);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
  useEffect(() => {
    // 
    fetch(`${url}/categories/list`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiMTc2NHJhamFib3Z2QGdtYWlsLmNvbSIsImV4cCI6MTcxOTc5MzE4OSwiaWF0IjoxNzAxNzkzMTg5LCJzY29wZSI6IlJPTEVfVVNFUiJ9.jcvHLF4KPgPtBb8xXFkp3GYwetr_x_388j2cH8MaeQG8PInrKSNfFm0fwNTZbASxeMSP4IO8aRT2g4f7vk-6ygKIPEBCEy75947Kr6eH0uAE_HOTbPed0gWvvEHrv3ISarBUnNkebiSCaHdo8f52F1EQFAtxRM3jxzSeKhKQqryrZwdZdIMhXC77yLYxUOepciju3V8jrwHNnDnT2sTULICPPg3gxzTLOsmgn7rVEF71A95qOMFPDwOuvRiETrm07EDP2c78T6h7fF3h5k_24J_IOYKeN-s8HB5c8_8zKrR4na_d-zSlA8hnIQ0DQKfuitffZnEHEsZU_VCFEsudGw",
        },
      })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    !query.get("category_id") && setValue("Select Category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace("category_id", category_id)}`);
  };
  const onChangeSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };

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
            <Input
              name="room"
              onChange={onChange}
              ref={roomsRef}
              placeholder="Rooms"
            />
            <Space>
              <Select
                style={{
                  width: 200,
                }}
                defaultValue={query.get("sort") || "Select Sort"}
                onChange={onChangeSort}>
                {/* value={value} */}
                <Select.Option value={""}>Select Sort</Select.Option>
                <Select.Option value={"asc"}>O'suvchi</Select.Option>
                <Select.Option value={"desc"}>kamayuvchi</Select.Option>
              </Select>
              <Select
                style={{
                  width: 200,
                }}
                defaultValue={value}
                onChange={onChangeCategory}>
                value={value}
                <Select.Option value={""}>Select Category</Select.Option>
                {data.map((value) => {
                  return (
                    <Select.Option value={value?.id} key={value.id}>
                      {value?.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Space>
          </Section>
          <h1 className="subtitle">Price</h1>
          <Section>
            <Input
              onChange={onChange}
              name="min_price"
              ref={minPriceRef}
              placeholder="Min Price"
            />
            <Input
              onChange={onChange}
              name="max_price"
              ref={maxPriceRef}
              placeholder="Max Price"
            />
          </Section>
        </MenuWrapper>
      ),
      disabled: true,
    },
  ];

  // console.log(uzeReplace("address", "toshkent"));

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
