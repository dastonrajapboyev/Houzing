import { Container, Content, Icon } from "./style";

const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Location />
          329 Queensberry Street, North Melbourne VIC 3051, Australia.
        </Content.Item>

        <Content.Item>
          <Icon.Phone />
          998 97 095 91 90
        </Content.Item>
        <Content.Item>
        <Icon.Email1 />
          1764rajabovv@gmail.com
        </Content.Item>

        {/* <Content.Item>
          <Icon.Email1 />
          1764rajabovv@gmail.com
        </Content.Item> */}

      </Content>
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Uzbekistan</Content.Item>
        <Content.Item>Russia</Content.Item>
        <Content.Item>UAE</Content.Item>
        <Content.Item>Saudi arabia</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>Frontend</Content.Item>
        <Content.Item>Backend</Content.Item>
        <Content.Item>Mobile</Content.Item>
        <Content.Item>Flutter</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>About Us</Content.Item>
        <Content.Item>Terms & Conditions</Content.Item>
        <Content.Item>Support Center</Content.Item>
        <Content.Item>Contact Us</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;
