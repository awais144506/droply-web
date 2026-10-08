import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("is-valid-phone", "Enter a valid phone number", (value) => {
      return value ? isValidPhoneNumber(value) : false;
    }),
  city: yup
    .string()
    .required("City is required"),
});

export type SignupFormData = yup.InferType<typeof signupSchema>;