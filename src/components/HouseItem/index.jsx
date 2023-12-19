import { useParams } from "react-router-dom";
import { Container} from "./style";
import { useEffect, useState } from "react";
  const { REACT_APP_BASE_URL: url } = process.env;

const HouseItem = () => {
  const [data, setData] = useState({});

  const params = useParams()

  useEffect(() => {
    console.log(url, data);
    fetch(`http://localhost:8081/api/v1/houses/id/${params?.id}`) 
    .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  console.log(params);
  return (
    <Container>
      <h1>House Item</h1>
    </Container>
  );
};

export default HouseItem;
