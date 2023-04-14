import { Layout } from "antd";
import * as React from "react";
import avt from "../../assets/meow.png";

interface ISubSideBarProps {}

const siderStyle1: React.CSSProperties = {
  minHeight: "100vh",
  padding: "30px 60px 20px 12px",
};

const SubSideBar: React.FunctionComponent<ISubSideBarProps> = (props) => {
  const { Sider } = Layout;
  return (
    <Sider style={siderStyle1}>
      <div className="sub-side-bar">
        <div className="account">
          <div className="account-group">
            <img src={avt} alt="avt" className="rounded-image" />
            <div className="account-group-info">
              <span className="text">_truongquan_125</span>
              <span className="text">Trường Quân</span>
            </div>
          </div>
          <span>Chuyển</span>
        </div>
        <div className="suggest">
          <div className="suggest-header">
            <span>Gợi ý cho bạn</span>
            <span>Xem tất cả</span>
          </div>
          <div className="suggest-list">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="suggest-list-content" key={index}>
                <div className="suggest-list-content__group">
                  <img src={avt} alt="avt" className="rounded-image" />
                  <div className="suggest-list-content__group__info">
                    <span className="text">_truongquan_125</span>
                    <span className="text">Trường Quân</span>
                  </div>
                </div>
                <span>Theo dõi</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default SubSideBar;
