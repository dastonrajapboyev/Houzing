import React, { useEffect, useState } from "react";
import { Container } from "./style";

const Properties = () => {
  const [data, setData] = useState([]);
  // const { REACT_APP_BASE_URL: url } = process.env; // 'bu ham 1 yo'l lekin bunda networkda farq qiladi'
  const url = process.env 
  console.log(url);
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`${url}/houses/list`);
      const data = await response.json();
      setData(data);
      console.log(data);
    };

    fetchUserData();
  }, []);
  console.log(data)

  return (
    <Container>
      {/* {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))} */}
    </Container>
  );
};

export default Properties;

