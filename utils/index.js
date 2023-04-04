import {
  MAXIMUM_NUMBER_OF_CHARACTERS_FOR_MESSAGE,
  MINIMUM_REGISTRATION_AGE,
} from "./constant";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now - date;
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffMs / (60 * 1000));
  const diffHours = Math.floor(diffMs / (60 * 60 * 1000));
  const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
  const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));

  if (diffSeconds < 60) {
    return `${diffSeconds}s`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes}m`;
  } else if (diffHours < 24) {
    return `${diffHours}h`;
  } else if (diffDays < 7) {
    return `${diffDays}d`;
  } else {
    return `${diffWeeks}w`;
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
