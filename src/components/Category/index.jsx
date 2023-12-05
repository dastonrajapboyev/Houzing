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
  // 
  useEffect(() => {
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
  }, []);
  return (
    <Container>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              data={value}
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              key={value.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
