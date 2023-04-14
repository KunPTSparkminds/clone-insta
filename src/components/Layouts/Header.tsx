import { UserOutlined, FacebookOutlined } from "@ant-design/icons";
import { Input, Layout } from "antd";
import * as React from "react";

interface IHeaderProps {}

const LEFT_MENU = ["shop now", "about us", "locate us", "faq"];
const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { Header } = Layout;
  const { Search } = Input;
  return (
    <Header>
      <div className="ant-layout-header__left">
        {LEFT_MENU.map((item, index) => (
          <span key={index} className="menu-item">
            {item}
          </span>
        ))}
      </div>
      <div className="ant-layout-header__right">
        <Search placeholder="search for..." onSearch={() => null} />
        <UserOutlined />
        <FacebookOutlined />
      </div>
    </Header>
  );
};

export default Header;
