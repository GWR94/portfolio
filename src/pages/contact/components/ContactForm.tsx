import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, useMediaQuery, createTheme, Typography } from "@mui/material";
import { isEmail } from "validator";
import { FormState } from "../interfaces/contactForm.i";

const ContactForm = (): JSX.Element => {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    details: "",
    emailSend: false,
    errors: {
      name: "",
      email: "",
      details: "",
    },
    emailResponse: null,
    sentError: false,
  });

  const onSendEmail = async (): Promise<void> => {
    const { name, email, details } = state;

    setState({ ...state, emailSend: true, emailResponse: false });

    try {
      const res = await axios({
        method: "POST",
        url: "/api/send_mail",
        params: {
          name,
          email,
          details,
        },
      });

      if (res.data) {
        setState({ ...state, emailResponse: true });
        setTimeout((): void => {
          setState({
            ...state,
            name: "",
            email: "",
            details: "",
          });
        }, 1000);
        setTimeout((): void => {
          setState({
            ...state,
            emailSend: false,
            emailResponse: null,
          });
        }, 1000);
      }
    } catch (err) {
      setState({ ...state, sentError: true });
      setTimeout((): void => {
        setState({ ...state, sentError: false, emailSend: false, emailResponse: null });
      }, 4000);
    }
  };

  const validateDetails = (): void => {
    const { name, email, details } = state;
    let validated = true;
    const errors: { [key: string]: string } = {};
    if (name.length === 0) {
      errors.name = "Please enter your name";
      validated = false;
    }
    if (!isEmail(email) || email.length === 0) {
      errors.email = "Please enter your email address";
      validated = false;
    }
    if (details.length === 0) {
      errors.details = "Please enter a few details";
      validated = false;
    }
    setState({ ...state, errors });
    if (validated) onSendEmail();
  };

  const onFormEnterPress = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      validateDetails();
    }
  };

  const theme = createTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const { emailResponse, emailSend, errors, name, email, details, sentError } = state;
  return (
    <>
      <div className="form__text-container" id="contact-form">
        <h1 className="about__title">CONTACT ME</h1>
        <Typography style={{ textAlign: "center" }}>
          If you&apos;d like to get in touch for a quote or for a bit more information
          about some of the projects then please feel free to send me a message via the
          form below. I will aim to reply to you as soon as possible!
        </Typography>
      </div>

      <div className="form--container">
        <TextField
          variant="outlined"
          value={name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          label="Name"
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <TextField
          variant="outlined"
          value={email}
          onChange={(e) =>
            setState({
              ...state,
              email: e.target.value,
              errors: { ...errors, email: "" },
            })
          }
          label="Email Address"
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <TextField
          variant="outlined"
          value={details}
          label="Message"
          rows={4}
          fullWidth
          multiline
          onChange={(e) =>
            setState({
              ...state,
              details: e.target.value,
              errors: { ...errors, details: "" },
            })
          }
        />

        {sentError && (
          <p className="form__error-text">
            Could not connect to server, please try again.
          </p>
        )}
        <Button
          color={sentError ? "error" : "primary"}
          size={desktop ? "medium" : "small"}
          style={{
            margin: "10px auto 0",
            fontSize: "18px",
            display: "block",
          }}
          onClick={validateDetails}
        >
          {emailResponse === false && !sentError && (
            <i className="fas fa-spinner fa-spin" />
          )}
          {sentError
            ? "Error!"
            : !emailSend
            ? "Submit"
            : emailResponse
            ? "Sent!"
            : "  Sending..."}
        </Button>
      </div>
    </>
  );
};

export default ContactForm;
