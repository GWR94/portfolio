import { useCallback, useRef, useState, type RefObject } from "react";
import axios from "axios";
import { isEmail } from "validator";
import {
  emptyErrors,
  emptyFields,
  type FieldKey,
  type FormErrors,
  type FormFields,
  type SnackbarState,
} from "../types/contactForm";

export function useContactForm() {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const [fields, setFields] = useState<FormFields>(emptyFields);
  const [errors, setErrors] = useState<FormErrors>(emptyErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarState | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<
    FieldKey,
    RefObject<HTMLInputElement | HTMLTextAreaElement | null>
  > = {
    name: nameRef,
    email: emailRef,
    details: detailsRef,
  };

  const dismissSnackbar = useCallback(() => setSnackbar(null), []);

  const clearFieldError = (key: FieldKey) => {
    setErrors((prev) => (prev[key] ? { ...prev, [key]: "" } : prev));
  };

  const updateField = (key: FieldKey, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    clearFieldError(key);
  };

  const sendEmail = async (): Promise<void> => {
    const { name, email, details } = fields;
    setIsSubmitting(true);

    try {
      if (!formEndpoint) {
        throw new Error("Missing VITE_FORMSPREE_ENDPOINT");
      }

      const res = await axios.post(
        formEndpoint,
        { name, email, details },
        { headers: { Accept: "application/json" } },
      );

      if (res.status !== 200 && res.status !== 201 && res.status !== 202) {
        throw new Error("Unexpected response status");
      }

      setFields(emptyFields);
      setErrors(emptyErrors);
      setSnackbar({
        message: "Message sent — I'll get back to you soon.",
        variant: "success",
      });
    } catch (err) {
      console.error(err);
      setSnackbar({
        message: "Couldn't send your message. Please try again.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateAndSubmit = (): void => {
    const { name, email, details } = fields;
    const nextErrors: FormErrors = { ...emptyErrors };
    const invalidFields: FieldKey[] = [];

    if (name.length === 0) {
      nextErrors.name = "Please enter your name";
      invalidFields.push("name");
    }
    if (!isEmail(email) || email.length === 0) {
      nextErrors.email = "Please enter a valid email address";
      invalidFields.push("email");
    }
    if (details.length === 0) {
      nextErrors.details = "Please enter a few details";
      invalidFields.push("details");
    }

    if (invalidFields.length > 0) {
      setErrors(nextErrors);
      fieldRefs[invalidFields[0]].current?.focus();
      return;
    }

    setErrors(emptyErrors);
    sendEmail();
  };

  return {
    fields,
    errors,
    isSubmitting,
    snackbar,
    dismissSnackbar,
    updateField,
    validateAndSubmit,
    nameRef,
    emailRef,
    detailsRef,
  };
}
