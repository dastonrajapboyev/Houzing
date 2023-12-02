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
          "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiMTc2NHJhamFib3Z2QGdtYWlsLmNvbSIsImV4cCI6MTcxOTQ0NzEyMSwiaWF0IjoxNzAxNDQ3MTIxLCJzY29wZSI6IlJPTEVfVVNFUiJ9.g2o6XEw0S3eU86BpOtwtYwGyd1k873Dk9npnqe4r83RS0cAILS8HWkiPAG_cTnFp8x3xPjmFyTQxK37ek-PXI15gXXXqcN0Duv9QVljLgXEt4cQp_bPzAayQolJJ0QlvSQUlEGXOedyr5MPWizPPT2A4YxqYmvKZvR1YwXW9DcfaPxD498hDpF62KslxDXkg3KDVRTXfWPZ1bS7ms4MGmteTW3R7qVUKlB2zZnBNkHuFydhxXLnrJGA0O6KD5pP-EYzG-C_CZ82M-dS1F-o9iN5BnzzHn4iseVLf1wrvh4I8M4u6IrVXvw6yKkoVa9zoyCPfshf3Yb4i0VqPnsfbYA",
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
