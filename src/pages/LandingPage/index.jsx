import React, { useState } from "react";
import "./index.scss";
import avatarImage from "../../assets/images/avatar.jpg";
import waveImage from "../../assets/images/wave.svg";
import frontEndImage from "../../assets/images/feature__web.png";
import webDeployImage from "../../assets/images/feature__tools.png";
import demoImage from "../../assets/images/demo.png";
import demoBookingWebsiteImage from "../../assets/images/demo_booking_website.jpg";
import logoImage from "../../assets/images/logo.png";
import logoGuviImage from "../../assets/images/logo.svg";
import logoIBPImage from "../../assets/images/logoIBP.png";

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoGoogle,
  IoLogoFacebook,
  IoGlobe,
  IoGlobeOutline,
  IoLogoAppleAppstore,
  IoLink,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoSass,
} from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import {
  SiNestjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

import { toast } from "react-toastify";

const LandingPage = () => {
  const [selectImage, setSelectImage] = useState("");
  const [isShowImage, setIsShowImage] = useState(false);

  const listSkills = [
    {
      id: 1,
      label: "ReactJS",
      icon: <IoLogoReact />,
      color: "#61ddfb",
    },
    {
      id: 2,
      label: "NextJS",
      icon: <RiNextjsFill />,
      color: "#010001",
    },
    {
      id: 3,
      label: "Tailwindcss",
      icon: <SiTailwindcss />,
      color: "#39bdf9",
    },
    {
      id: 4,
      label: "MUI",
      icon: <SiMui />,
      color: "#017eff",
    },
    {
      id: 5,
      label: "Sass",
      icon: <IoLogoSass />,
      color: "#cd6698",
    },
    {
      id: 6,
      label: "NodeJS",
      icon: <DiNodejs />,
      color: "#7eb669",
    },
    {
      id: 7,
      label: "NestJS",
      icon: <SiNestjs />,
      color: "#e0234f",
    },
    {
      id: 8,
      label: "ExpressJS",
      icon: <SiExpress />,
      color: "#f1c40f",
    },
    {
      id: 9,
      label: "TypeScript",
      icon: <SiTypescript />,
      color: "#2c78c7",
    },
    {
      id: 10,
      label: "JavaScript",
      icon: <SiJavascript />,
      color: "#f0da4e",
    },
    {
      id: 11,
      label: "Mongodb",
      icon: <SiMongodb />,
      color: "#01684b",
    },
    {
      id: 12,
      label: "MySQL",
      icon: <SiMysql />,
      color: "#5382a1",
    },
  ];

  const handleViewDetailImage = (image) => {
    setSelectImage(image);
    setIsShowImage(true);
  };

  const handleCopy = (text) => {
    if (text && text.length > 0) {
      navigator.clipboard.writeText(text);
      // successNotify({mess})
      toast.success("Sao chép thành công", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleClickLink = (link) => {
    window.open(link, "_blank")
  }
  return (
    <div style={{ scrollBehavior: "smooth" }} className="landing-page">
      {/* Landing Page*/}
      <div className="landing-page__information" id="home">
        <div className="landing-page__information-stone"></div>
        <div className="landing-page__information-stone"></div>
        <div className="landing-page__information-stone"></div>
        <div className="landing-page__information-stone"></div>
        <div className="landing-page__information-stone"></div>
        <div className="landing-page__information-stone"></div>
        <div className="landing-page__information-stone"></div>
        {/* CV */}
        <div className="landing-page__right-corner">
          <div
            onClick={() => handleCopy("sondanhwork2501@gmail.com")}
            className="landing-page__right-corner--button only-text"
          >
            <span>@sondanhwork2501</span>
          </div>
          <div
            onClick={() =>
              handleClickLink(
                "https://drive.google.com/file/d/1lVQcXWpljuiur5VxAw9CjI_cki8DIVd_/view?usp=sharing"
              )
            }
            className="landing-page__right-corner--button"
          >
            <span>Check out my CV</span>
          </div>
        </div>
        {/* Avatar */}
        <div className="landing-page__information--avatar">
          <img src={avatarImage} alt="avatar"></img>
        </div>
        {/* Name */}
        <h1 className="landing-page__information--name">
          Hi! I'm Danh Truong Son
        </h1>
        {/* Position */}
        <h2 className="landing-page__information--position">
          I'm a Front-End Developer
        </h2>
        {/* Social Media Link */}
        <div className="landing-page__information--social-media">
          <div className="landing-page__information--social-media-item">
            <span
              onClick={() => handleClickLink("https://github.com/SonDanh2501")}
              className="github"
            >
              <IoLogoGithub />
            </span>
          </div>
          <div className="landing-page__information--social-media-item">
            <span
              onClick={() =>
                handleClickLink("www.linkedin.com/in/danh-son-5678a2280")
              }
              className="linked"
            >
              <IoLogoLinkedin />
            </span>
          </div>
          {/* <div className="landing-page__information--social-media-item">
            <span className="gmail">
              <IoLogoGoogle />
            </span>
          </div> */}
          <div className="landing-page__information--social-media-item">
            <span
              onClick={() =>
                handleClickLink("https://www.facebook.com/sondanh2501/")
              }
              className="facebook"
            >
              <IoLogoFacebook />
            </span>
          </div>
        </div>
        {/* Scroll down */}
        <div className="landing-page__information--scroll-guide">
          <span className="landing-page__information--scroll-guide-title">
            Scroll down
          </span>
          <div className="landing-page__information--scroll-guide-animation">
            <div className="landing-page__information--scroll-guide-animation-dot"></div>
          </div>
        </div>
        {/* <div className="landing-page__information--background"></div> */}
      </div>
      <div className="landing-page__wave">
        <img src={waveImage}></img>
      </div>
      {/* Introduction Page*/}
      <div className="landing-page__introduction" id="profile">
        {/* Content */}
        <div className="landing-page__introduction--container">
          <div className="landing-page__introduction--container-title">
            <span className="landing-page__introduction--container-title-content">
              My story
            </span>
            <div className="landing-page__introduction--container-title-underline"></div>
          </div>
          <div className="landing-page__introduction--container-body">
            <span>Hi there! I'm Son, a web developer from Vietnam.</span>
            <span>
              Motivated developer with excellent English communication skills. I
              have strong hands-on experience in Front-end development using
              React TypeScript and UX/UI design with Figma. Additionally, I've
              contributed to Back-end development by creating APIs with Nest Js.
              With a solid background in Scrum projects, I'm passionate about
              using my skills to drive innovative solutions and contribute
              effectively to dynamic, collaborative teams.
            </span>
          </div>
          <div className="landing-page__introduction--container-my-skills">
            <div className="landing-page__introduction--container-my-skills-skill">
              <img
                className="landing-page__introduction--container-my-skills-skill-image"
                src={frontEndImage}
                alt=""
              ></img>
              <div className="landing-page__introduction--container-my-skills-skill-content">
                <span className="landing-page__introduction--container-my-skills-skill-content-header">
                  UI/UX Designer
                </span>
                <span className="landing-page__introduction--container-my-skills-skill-content-body">
                  I appreciate a clear content structure, elegant design
                  patterns, and intuitive interactions
                </span>
              </div>
            </div>
            <div className="landing-page__introduction--container-my-skills-skill">
              <img
                className="landing-page__introduction--container-my-skills-skill-image"
                src={webDeployImage}
                alt=""
              ></img>
              <div className="landing-page__introduction--container-my-skills-skill-content">
                <span className="landing-page__introduction--container-my-skills-skill-content-header">
                  Frontend Developer
                </span>
                <span className="landing-page__introduction--container-my-skills-skill-content-body">
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page__wave rotate">
        <img src={waveImage}></img>
      </div>
      {/* Experience Page*/}
      <div className="landing-page__experience" id="experience">
        <div className="landing-page__experience--container">
          <span className="landing-page__experience--container-sub">
            What I have done so far
          </span>
          <span className="landing-page__experience--container-header">
            Work Experience
          </span>
          <div className="landing-page__experience--container-content">
            <div className="landing-page__experience--container-content-item">
              <div className="landing-page__experience--container-content-item-body">
                <div className="landing-page__experience--container-content-item-body-title">
                  <span className="landing-page__experience--container-content-item-body-title-header">
                    Front-end Developer
                  </span>
                  <span className="landing-page__experience--container-content-item-body-title-sub">
                    GUVI TECHNOLOGY SOLUTIONS CO., LTD
                  </span>
                </div>
                <div className="landing-page__experience--container-content-item-body-content">
                  <div className="landing-page__experience--container-content-item-body-content-line">
                    <div className="landing-page__experience--container-content-item-body-content-line-bullets"></div>
                    <span className="landing-page__experience--container-content-item-body-content-line-text">
                      Experienced UI/UX Designer specializing in creating
                      intuitive and visually appealing user interfaces using
                      Figma
                    </span>
                  </div>
                </div>
                <div className="landing-page__experience--container-content-item-body-content">
                  <div className="landing-page__experience--container-content-item-body-content-line">
                    <div className="landing-page__experience--container-content-item-body-content-line-bullets "></div>
                    <span className="landing-page__experience--container-content-item-body-content-line-text">
                      Experienced Front-End Developer with a strong focus on
                      building responsive, user-friendly interfaces that enhance
                      user experience and accessibility.
                    </span>
                  </div>
                </div>
                <div className="landing-page__experience--container-content-item-body-content">
                  <div className="landing-page__experience--container-content-item-body-content-line">
                    <div className="landing-page__experience--container-content-item-body-content-line-bullets "></div>
                    <span className="landing-page__experience--container-content-item-body-content-line-text">
                      Some Backend experience
                    </span>
                  </div>
                </div>
              </div>
              <div className="landing-page__experience--container-content-item-middle">
                <div className="landing-page__experience--container-content-item-middle-line small-line"></div>
                <div className="landing-page__experience--container-content-item-middle-thumbnail">
                  <img src={logoGuviImage} alt=""></img>
                </div>
                <div className="landing-page__experience--container-content-item-middle-line"></div>
              </div>
              <div className="landing-page__experience--container-content-item-time-line">
                <span>April 2024 - April 2025</span>
              </div>
            </div>
            <div className="landing-page__experience--container-content-item reverse">
              <div className="landing-page__experience--container-content-item-body">
                <div className="landing-page__experience--container-content-item-body-title">
                  <span className="landing-page__experience--container-content-item-body-title-header">
                    Front-end Intern
                  </span>
                  <span className="landing-page__experience--container-content-item-body-title-sub">
                    IBP Holdings JSC
                  </span>
                </div>
                <div className="landing-page__experience--container-content-item-body-content">
                  <div className="landing-page__experience--container-content-item-body-content-line">
                    <div className="landing-page__experience--container-content-item-body-content-line-bullets"></div>
                    <span className="landing-page__experience--container-content-item-body-content-line-text">
                      Through my internship at the company, I have gained
                      valuable teamwork skills, including effective
                      collaboration, clear communication, and adaptability in a
                      professional environment.
                    </span>
                  </div>
                </div>
                <div className="landing-page__experience--container-content-item-body-content">
                  <div className="landing-page__experience--container-content-item-body-content-line">
                    <div className="landing-page__experience--container-content-item-body-content-line-bullets "></div>
                    <span className="landing-page__experience--container-content-item-body-content-line-text">
                      During my internship at the company, I had the opportunity
                      to work on real-world projects and contribute to small
                      features.
                    </span>
                  </div>
                </div>
              </div>
              <div className="landing-page__experience--container-content-item-middle">
                <div className="landing-page__experience--container-content-item-middle-line small-line"></div>
                <div className="landing-page__experience--container-content-item-middle-thumbnail">
                  <img src={logoIBPImage} alt=""></img>
                </div>
                <div className="landing-page__experience--container-content-item-middle-line"></div>
              </div>
              <div className="landing-page__experience--container-content-item-time-line">
                <span>September 2023 - February 2024</span>
              </div>
            </div>
          </div>
          <div className="landing-page__experience--container-skills">
            {listSkills.map((el) => (
              <div
                key={el?.id}
                className="landing-page__experience--container-skills-item"
              >
                <div className="landing-page__experience--container-skills-item-logo">
                  <span style={{ color: el.color }}>{el.icon}</span>
                </div>
                <span className="landing-page__experience--container-skills-item-label">
                  {el.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* My project */}
      <div className="landing-page__project" id="work">
        <div className="landing-page__project--container">
          <span className="landing-page__project--container-header">
            My Recent Work
          </span>
          <span className="landing-page__project--container-sub">
            A collection of projects I've worked on.
          </span>

          <div className="landing-page__project--container-works">
            <div className="landing-page__project--container-works-item">
              <div
                onClick={() => handleViewDetailImage(demoImage)}
                className="landing-page__project--container-works-item-thumbnail"
              >
                <img src={demoImage} alt="" className=""></img>
              </div>
              <span className="landing-page__project--container-works-item-title">
                GUVi - Hourly Maid Service
              </span>
              <div className="landing-page__project--container-works-item-content">
                <span>
                  Guvi is a service-based application that connects customers
                  with collaborators to perform cleaning-related tasks. Company
                  staff receive requests and manage operations through a
                  Customer Relationship Management (CRM) web platform.
                </span>
              </div>
              <div className="landing-page__project--container-works-item-framework">
                <div className="landing-page__project--container-works-item-framework-items">
                  <span>React Js</span>
                </div>
                <div className="landing-page__project--container-works-item-framework-items">
                  <span>Nest Js</span>
                </div>
                <div className="landing-page__project--container-works-item-framework-items">
                  <span>Type Script</span>
                </div>
              </div>
              <div className="landing-page__project--container-works-item-link">
                <span
                  onClick={() =>
                    handleClickLink("https://admin-dev.guvico.com/")
                  }
                >
                  <IoGlobeOutline />
                </span>
                <span
                  onClick={() =>
                    handleClickLink(
                      "https://github.com/SonDanh2501/GUVI-Web-Admin"
                    )
                  }
                >
                  <IoLogoGithub />
                </span>
                <span
                  onClick={() =>
                    handleClickLink(
                      "https://play.google.com/store/apps/details?id=com.guvico_customer&hl=vi"
                    )
                  }
                >
                  <IoLink />
                </span>
                <span
                  onClick={() =>
                    handleClickLink(
                      "https://apps.apple.com/us/app/guvi-gi%C3%BAp-vi%E1%BB%87c-theo-gi%E1%BB%9D/id6443966297"
                    )
                  }
                >
                  <IoLogoAppleAppstore />
                </span>
              </div>
            </div>
            <div className="landing-page__project--container-works-item">
              <div
                onClick={() => handleViewDetailImage(demoBookingWebsiteImage)}
                className="landing-page__project--container-works-item-thumbnail"
              >
                <img src={demoBookingWebsiteImage} alt="" className=""></img>
              </div>
              <span className="landing-page__project--container-works-item-title">
                Booking Soccer Field
              </span>
              <div className="landing-page__project--container-works-item-content">
                <span>
                  It is a platform that facilitates the connection between
                  sports enthusiasts and field owners, enabling field owners to
                  efficiently manage and rent their facilities, while providing
                  sports players with a quick and convenient way to locate
                  available fields.
                </span>
              </div>
              <div className="landing-page__project--container-works-item-framework">
                <div className="landing-page__project--container-works-item-framework-items">
                  <span>React Js</span>
                </div>
                <div className="landing-page__project--container-works-item-framework-items">
                  <span>Express Js</span>
                </div>
                <div className="landing-page__project--container-works-item-framework-items">
                  <span>Java Script</span>
                </div>
              </div>
              <div className="landing-page__project--container-works-item-link">
                {/* <span
                  onClick={() =>
                    handleClickLink(
                      "https://github.com/SonDanh2501/Booking-Pitch-Website"
                    )
                  }
                >
                  <IoGlobeOutline />
                </span> */}
                <span>
                  <IoLogoGithub
                    onClick={() =>
                      handleClickLink(
                        "https://github.com/SonDanh2501/Booking-Pitch-Website"
                      )
                    }
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="landing-page__footer">
        <img className="landing-page__footer--logo" src={logoImage}></img>
        <span className="landing-page__footer--slogan">
          Work hard, play hard
        </span>
        <div></div>
        <div className="landing-page__footer--icons">
          <div className="landing-page__footer--icons-icon">
            <span
              onClick={() => handleClickLink("https://github.com/SonDanh2501")}
            >
              <IoLogoGithub />
            </span>
          </div>
          <div className="landing-page__footer--icons-icon">
            <span
              onClick={() =>
                handleClickLink(
                  "https://www.linkedin.com/in/danh-son-5678a2280/"
                )
              }
            >
              <IoLogoLinkedin />
            </span>
          </div>
        </div>
        <span className="landing-page__footer--content">
          Built by Danh Truong Son with React and JavaScript.
        </span>
        <span className="landing-page__footer--content">
          Copyright © 2023 - 2025 All Rights Reserved.
        </span>
      </div>
      {/* Modal Image */}
      <div
        onClick={() => setIsShowImage(false)}
        className={`landing-page__modal_image ${!isShowImage && "closed"}`}
      >
        <img
          className="landing-page__modal_image-item"
          src={selectImage}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default LandingPage;
