import { Layout } from "antd";
import * as React from "react";
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const { Footer } = Layout;
  return (
    <Footer>
      <h1>hello</h1>
    </Footer>
  );
};

export default Footer;
