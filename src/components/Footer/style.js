import styled from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as email1 } from "../../assets/icons/email1.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 48px 0px;
  position: relative;
  width: 100%;
  height: 427px;
  margin-top: 96px;
  background-color: #0d263b;
`;

const Content = styled.div`
  max-width: 235px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

Content.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: #fff;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
`;
const Icon = styled.div``;
Icon.Location = styled(location)`
width: 54px;
margin-right: 21px;
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  `;
  Icon.Email1 = styled(email1)`
  /* width: 34px; */
    margin-right: 21px;
    & path {
      fill: #fff;
    }
  `;
Icon.Facebook = styled(facebook)`
`;
Icon.Twitter = styled(twitter)`
`;
Icon.Instagram = styled(instagram)`

`;
Icon.In = styled(linkedin)`
  
`;

export { Container, Content, Icon };
