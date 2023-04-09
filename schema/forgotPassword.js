import * as Yup from "yup";

export const forgotPassword = Yup.object().shape({
  email: Yup.string().email().required("An username is required"),
});
