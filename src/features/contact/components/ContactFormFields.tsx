import type { RefObject } from "react";
import FormField, { INPUT_CLASS } from "./FormField";
import type { FieldKey, FormErrors, FormFields } from "../types/contactForm";

interface ContactFormFieldsProps {
  fields: FormFields;
  errors: FormErrors;
  nameRef: RefObject<HTMLInputElement | null>;
  emailRef: RefObject<HTMLInputElement | null>;
  detailsRef: RefObject<HTMLTextAreaElement | null>;
  onFieldChange: (key: FieldKey, value: string) => void;
}

const ContactFormFields = ({
  fields,
  errors,
  nameRef,
  emailRef,
  detailsRef,
  onFieldChange,
}: ContactFormFieldsProps) => {
  const { name, email, details } = fields;

  return (
    <>
      <FormField id="contact-name" label="Name" error={errors.name}>
        <input
          ref={nameRef}
          id="contact-name"
          name="name"
          value={name}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          onChange={(e) => onFieldChange("name", e.target.value)}
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="contact-email" label="Email Address" error={errors.email}>
        <input
          ref={emailRef}
          id="contact-email"
          name="email"
          type="email"
          value={email}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          onChange={(e) => onFieldChange("email", e.target.value)}
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="contact-message" label="Message" error={errors.details}>
        <textarea
          ref={detailsRef}
          id="contact-message"
          name="message"
          value={details}
          rows={5}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "contact-message-error" : undefined}
          onChange={(e) => onFieldChange("details", e.target.value)}
          className={`${INPUT_CLASS} resize-y`}
        />
      </FormField>
    </>
  );
};

export default ContactFormFields;
