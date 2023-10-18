import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import RootContext from "./context";
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);
