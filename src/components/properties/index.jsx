import React, {useEffect, useState} from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
// import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
const Properties = () => {
  // console.log(`${url}/houses/list`);
  const [data, setData] = useState([]);
// <<<<<<< HEAD
// =======
  // const { REACT_APP_BASE_URL: url } = process.env; // 'bu ham 1 yo'l lekin bunda networkda farq qiladi'
  const url = process.env 
  console.log(url);
// >>>>>>> b7dbb8b (backend is not working well)
  useEffect(() => {
    fetch(`${url}/houses/list`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setData(res?.data || []);
    });
    }, []);
    
    return (
      <Container>
      {data && data.length > 0 ? (
        data.map((value, index) => {
          return <HouseCard key={index} data={value} />;
        })
        ) : (
          <p>No data available</p>
          )}
    </Container>
  );
};

export default Properties;

// / ==============================================

// console.log("Data from the URL:", res?.data);
// console.log(data);
// <Container>
//   {data.map((value) => {
  //     return <HouseCard  data={value} />;
  //   })}
  // </Container>
  // const { search } = useLocation();
  // useEffect(() => {
  //   fetch(`${url}/houses/list${search}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("Data from the URL:", res?.data);
  //       console.log(data);
  //       setData(res?.data || []);
  //     });
  // }, [search]);