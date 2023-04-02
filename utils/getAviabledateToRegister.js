import { MINIMUM_REGISTRATION_AGE } from "./constant";

export const getMinimumRegistrationAge = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - MINIMUM_REGISTRATION_AGE);
  return date;
};
