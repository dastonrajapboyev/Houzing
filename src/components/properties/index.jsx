import React, {useEffect, useState} from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
// <<<<<<< HEAD
console.log('Component rendering...');
useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;
    fetch(`${url}/houses/list${search}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setData(res?.data || []);
    });
    },[search]);
    
    return (
    <Container>
       {data.map((value, index) => {
          return <HouseCard key={index} data={value} />;
        })}
      </Container>
  );
};

export default Properties;