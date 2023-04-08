import moment from "moment";
import {
  MAXIMUM_NUMBER_OF_CHARACTERS_FOR_MESSAGE,
  MINIMUM_REGISTRATION_AGE,
} from "./constant";

export const formatDate = (dateString, format = "LL") => {
  const date = new Date(dateString);
  return moment(date).format(format);
};

export const getRelativeTime = (date) => {
  const now = moment();
  const diff = moment(now).diff(date, "minutes");

  if (diff < 60) {
    return `${diff} minutes ago`;
  } else if (diff < 1440) {
    const hours = Math.floor(diff / 60);
    return `${hours} hours ago`;
  } else if (diff < 10080) {
    const days = Math.floor(diff / 1440);
    return `${days} days ago`;
  } else {
    const weeks = Math.floor(diff / 10080);
    return `${weeks} weeks ago`;
  }
};

export const getMinimumRegistrationAge = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - MINIMUM_REGISTRATION_AGE);
  return date;
};

export const truncateString = (message) => {
  return message.length > MAXIMUM_NUMBER_OF_CHARACTERS_FOR_MESSAGE
    ? `${message.slice(0, MAXIMUM_NUMBER_OF_CHARACTERS_FOR_MESSAGE)}...`
    : message;
};
