import React, { FC, ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  active: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${active ? "active" : ""}`}
    >
      {children}
    </button>
  );
};
export default Button;
