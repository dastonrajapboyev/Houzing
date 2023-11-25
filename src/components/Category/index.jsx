import React, { useEffect, useState } from "react";
import { Container } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

// import { Carousel } from "antd";

const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  // adaptiveHeight: false,
  dots: true,
  appendDots: (dots) => <h1> {dots} </h1>,
};

const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiMTc2NHJhamFib3Z2QGdtYWlsLmNvbSIsImV4cCI6MTcxODkzNjk5NiwiaWF0IjoxNzAwOTM2OTk2LCJzY29wZSI6IlJPTEVfVVNFUiJ9.ZTSbdljVH7mHXv7FUAqS5c9Qqn8i9XcFYtwrvbDqKlXVA3_MmTXu79xzxrVkFn36K47hyVW-0Gw5vZ50nDgjtzwol7q1eNP9J_xHcTslpR9ZKPJGtqi9-erMWcZbXJ9iY8GIFYe3KwyIK2TLCcRYzRuYvzOuUBX8liZFqoRpnFe_cE81-J4RL4TcldCsHR-usvvwmMZAbo5h2bdQansgwxtXKoW0pgBDN9ZtMR0Pbqtoky3optIhRPxcFOrCg4MuEgPpntLpZ8EWGOVEcU3FL51gJQe1t2A4j7p0L03iOXrIXDEOtLcqUjt0XdBVfnQ_3nGeeCIiGrU5AUXGrw0TWQ",
        // Other headers if required
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
              key={index}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
