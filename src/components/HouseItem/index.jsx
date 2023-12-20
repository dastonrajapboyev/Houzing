import { useParams } from "react-router-dom";
import { Container, Content, Description, Details, Icons, Section } from "./style";
import { useEffect, useState } from "react";
const { REACT_APP_BASE_URL: url } = process.env;

const HouseItem = () => {
  const [data, setData] = useState({});

  const params = useParams();

  useEffect(() => {
    console.log(url, data);
    fetch(`http://localhost:8081/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);

  console.log(data);
  return (
    <Container>
      <Section>
        <Content>
          <Content.Title $large>{data?.name}</Content.Title>
          <div className="info">
            {data?.city}, {data?.address}, {data?.country}
          </div>
        </Content>
        <Content $flex>
          <Icons.Share /> <Icons.Title>Share</Icons.Title>
          <Icons.Love /> <Icons.Title>Save</Icons.Title>
        </Content>
      </Section>
      <Section>
        <Details>
          <Icons.Bed />
          <Details.Title>bed {data?.houseDetails?.beds || 0}</Details.Title>

          <Icons.Bath />
          <Details.Title> bath {data?.houseDetails?.bath || 0}</Details.Title>

          <Icons.Car />
          <Details.Title>car {data?.houseDetails?.garage || 0}</Details.Title>

          <Icons.Ruler />
          <Details.Title>
            Area {data?.houseDetails?.area || 0}
            kv
          </Details.Title>
        </Details>
        <Content>
          <Content $flex>
            <del>
              <Details.Title>${data?.price || 0}/mo</Details.Title>
            </del>
            <h2 className="title"> ${data?.salePrice || 0}/mo</h2>
          </Content>
          <div className="info" style={{textAlign: 'end'}}>{data?.user?.firstname}</div>
        </Content>
      </Section>
      <Content.Title>Description</Content.Title>
      <Description>{data?.description}</Description>
      <Content.Title $mt={48} $mb>Location</Content.Title>
    </Container>
  );
};

export default HouseItem;
