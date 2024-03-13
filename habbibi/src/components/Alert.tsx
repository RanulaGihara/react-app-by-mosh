import { ReactNode } from "react";

interface alertProps {
  children: ReactNode; // we can pass a text as a child using this && with this ReactNode we can pass HTML elements also
}

const Alert = ({ children }: alertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
