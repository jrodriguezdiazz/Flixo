import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});
