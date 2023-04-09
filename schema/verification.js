import * as Yup from "yup";

export const verification = Yup.object().shape({
  code: Yup.string()
    .length(6, "Verification code must be 6 digits")
    .required("Verification code is required"),
});
