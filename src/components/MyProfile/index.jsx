import React, { useEffect, useState } from "react";
import { AntTable, Container, Icons, User, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
// import { Col } from "antd";
import Button from "../Generic/Button";
import nouser from "../../assets/images/no-user-image.gif";

// import useRequest from "../../hooks/useRequest";
const MyProfile = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const request = useNavigate();
  const { search } = useLocation();
  // <<<<<<< HEAD
  // useEffect(() => {
  //   const { REACT_APP_BASE_URL: url } = process.env;
  //   fetch(`${url}/houses/me}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  //   request({ url: `/houses/me`});
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // ==============================

  // ==============================
  // console.log(res);

  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;
    fetch(`${url}/houses/me`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      // .then((res) => console.log(res)) // Add this line
      .then((res) => res.json())
      .then((res) => {
        // Add a unique 'key' property to each object in the 'data' array
        const updatedData = res?.data.map((item, index) => ({
          ...item,
          key: index,
        }));
        setData(updatedData || []);
      });
    request({ url: `/houses/me` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  // console.log(data);

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => (
        <User>
          <User.Img
            src={(data?.attachments && data?.attachments[0]?.imgPath) || nouser}
          />
          <User $flex>
            <div className="subtitle">
              {data.country}, {data.address}
            </div>
            <div className="info">
              {data.city}, {data.region}
            </div>
            <del>
              <div className="info">$ {data.price}</div>
            </del>
          </User>
          <div style={{ marginLeft: "auto" }}>
            <Button>For Sale</Button>
          </div>
        </User>
      ),
    },
    {
      title: "Year Build",
      render: (data) => <span> {data.houseDetails.yearBuilt}</span>,
      key: "yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span> {data.user.email}</span>,
      key: "user.email",
    },
    {
      title: "Price",
      render: (data) => <span> $ {data.salePrice}</span>,
      key: "price",
      width: 150,
    },
    {
      title: "Action",
      key: "user.email",
      width: 100,
      render: (data) => {
        return (
          <User>
            <Icons.Edit />
            <Icons.Delete />
          </User>
        );
      },
    },
  ];
  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          My Properties
        </div>
        <div style={{ marginLeft: "auto" }} className="title">
          <Button onClick={() => navigate("/myprofile/newhouse")}>
            Add New House
          </Button>
        </div>
      </User>
      <Container>
        <AntTable dataSource={data} columns={columns} />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;
