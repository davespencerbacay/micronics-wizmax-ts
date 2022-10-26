import React, { useEffect } from "react";
import { Toast as ToastReactStrap, ToastBody, ToastProps } from "reactstrap";

interface IToast extends ToastProps {
  isVisible?: boolean;
  text?: string;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}
const Toast: React.FC<IToast> = (props) => {
  useEffect(() => {
    if (props.isVisible) {
      setTimeout(() => props.setter(false), 3000);
    }
  }, [props.isVisible]);

  if (!props.isVisible) {
    return <React.Fragment />;
  }

  return (
    <ToastReactStrap className="d-inline-block m-1 toast-message" bg="dark">
      <ToastBody className="text-dark">{props.text}</ToastBody>
    </ToastReactStrap>
  );
};

Toast.defaultProps = {
  isVisible: true,
  text: "Your message has been submitted.",
};

export default Toast;
