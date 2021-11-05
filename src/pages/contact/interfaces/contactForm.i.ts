export interface FormState {
  name: string;
  email: string;
  details: string;
  emailSend: boolean;
  emailResponse: boolean;
  errors: {
    [key: string]: string;
  };
  sentError: boolean;
}
