import { AntTabs, Container } from "./style";
import Signin from "../Signin";
import Signup from "../Signup";

const Register = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Sign in",
      children: <Signin />,
    },
    {
      key: "2",
      label: "Sign up",
      children: <Signup />,
    },
  ];

  return (
    <Container>
      <AntTabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Container>
  );
};

export default Register;
