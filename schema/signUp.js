import * as Yup from "yup";
import { checkIfFieldValueExistsInUsersCollection } from "../firebase";
import { PHONE_REGEX } from "../utils/constant";

export const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters")
    .test(
      "unique-username",
      "Username is already taken",
      async function (value) {
        const isAvailable = await checkIfFieldValueExistsInUsersCollection(
          "username",
          value
        );
        return isAvailable;
      }
    ),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  firstName: Yup.string()
    .required("First name is required")
    .max(50, "First name must be at most 50 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .max(50, "Last name must be at most 50 characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .test("unique-email", "Email is already taken", async function (value) {
      const isAvailable = await checkIfFieldValueExistsInUsersCollection(
        "email",
        value
      );
      console.log({ isAvailable });
      return isAvailable;
    }),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(PHONE_REGEX, "Invalid phone number")
    .test(
      "unique-phone-number",
      "Phone number is already taken",
      async function (value) {
        const isAvailable = await checkIfFieldValueExistsInUsersCollection(
          "phoneNumber",
          value
        );
        return isAvailable;
      }
    ),
  birthday: Yup.date()
    .required("Birthday is required")
    .max(new Date(), "Invalid birthday"),
});
