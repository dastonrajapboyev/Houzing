import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useNavigate();
  // <<<<<<< HEAD
  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    request({ url: `/houses/list${search}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <React.Fragment>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Properties;

// ======================

// import React, { useEffect, useState } from "react";
// import { Container } from "./style";
// import HouseCard from "../HouseCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest"; // Assuming this is your custom hook for making requests

// const Properties = () => {
//   const [data, setData] = useState([]);
//   const { search } = useLocation();
//   const navigate = useNavigate();
//   const  request  = useNavigate(); // Correcting the assignment here assuming `request` is provided by your custom hook

//   useEffect(() => {
//     const { REACT_APP_BASE_URL: url } = process.env;
//     // Using the request function from the custom hook
//     fetch(`${url}/houses/list${search}`)
//       .then((res) =>
//         res.json().then((res)=>{

//           setData(res?.data || []);
//         })
//         // console.log(res);
//       )
//       .catch((error) => {
//         // Handle errors here
//         console.error("Error fetching data:", error);
//       });
//  request({url:`/houses/list${search}`})
//   }, [search]);

//   const onSelect = (id) => {
//     navigate(`/properties/${id}`);
//   };

//   return (
//     <Container>
//       {data.map((value) => (
//         <HouseCard
//           onClick={() => onSelect(value.id)}
//           key={value.id}
//           data={value}
//         />
//       ))}
//     </Container>
//   );
// };

// export default Properties;
