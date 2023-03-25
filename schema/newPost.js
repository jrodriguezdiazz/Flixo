import * as Yup from "yup";

export const uploadPostSchema = Yup.object().shape({
  imageURL: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character"),
});
