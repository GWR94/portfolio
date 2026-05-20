import { AnimatePresence } from "framer-motion";
import { Snackbar } from "@shared/index";
import { useContactForm } from "../hooks/useContactForm";
import CollabCTA from "./CollabCTA";
import ContactFormFields from "./ContactFormFields";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const {
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
  } = useContactForm();

  return (
    <section className="py-16">
      <AnimatePresence>
        {snackbar && (
          <Snackbar
            message={snackbar.message}
            variant={snackbar.variant}
            onClose={dismissSnackbar}
          />
        )}
      </AnimatePresence>

      <CollabCTA />

      <form
        className="mx-auto max-w-2xl"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          validateAndSubmit();
        }}
      >
        <ContactFormFields
          fields={fields}
          errors={errors}
          nameRef={nameRef}
          emailRef={emailRef}
          detailsRef={detailsRef}
          onFieldChange={updateField}
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </section>
  );
};

export default ContactForm;
