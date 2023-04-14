import { Layout } from "antd";
import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import SubSideBar from "./SubSideBar";

interface ISideBarLayoutProps {}

const SideBarLayout: React.FunctionComponent<ISideBarLayoutProps> = (props) => {
  const { Content } = Layout;
  const { currentTheme } = useThemeSwitcher();

  return (
    <Layout
      className={currentTheme}
      style={{ minHeight: "100vh", position: "relative" }}
    >
      <SideBar />
      <Layout className="content-layout">
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <SubSideBar />
    </Layout>
  );
};

export default SideBarLayout;
