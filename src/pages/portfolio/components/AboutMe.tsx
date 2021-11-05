import React from "react";
import { CheckOutlined } from "@mui/icons-material";
import { createTheme, Grid, Typography, useMediaQuery } from "@mui/material";

// import Modal from "./Modal";

/**
 * TODO
 * [ ] Fix comments for unauth user on Blogify
 * [ ] Check all projects have correct repositories
 * [ ] Fix FJC FAQ pointing to /profile instead of /account
 */

const AboutMe: React.FC = (): JSX.Element => {
  const theme = createTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="about__container" id="about-me">
      <h1 className="about__title">ABOUT ME</h1>
      <Typography>
        Hi, I&apos;m James. I am a passionate full-stack web developer with a focus on a
        React for user interfaces; with cloud services from AWS such as Amplify, AppSync,
        Cognito, Lambdas etc to bring it all together. I also have experience in deploying
        with Heroku and Netlify.
      </Typography>
      <Grid spacing={1} container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4} sm={6}>
          <div className="about__card" data-aos="zoom-in">
            <Typography className="about__card--title">Front-End</Typography>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>React</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>Redux</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>TypeScript</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>SCSS / JSS / CSS</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>AWS S3</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <div
            className="about__card"
            data-aos="zoom-in"
            data-aos-delay={mobile ? "0" : "200"}
          >
            <Typography className="about__card--title">Back-End</Typography>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>AWS Cognito & IAM</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>AWS AppSync / GraphQL</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>AWS Lambda</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>Express JS</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>AWS DynamoDB</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <div
            className="about__card"
            data-aos="zoom-in"
            data-aos-delay={mobile ? "0" : "400"}
          >
            <Typography className="about__card--title">Deploying</Typography>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>AWS Amplify</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>Netlify</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>Heroku</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>Webpack</Typography>
            </div>
            <div className="about__card--text">
              <CheckOutlined className="about__card--check" />
              <Typography>Babel</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="about__social--container" data-aos="flip-up">
        <div
          onClick={(): string => (location.href = "https://github.com/jamesgower")}
          className="about__social--inner"
          style={{ color: "#fff" }}
          role="button"
          tabIndex={0}
        >
          <i className="fab fa-github about__social--icon" />
          <Typography className="about__social--text">
            Check out my GitHub history
          </Typography>
        </div>
        <div
          onClick={(): string =>
            (location.href = "https://www.linkedin.com/in/james-gower-45a753153/")
          }
          className="about__social--inner"
          style={{ color: "#0077B5" }}
          role="button"
          tabIndex={0}
        >
          <i className="fab fa-linkedin about__social--icon" />
          <Typography
            className="about__social--text"
            style={{ color: "rgb(107, 171, 255)" }}
          >
            Add me to your network on LinkedIn
          </Typography>
        </div>
        <div
          onClick={(): string => (location.href = "mailto:jgower.dev@gmail.com")}
          className="about__social--inner"
          style={{ color: "#f74245" }}
          role="button"
          tabIndex={0}
        >
          <i className="far fa-envelope about__social--icon" />
          <Typography className="about__social--text" style={{ color: "#f74245" }}>
            Send me an email
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
