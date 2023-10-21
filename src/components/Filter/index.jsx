import React from "react";
import { Dropdown } from "antd";
import { MenuProps } from "antd";
// import {SmileOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
// import 'antd/dist/reset.css'
import { Container, Icons } from "./style";
import { Input, Button } from "../Generic";

// const Filter = () => {
// const menu = <div>test</div>;
//   return (
//     <Container>
//       <Input
//         $icon={<Icons.Houses />}
//         placeholder={"Enter an address, neighborhood, city, or ZIP code"}
//       />
//       <Dropdown menu={{ menu }}>
//         <a onClick={(e) => e.preventDefault()}>
//           <Space>
//             Hover me
//             {/* <DownOutlined /> */}
//           </Space>
//         </a>
//       </Dropdown>
//       <Button>
//         <Icons.Search />
//         Search
//       </Button>
//     </Container>
//   );
// };

// export default Filter;

{
  /* <Dropdown
          menu={{ menu }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}>
          <div>
            <Button type={"light"}>
              <Icons.Settings /> Advanced
            </Button>
            {/* <Button>bottomRight</Button> */
}
{
  /* </div> */
}
{
  /* </Dropdown> */
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <span>1st menu item</span>,
  },
  {
    key: "2",
    label: <span>2nd menu item (disabled)</span>,
    // icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: <span>3rd menu item (disabled)</span>,
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const Filter = () => {
  return (
    <Container>
      <Input
        $icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Button type={"light"}>
            <Icons.Settings /> Advanced
          </Button>
        </a>
      </Dropdown>
      <Button>
        <Icons.Search />
         Search {" "}
      </Button>
    </Container>
  );
};

export default Filter;
