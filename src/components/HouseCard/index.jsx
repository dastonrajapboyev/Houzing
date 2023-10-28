import React from "react";
// import { Container, Content, Details, Divider,  Icons, Img } from "./style";
import { Container, Content, Details, Img, Icons, Divider } from "./style";
import noImg from "../../assets/images/noimg.png";

const HouseCard = ({ url, title, info, bed, bath, car, ruler }) => {
  return (
    <Container>
      <Img src={url || noImg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">bed {bed || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">bath {bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">car {car || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">ruler {ruler || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content $footer>
        <Details.Item $detailsFooter>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item $row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
