import { Layout } from "antd";
import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

interface ILandingLayoutProps {}

const LandingLayout: React.FunctionComponent<ILandingLayoutProps> = (props) => {
  const { Content } = Layout;
  const { currentTheme } = useThemeSwitcher();
  return (
    <Layout className={currentTheme}>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default LandingLayout;
