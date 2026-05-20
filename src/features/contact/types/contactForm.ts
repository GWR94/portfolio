import type { SnackbarVariant } from "@shared/index";

export interface FormFields {
  name: string;
  email: string;
  details: string;
}

export interface FormErrors {
  name: string;
  email: string;
  details: string;
}

export interface SnackbarState {
  message: string;
  variant: SnackbarVariant;
}

export type FieldKey = keyof FormFields;

export const emptyFields: FormFields = { name: "", email: "", details: "" };
export const emptyErrors: FormErrors = { name: "", email: "", details: "" };
