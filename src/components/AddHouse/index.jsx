import React, { useEffect, useState } from "react";
import { IconDelete, MenuWrapper, Section, Wrapper } from "./style";
import { Select, Space, Checkbox } from "antd";
import Input from "../Generic/Input";
// import useRequest from "../../hooks/useRequest";
import { useFormik } from "formik";
import Button from "../Generic/Button";
import TextArea from "antd/es/input/TextArea";

const { REACT_APP_BASE_URL: url } = process.env;
const AddNewHouse = () => {

  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  // const request = useRequest();

  // useEffect(() => {
  //   fetch(`${url}/houses/me`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => console.log(res))
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const updatedData = res?.data.map((item, index) => ({
  //         ...item,
  //         key: index,
  //       }));
  //       setData(updatedData || []);
  //     });
  //   request({ url: `/houses/me` });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   return fetch(`${url}/houses/me`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const updatedData = data?.data.map((item, index) => ({
  //         ...item,
  //         key: index,
  //       }));
  //       setData(updatedData || []);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       // Handle errors appropriately, e.g., display an error message
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${url}/houses/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        const updatedData = data?.data.map((item, index) => ({
          ...item,
          key: index,
        }));
        setData(updatedData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately, e.g., display an error message
      }
    }
  
    fetchData(); // Call the async function immediately
  }, []);

  const onChangeCategory = (category_id) => {
    // navigate(`/properties/${uzeReplace("category_id", category_id)}`);
  };

  const formik = useFormik({
    // initialValues: {
    //   houseDetails: {},
    //   homeAmenitiesDto: {},
    // },
    // onSubmit: (values) => {
    //   console.log(values, imgs);
    // },
    // +++++++++++++++++++++++++

    initialValues: {
      country: "",
      region: "",
      city: "",
      address: "",
      room: "",
      area: "",
      bath: "",
      beds: "",
      garage: "",
      yearBuilt: "",
      name: "",
      zipCode: "",
      price: "",
      sale_price: "",
      description: "",
      houseDetails: {
        tv: false,
        airCondition: false,
        courtyard: false,
        furniture: false,
        gas: false,
        internet: false,
        // Add other houseDetails fields with their initial values
      },
      homeAmenitiesDto: {
        busStop: false,
        garden: false,
        market: false,
        park: false,
        parking: false,
        school: false,
        statium: false,
        subway: false,
        superMarket: false,
        // Add other homeAmenitiesDto fields with their initial values
      },
    },
    onSubmit: (values) => {
      console.log(values, imgs);
    },
  });

  const addImg = () => {
    if (!(imgs.length >= 4) && img) {
      setImgs([
        ...imgs,
        { title: img, id: `${img.length * Math.random()}${img}$` },
      ]);
      setImg("");
    }
  };

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subtitle">Address</h1>
          <Section>
            <Input
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              placeholder="Country"
            />
            <Input
              name="region"
              value={formik.values.region}
              onChange={formik.handleChange}
              placeholder="Region"
            />
            <Input
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder="City"
            />
            <Input
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Address"
            />
          </Section>
          <h1 className="subtitle">Apartment info</h1>
          <Section>
            <Input
              name="room"
              value={formik.values.room}
              onChange={formik.handleChange}
              placeholder="Rooms"
            />
            <Input
              name="area"
              value={formik.values.area}
              onChange={formik.handleChange}
              placeholder="area"
            />
            <Input
              name="bath"
              value={formik.values.bath}
              onChange={formik.handleChange}
              placeholder="bath"
            />
            <Input
              name="beds"
              value={formik.values.beds}
              onChange={formik.handleChange}
              placeholder="beds"
            />
            <Input
              name="garage"
              value={formik.values.garage}
              onChange={formik.handleChange}
              placeholder="garage"
            />
            <Input
              value={formik.values.yearBuilt}
              name="yearBuilt"
              onChange={formik.handleChange}
              placeholder="yearBuilt"
            />
            <Space>
              <Select
                style={{
                  width: 200,
                }}
                defaultValue={"Select Category"}
                onChange={onChangeCategory}>
                {/* value={value} */}
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
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Name"
            />
            <Input
              name="zipCode"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              placeholder="Zip Code"
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.price}
              name="price"
              placeholder="Price"
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.sale_price}
              name="sale_price"
              placeholder="Sale Price"
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />{" "}
            <Button onClick={addImg} $disabled={imgs.length <= 4}>
              Add Image URL
            </Button>
          </Section>
          <Section $flex>
            {imgs.map((value) => (
              <div key={value.id}>
                <p>{value.title}</p>
                <IconDelete
                  onClick={() => {
                    let res = imgs.filter((vl) => vl.id !== value.id);
                    setImgs(res);
                  }}
                />
              </div>
            ))}
          </Section>  
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subtitle">Additional</h1>

          <Section $gap>
            <Section $flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop">
                Bus Stop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden">
                Garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market">
                Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park">
                Park
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking">
                Parking
              </Checkbox>
            </Section>
            <Section $flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school">
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.statium">
                Statium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway">
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket">
                Super Market
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.tv">
                TV
              </Checkbox>
            </Section>
            <Section $flex>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.airCondition">
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.courtyard">
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.furniture">
                Furniture
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.gas">
                Gas Stove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="houseDetails.internet">
                Internet
              </Checkbox>
            </Section>
          </Section>

          <Button type="submit">Save</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;
