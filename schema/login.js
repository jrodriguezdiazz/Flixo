import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("An username is required"),
  password: Yup.string().required("A password is required"),
});
