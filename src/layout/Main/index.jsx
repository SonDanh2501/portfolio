import { ConfigProvider, Drawer, Layout, theme } from "antd";
import React, { useEffect, useState } from "react";
import Admin from "../admin";
import Sidebar from "../Sidebar";
import HeaderBar from "../Header";
import { debounce } from "lodash";
import "./index.scss"

const { Header, Sider, Content } = Layout; // Set content có trong Layout, ở đây là gồm 3 phần Header, Thanh Sider, Content

const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(false);
  const [isOpenDrawler, setIsOpenDrawler] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 100); // Chỉ cập nhật mỗi 200ms

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel(); // Hủy debounce khi unmount
    };
  }, []);

  const handleClickSideBar = () => {
    if (width > 1280) {
      setCollapsed(!collapsed);
    } else {
      setIsOpenDrawler(true);
    }
  };

  // useEffect(() => {
  //   // Auto close sidebar
  //   if (width > 1280) {
  //     setCollapsed(false);
  //   } else {
  //     setCollapsed(true);
  //   }
  // }, [width]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: "#EEF0F8",
            headerHeight: 55,
          },
        },
      }}
    >
      <Layout hasSider style={{ overflowX: "hidden" }}>
        {width > 1280 ? (
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={110}
            // breakpoint="sm"
            collapsedWidth={80}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "transparent",
              zIndex: "999",
              // borderRight: "2px solid black",
              // boxShadow: "0 3px 4px rgba(57, 63, 72, 0.3)",
            }}
          >
            <Sidebar hide={collapsed} />
          </Sider>
        ) : (
          <Drawer
            open={isOpenDrawler}
            width={260}
            onClose={() => setIsOpenDrawler(false)}
            placement="left"
            headerStyle={{
              height: 30,
              paddingLeft: 0,
              display: "none",
              margin: 0,
            }}
          >
            <Sidebar hide={true} />
          </Drawer>
        )}
        <Layout
          style={{
            // marginLeft: width > 1280 ? (collapsed ? 80 : 110) : 0,
            transitionDuration: "100ms",
            height: "100vh",
            scrollBehavior: "smooth"
          }}
        >
          {/* <Header
            style={{
              padding: 0,
              background: "#FCFEFF",
              borderBottom: "2px solid #E2E9F1",
            }}
          >
            <HeaderBar />
          </Header> */}
          <Content
            style={{
              margin: "0px",
              overflow: "initial",
            scrollBehavior: "smooth"
            }}
          >
            {/*Button để scroll to top page*/}
            {/* <FloatButton.BackTop /> */}
            {/*Các navigate page trong admin */}
            <Admin/>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Main;
