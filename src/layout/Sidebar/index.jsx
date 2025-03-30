import React, { useState } from "react";
import "./index.scss";
import logoImage from "../../assets/images/logo.png";

import { FaHouse, FaAddressBook, FaBriefcase } from "react-icons/fa6";
import { IoPerson, IoConstruct, IoDocument } from "react-icons/io5";
import { Tooltip } from "antd";

const Sidebar = () => {
  /* ~~~ Value ~~~ */
  const [valueSelectTab, setValueSelectTab] = useState(1);
  /* ~~~ List ~~~ */
  const listTabs = [
    {
      id: 1,
      icon: <FaHouse />,
      name: "Home",
      navigate: "home",
    },
    {
      id: 2,
      icon: <IoPerson />,
      name: "Profile",
      navigate: "profile",
    },
    {
      id: 3,
      icon: <FaAddressBook />,
      name: "Recent work",
      navigate: "work",
    },
  ];
  /* ~~~ Handle function ~~~ */
  const handleChangeTab = (id, navigate) => {
    setValueSelectTab(id);

    const targetElement = document.getElementById(navigate);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="side-bar">
      <div className="side-bar__container">
        {/* Header */}
        <div className="side-bar__container--header">
          <div className="side-bar__container--header-logo">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="side-bar__container--header-version">
            <span>v1.0.0</span>
          </div>
        </div>
        {/* Body */}
        <div className="side-bar__container--body">
          {listTabs.map((tab, index) => (
            <div
              onClick={() => handleChangeTab(tab.id, tab.navigate)}
              className={`side-bar__container--body-item ${
                valueSelectTab === tab.id && "active"
              }`}
            >
              <Tooltip title={tab.name} placement="right">
                <span>{tab.icon}</span>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
