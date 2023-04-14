import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Layout } from "antd";
import React, { ReactNode, useCallback, useMemo } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppTranslate, useI18n } from "../../hooks";
import ExploreIcon from "../../svg/ExploreIcon";
import HomeICon from "../../svg/HomeIcon";
import Logo from "../../svg/Logo";
import NotificationIcon from "../../svg/NotificationIcon";
import SearchIcon from "../../svg/SearchIcon";
import SettingIcon from "../../svg/SettingIcon";
import ThemeIcon from "../../svg/ThemeIcon";

interface ISideBarProps {}

interface MenuItemInterface {
  key: string;
  title: string;
  icon: ReactNode;
}

const siderStyle1: React.CSSProperties = {
  minHeight: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  bottom: "0",
  borderRight: "1px solid #ccc",
  padding: "30px 12px 20px",
};

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  const { Sider } = Layout;

  const navigate = useNavigate();
  const location = useLocation();
  const { switcher, currentTheme, themes } = useThemeSwitcher();

  const isDarkMode = currentTheme === "dark";

  const i18n = useI18n();
  const t = useAppTranslate();

  const menuItem: MenuItemInterface[] = useMemo(
    () => [
      {
        key: "home",
        title: t("sideBar.home"),
        icon: (
          <HomeICon
            isActive={
              location.pathname.includes("home") || location.pathname === "/"
            }
          />
        ),
      },
      {
        key: "search",
        title: t("sideBar.search"),
        icon: <SearchIcon isActive={location.pathname.includes("search")} />,
      },
      {
        key: "explore",
        title: t("sideBar.explore"),
        icon: <ExploreIcon isActive={location.pathname.includes("explore")} />,
      },
      {
        key: "notification",
        title: t("sideBar.notification"),
        icon: (
          <NotificationIcon
            isActive={location.pathname.includes("notification")}
          />
        ),
      },
    ],
    [location.pathname, t]
  );

  const handleChangeTheme = useCallback(() => {
    switcher({
      theme: currentTheme === "light" ? themes.dark : themes.light,
    });
    localStorage.setItem(
      "product-theme",
      currentTheme === "light" ? themes.dark : themes.light
    );
  }, [currentTheme, switcher, themes.dark, themes.light]);

  const handleChangeLanguage = useCallback((): void => {
    i18n.changeLanguage(i18n.language === "en" ? "vn" : "en");
  }, [i18n]);

  const items = useMemo(
    () => [
      {
        key: 1,
        label: (
          <div>
            <span className="text">{t("sideBar.setting")}</span>
            <SettingIcon />
          </div>
        ),
      },
      {
        key: 2,
        label: (
          <div onClick={handleChangeTheme}>
            <span className="text">{t("sideBar.theme")}</span>
            <ThemeIcon />
          </div>
        ),
      },
      {
        key: 3,
        label: (
          <div onClick={handleChangeLanguage}>
            <span className="text">{t("sideBar.language")}</span>
            <span
              className="text"
              style={{
                paddingRight: "0.2rem",
                fontSize: "1.7rem",
                fontWeight: "600",
              }}
            >
              {i18n.language.toUpperCase()}
            </span>
          </div>
        ),
      },
      {
        key: 4,
        label: (
          <div>
            <span className="text">{t("sideBar.logOut")}</span>
          </div>
        ),
      },
    ],
    [handleChangeLanguage, handleChangeTheme, i18n.language, t]
  );

  return (
    <Sider style={siderStyle1}>
      <div className="sider-top">
        <Logo />
        <div className="menu">
          {menuItem.map((item) => (
            <div
              className={`menu-item ${
                location.pathname.includes(item.key) ? "menu-item__active" : ""
              }`}
              key={item.key}
              onClick={() => navigate(item.key)}
            >
              {item.icon}
              <span className="text">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sider-bottom">
        <Dropdown
          menu={{ items }}
          placement="topRight"
          trigger={["click"]}
          overlayClassName={isDarkMode ? "dropdown-dark" : "dropdown-light"}
        >
          <div className="show-more">
            <MenuOutlined />
            <span className="text">{t("sideBar.showMore")}</span>
          </div>
        </Dropdown>
      </div>
    </Sider>
  );
};

export default SideBar;
