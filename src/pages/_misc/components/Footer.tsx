import React from "react";
import { Typography } from "@mui/material";

const Footer = () => (
  <div className="footer__container">
    <div className="footer__icons" role="button" tabIndex={0}>
      <i
        className="fas fa-envelope footer__icon--email"
        onClick={() => (location.href = "")}
        role="button"
        tabIndex={0}
      />
      <i
        className="fab fa-github footer__icon--github"
        onClick={() => (location.href = "")}
        role="button"
        tabIndex={0}
      />
      <i
        className="fab fa-linkedin footer__icon--linkedin"
        onClick={() => (location.href = "")}
        role="button"
        tabIndex={0}
      />
    </div>
    <Typography className="footer__text">James Gower 2021 ©</Typography>
  </div>
);

export default Footer;
