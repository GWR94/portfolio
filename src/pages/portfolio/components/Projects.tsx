import React, { FC, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";
import Modal from "react-modal";
import Calculator from "../../calculator/components/Calculator";
import GridState from "../interfaces/grid.i";
import tilesData from "../data/tiles.data";
import fjcImage from "../images/fjc.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px 40px",
  },
};

const Projects: FC = (): JSX.Element => {
  const [state, setState] = useState<GridState>({
    redirect: false,
    isOpen: false,
  });

  let animationsTimer: number;

  // Random animation for each element in the grid
  const randomAnimation = (): void => {
    const e = document.getElementById(
      `tile${Math.floor(Math.random() * tilesData.length)}`,
    );
    const previous = e.className;
    const animations = [
      "animate__bounce",
      "animate__pulse",
      "animate__swing",
      "animate__tada",
      "animate__headShake",
      "animate__rubberBand",
    ];
    // Random animation gets picked
    const random = ` animate__animated ${
      animations[Math.floor(Math.random() * animations.length)]
    }`;
    e.className += random;
    setTimeout((): void => {
      e.className = previous;
    }, 1000);
  };

  useEffect(() => {
    animationsTimer = window.setInterval((): void => {
      randomAnimation();
    }, 5000);

    return () => {
      clearInterval(animationsTimer);
    };
  }, []);

  const handleOnClick = (route: string): void => {
    setState({
      ...state,
      route,
      redirect: true,
    });
  };

  const { redirect, route } = state;
  if (redirect) {
    return <Redirect push to={route} />;
  }
  const { isOpen } = state;
  return (
    <>
      <div className="projects__container" id="current-work">
        <h1 className="about__title">PROFESSIONAL WORK</h1>
        <Typography className="projects__text" gutterBottom>
          Here is my current portfolio of professional work to date (that I have
          permission from the client to show). All professional projects are currently
          being developed with React for a front-end UI - preferably with TypeScript - and
          AWS services to create the backend. These services include AWS Amplify, AppSync,
          DynamoDB, Cognito, IAM, S3, among others.
        </Typography>

        <Typography gutterBottom>
          The source code for professional projects is available upon request, as the
          GitHub repository is private to protect the client. Feel free to send a message
          requesting it{" "}
          <span
            role="button"
            tabIndex={0}
            className=""
            onClick={() => document.getElementById("contact-form").scrollIntoView()}
          >
            here
          </span>
          . All designs, front-end and back-ends were built by myself unless specified.
        </Typography>
      </div>
      <Container
        id="grid"
        className="projects__grid-container"
        style={{ paddingBottom: 0 }}
      >
        <Grid container>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8}>
            <div className="projects__tile--work">
              <div
                id="tile0"
                style={{
                  background: "#E68BB3",
                }}
                role="button"
                tabIndex={0}
                className="projects__grid-border"
                onClick={(): void =>
                  (window.location.href = "https://www.francescajadecreates.co.uk/")
                }
              >
                <img
                  src={fjcImage}
                  alt="Francesca Jade Creates"
                  className="animate__animated"
                />
                <i
                  className="fas fa-shopping-cart"
                  style={{
                    color: "#FC8BBD",
                  }}
                />
                <p className="projects__tile--title">Francesca Jade Creates</p>
                <p className="projects__tile--subtitle">
                  Full-Stack App Built with AWS, React, Stripe, Redux
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="projects__container">
        <h1 className="about__title">PROJECTS</h1>
        <Typography className="projects__text" gutterBottom>
          Here are a few examples of the projects that I have created during my Software
          Development journey. Most of the front-end of these projects are normally built
          using React with TypeScript, and occasionally JavaScript. The backend can vary
          from project to project, but can include Node.JS,
        </Typography>
        <Typography className="projects__text">
          Hover over each of the tiles (or hold a touch on mobile) to see which
          technologies were used for the project, and optionally click the &quot;View
          Source&quot; button to view the source code on GitHub. To view the project click
          on the tile to open it.
        </Typography>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={(): void =>
          setState({
            ...state,
            isOpen: false,
          })
        }
        style={customStyles}
        contentLabel="Calculator"
      >
        <Calculator />
      </Modal>
      <Container id="grid" className="projects__grid-container">
        <Grid container>
          {tilesData.map(
            (tile, i): JSX.Element => (
              <Grid
                item
                xs={12}
                sm={6}
                md={tile.featured ? 7 : 5}
                key={i}
                className="projects__tile"
              >
                <div
                  id={`tile${i + 1}`}
                  style={{
                    background: tile.color,
                  }}
                  role="button"
                  tabIndex={0}
                  className="projects__grid-border"
                  onClick={
                    tile.click
                      ? (): void =>
                          setState({
                            ...state,
                            isOpen: true,
                          })
                      : tile.redirect
                      ? (): void => {
                          location.href = tile.href;
                        }
                      : (): void => handleOnClick(tile.href)
                  }
                >
                  <img src={tile.img} alt={tile.title} className="animate__animated" />
                  <i
                    className={`${tile.class}`}
                    style={{
                      color: tile.color,
                    }}
                  />
                  <p className="projects__tile--title">{tile.title}</p>
                  <p className="projects__tile--subtitle">{tile.subtitle}</p>
                  <Button
                    className="projects__source-button"
                    onClick={(e): void => {
                      e.stopPropagation();
                      document.location.href = tile.sourceCode;
                    }}
                  >
                    View Source
                  </Button>
                </div>
              </Grid>
            ),
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
