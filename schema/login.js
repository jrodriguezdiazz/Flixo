import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("An username is required"),
  password: Yup.string().required("A password is required"),
});
