import React, { useState } from "react";
import "./index.scss";
import avatarImage from "../../assets/images/avatar.jpg";
import waveImage from "../../assets/images/wave.svg";
import frontEndImage from "../../assets/images/feature__web.png";
import webDeployImage from "../../assets/images/feature__tools.png";
import demoImage from "../../assets/images/demo.png";
import logoImage from "../../assets/images/logo.png";

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoGoogle,
  IoLogoFacebook,
  IoGlobe,
  IoGlobeOutline,
  IoLogoAppleAppstore,
  IoLink,
} from "react-icons/io5";
import { toast } from "react-toastify";

const LandingPage = () => {
  const [selectImage, setSelectImage] = useState("");
  const [isShowImage, setIsShowImage] = useState(false);

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
  }
  return (
    <div style={{ scrollBehavior: "smooth" }} className="landing-page">
      {/* Landing Page*/}
      <div className="landing-page__information" id="home">
        {/* CV */}
        <div className="landing-page__right-corner">
          <div
            onClick={() => handleCopy("sondanhwork2501@gmail.com")}
            className="landing-page__right-corner--button only-text"
          >
            <span>@sondanhwork2501</span>
          </div>
          <div className="landing-page__right-corner--button">
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
            <span className="github">
              <IoLogoGithub />
            </span>
          </div>
          <div className="landing-page__information--social-media-item">
            <span className="linked">
              <IoLogoLinkedin />
            </span>
          </div>
          <div className="landing-page__information--social-media-item">
            <span className="gmail">
              <IoLogoGoogle />
            </span>
          </div>
          <div className="landing-page__information--social-media-item">
            <span className="facebook">
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
              Since beginning my journey as a freelance designer 12 years ago,
              I've done remote work for agencies, consulted for startups, and
              collaborated with talented people to create digital products for
              both business and consumer use. I'm quietly confident, naturally
              curious, and perpetually working on improving my chops.
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
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
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
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page__wave rotate">
        <img src={waveImage}></img>
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
                GUVi
              </span>
              <div className="landing-page__project--container-works-item-content">
                <span>
                  Domposer is a website builder which has a UI that allows you
                  to quickly add and rearrange HTML and CSS, upload and download
                  created projects and files, login to save up to 5 projects and
                  can be installed as a progressive web application. The stack
                  is Laravel for the backend/API's and vanilla JS for the
                  frontend. The Github repository for this is private at the
                  moment.
                </span>
              </div>
              <div className="landing-page__project--container-works-item-link">
                <span>
                  <IoGlobeOutline />
                </span>
                <span>
                  <IoLogoGithub />
                </span>
                <span>
                  <IoLink />
                </span>
                <span>
                  <IoLogoAppleAppstore />
                </span>
              </div>
            </div>
            <div className="landing-page__project--container-works-item">
              <div
                onClick={() => handleViewDetailImage(webDeployImage)}
                className="landing-page__project--container-works-item-thumbnail"
              >
                <img src={webDeployImage} alt="" className=""></img>
              </div>
              <span className="landing-page__project--container-works-item-title">
                GUVi
              </span>
              <div className="landing-page__project--container-works-item-content">
                <span>
                  Domposer is a website builder which has a UI that allows you
                  to quickly add and rearrange HTML and CSS, upload and download
                  created projects and files, login to save up to 5 projects and
                  can be installed as a progressive web application. The stack
                  is Laravel for the backend/API's and vanilla JS for the
                  frontend. The Github repository for this is private at the
                  moment.
                </span>
              </div>
              <div className="landing-page__project--container-works-item-link">
                <span>
                  <IoGlobeOutline />
                </span>
                <span>
                  <IoLogoGithub />
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
            <span>
              <IoLogoGithub />
            </span>
          </div>
          <div className="landing-page__footer--icons-icon">
            <span>
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
