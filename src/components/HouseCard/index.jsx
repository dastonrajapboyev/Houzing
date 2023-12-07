// import React from "react";
// import { Container, Content, Details, Divider,  Icons, Img } from "./style";
import { Container, Content, Details, Img, Icons, Divider } from "./style";
import noImg from "../../assets/images/noimg.png";

export const HouseCard = ({ data = {}, gap }) => {
  // console.log(data);
  const {
    attachments,
    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
    category,
  } = data;

  return (
    <div style={{display: 'flex'}}>

    <Container gap={gap}>
      <Img src={(attachments && attachments[0]?.imgPath) || noImg} alt="img" />
      <Content>
        <div className="subTitle inline">
          {country}, {city}, {description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
          {category?.name || "category"} {houseDetails?.room || 0}-rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info"> bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">car {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">
              Area {houseDetails?.area || 0}
              kv
            </div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content $footer>
        <Details.Item $detailsFooter>
          <div className="info">{price || "$2,800/mo"}</div>
          <div className="subTitle">{salePrice || "$7,500/mo"}</div>
        </Details.Item>
        <Details.Item $row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
    </div>
  );
};

export default HouseCard;
