import React from "react";
import { Button } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import scrollToElement from "scroll-to-element";
import TypedJSText from "./TypedJSText";
import meImg from "../images/displayImg.jpg";
import { LandingPageProps } from "../interfaces/landing.i";

const LandingPage: React.FC<LandingPageProps> = ({ setActive }): JSX.Element => (
  <div className="landing__container" id="landing-page">
    <div className="landing__image-container animate__animated animate__fadeInDownBig">
      <img src={meImg} alt="Me!" className="landing__image" />
    </div>
    <TypedJSText
      strings={[
        "I am a full-stack developer",
        "I develop full-stack applications.",
        "I develop back-end servers and API's.",
        "I develop database solutions.",
        "I design and build applications.",
      ]}
      name={"Hi, I'm James."}
    />
    <Button
      size="medium"
      className="landing__button animate__animated animate__slideInRight"
      onClick={(): void => {
        scrollToElement("#portfolio-nav");
        setActive();
      }}
      endIcon={<ExpandMoreOutlined />}
    >
      Open Portfolio
    </Button>
  </div>
);
export default LandingPage;
