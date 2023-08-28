import React from "react";
import { useNavigate } from "react-router";
import ADMIN_ROUTES from "constants/adminRoutes";
import "./Invalid.scss";

interface InvalidProps {
  message: string | JSX.Element;
}

const Invalid: React.FC<InvalidProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="invalid-container">
      <h2 className="bigtext">Oops!</h2>
      <h2>{props.message}</h2>
      <button
        onClick={() => {
          navigate(ADMIN_ROUTES.ADMIN);
        }}
      >
        Go to Log in
      </button>
    </div>
  );
};

export default Invalid;
