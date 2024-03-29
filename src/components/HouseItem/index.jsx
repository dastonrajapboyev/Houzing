import React from "react";
import { useParams } from "react-router-dom";
import {
  Blur,
  Container,
  Content,
  Description,
  Details,
  Icons,
  ImageContainer,
  ImgContainer,
  Section,
  User,
  Wrapper,
} from "./style";
import { useEffect, useState } from "react";
import { Input, Button } from "../Generic";
import { Checkbox } from "antd";
import nouser from "../../assets/images/no-user-image.gif";
import Yandex from "../Generic/Yandex";
import Recent from "../Recent";
import noImg from "../../assets/images/noimg.png";

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
    <React.Fragment>
      <ImageContainer>
        <ImageContainer.Main
          src={(data?.attachments && data?.attachments[0]?.imgPath) || noImg}
          alt="test"
        />
        <ImgContainer>
          {data.attachments?.slice(1, 5).map((value, index) => {
            return data?.attachments?.length > 5 && index === 3 ? (
              <Blur.Container key={`blur${index}`}>
                <ImageContainer.Subimg src={value?.imgPath} alt="test" />
                <Blur>+{data?.attachments?.length - 5}</Blur>
              </Blur.Container>
            ) : (
              <ImageContainer.Subimg
                key={index}
                src={value?.imgPath}
                alt="test"
              />
            );
          })}
        </ImgContainer>
      </ImageContainer>
      <Wrapper>
        <Container $flex={3}>
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
              <Details.Title>
                {" "}
                bath {data?.houseDetails?.bath || 0}
              </Details.Title>

              <Icons.Car />
              <Details.Title>car {data?.houseDetails?.Car || 0}</Details.Title>

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
              <div className="info" style={{ textAlign: "end" }}>
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Feature</Content.Title>
          <Section>
            <Container $gap={25}>
              <Content $flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content $flex>
                <Icons.Car />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content $flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content $flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Section>
              <Container $gap={25}>
                <Content $flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Car />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container $gap={25}>
                <Content $flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Car />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container $gap={25}>
                <Content $flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Car />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content $flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
          </Section>
        </Container>

        <Container className="user" $flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subtitle">Doston</div>
              <div className="info">998 97 095 91 90</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send reauest</Button>
        </Container>
      </Wrapper>
      <Yandex />
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;
