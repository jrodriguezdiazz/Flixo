import { Button } from "../commons/Button";

export const Icon = ({ iconName, name }) => {
  return (
    <Button
      label={name}
      icon={iconName}
    />
  );
};
