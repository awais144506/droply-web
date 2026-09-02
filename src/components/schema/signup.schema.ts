import * as yup from "yup";

export const signupSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,12}$/, "Enter a valid phone number (e.g., 03001234567)")
    .required("Phone number is required"),
  city: yup
    .string()
    .required("City is required"),
  businessType: yup
    .string()
    .oneOf(["WATER", "LPG", "MILK", "OTHER"], "Select a valid business type")
    .required("Business type is required"),
});

export type SignupFormData = yup.InferType<typeof signupSchema>;