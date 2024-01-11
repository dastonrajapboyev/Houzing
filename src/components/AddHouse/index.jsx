import React, { useEffect, useState } from "react";
import { IconDelete, MenuWrapper, Section, Wrapper } from "./style";
import { Select, Space, Checkbox } from "antd";
import Input from "../Generic/Input";
import useRequest from "../../hooks/useRequest";

import { useNavigate, useParams } from "react-router-dom";

import { useFormik } from "formik";
import Button from "../Generic/Button";
import TextArea from "antd/es/input/TextArea";

const { REACT_APP_BASE_URL: url } = process.env;
const AddNewHouse = () => {
  const [, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [category, setCategory] = useState([]);
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,

    locations: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [img, setImg] = useState("");
  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  // single house

  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitial({ ...res?.data });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response =
  //         id &&
  //         (await fetch(`${url}/houses/id/${id}`, {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }));

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();
  //       // Handle the object structure
  //       console.log(data?.data);
  //       const updatedData = Object.keys(data?.data).map((key) => ({
  //         ...data?.data[key],
  //         key: key,
  //       }));
  //       setInitial(updatedData || {});
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // category
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${url}/categories/list`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const updatedData = data?.data.map((item, index) => ({
          ...item,
          key: index,
        }));
        setCategory(updatedData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${url}/houses/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const updatedData = data?.data.map((item, index) => ({
          ...item,
          key: index,
        }));
        setData(updatedData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: initial,

    enableReinitialize: true,

    // initialValues: {
    //   address: "",
    //   attachments: [
    //     {
    //       imgPath: "string",
    //     },
    //   ],
    //   country: "",
    //   region: "",
    //   city: "",
    //   componentsDto: {
    //     additional: "string",
    //     airCondition: false,
    //     courtyard: false,
    //     furniture: false,
    //     gasStove: false,
    //     internet: false,
    //     tv: false,
    //   },
    //   houseDetails: {
    //     area: "",
    //     bath: "",
    //     beds: "",
    //     garage: "",
    //     room: "",
    //     yearBuilt: "",
    //   },
    //   name: "",
    //   zipCode: "",
    //   price: "",
    //   salePrice: "",
    //   description: "",

    //   locations: {
    //     latitude: 0,
    //     longitude: 0,
    //   },
    //   homeAmenitiesDto: {
    //     additional: "string",
    //     busStop: false,
    //     garden: false,
    //     market: false,
    //     park: false,
    //     parking: false,
    //     school: false,
    //     stadium: false,
    //     subway: false,
    //     superMarket: false,
    //     // Add other homeAmenitiesDto fields with their initial values
    //   },
    // },

    onSubmit: (values) => {
      console.log({ ...values, attachments: imgs });
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: {
          ...values,
          categoryId: 1,
          // name: "webbriain",
          attachments: imgs,
        },
      }).then((res) => {
        if (res?.success) {
          navigate("/myprofile");
        }
      });
    },

    // =================
  });

  const addImg = () => {
    if (!(imgs.length >= 4) && img) {
      setImgs([
        ...imgs,
        { imgPath: img, id: `${img.length * Math.random()}${img}$` },
      ]);
      setImg("");
    }
  };

  console.log(initial, "rrrrres");
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
              type="number"
              name="houseDetails.room"
              value={formik.values.houseDetails?.room}
              onChange={formik.handleChange}
              placeholder="Rooms"
            />
            <Input
              type="number"
              name="houseDetails.area"
              value={formik.values.houseDetails?.area}
              onChange={formik.handleChange}
              placeholder="area"
            />
            <Input
              type="number"
              name="houseDetails.bath"
              value={formik.values.houseDetails?.bath}
              onChange={formik.handleChange}
              placeholder="bath"
            />
            <Input
              type="number"
              name="houseDetails.beds"
              value={formik.values.houseDetails?.beds}
              onChange={formik.handleChange}
              placeholder="beds"
            />
            <Input
              type="number"
              name="houseDetails.garage"
              value={formik.values.houseDetails?.garage}
              onChange={formik.handleChange}
              placeholder="garage"
            />
            <Input
              value={formik.values.houseDetails?.yearBuilt}
              name="houseDetails.yearBuilt"
              onChange={formik.handleChange}
              placeholder="yearBuilt"
            />
            <Space>
              <Select
                style={{
                  width: 200,
                }}
                defaultValue={"Select Category"}
                value={formik.values.categoryId}
                onChange={(value) => formik.setFieldValue("categoryId", value)}>
                <Select.Option value={""}>Select Category</Select.Option>
                {category.map((value) => (
                  <Select.Option value={value?.id} key={value.id}>
                    {value?.name}
                  </Select.Option>
                ))}
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
              value={formik.values.salePrice}
              name="salePrice"
              placeholder="Sale Price"
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />{" "}
            <Button type={"button"} onClick={addImg} $disabled={imgs.length <= 4}>
              Add Image URL
            </Button>
          </Section>
          <Section $flex>
            {imgs.map((value, index) => (
              <div key={index}>
                <p>{value?.imgPath}</p>
                <IconDelete
                  onClick={() => {
                    let res = imgs.filter((vl, idx) => idx !== index);
                    setImgs(res);
                  }}
                />
              </div>
            ))}
          </Section>
          <Section>
            <TextArea
              value={formik.values.description}
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
                // name="homeAmenitiesDto.garden">
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
                name="homeAmenitiesDto.stadium">
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
              <Checkbox onChange={formik.handleChange} name="componentsDto.tv">
                TV
              </Checkbox>
            </Section>
            <Section $flex>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.airCondition">
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.courtyard">
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.furniture">
                Furniture
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.gasStove">
                Gas Stove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.internet">
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
