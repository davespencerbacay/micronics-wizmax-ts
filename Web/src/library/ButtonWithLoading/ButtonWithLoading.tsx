import classNames from "classnames";
import { useIntl } from "i18n/intl";
import { Button as ReactStrapButton, ButtonProps } from "reactstrap";
import "./ButtonWithLoading.scss";

interface IButtonWithLoading extends ButtonProps {
  isLoading: boolean;
}
const ButtonWithLoading: React.FC<IButtonWithLoading> = (props) => {
  const LOCALIZATION = {
    SEND: useIntl("global.send"),
  };

  const buttonClassnames = classNames("button", {
    "button-loading": props.isLoading,
  });

  return (
    <ReactStrapButton
      type={props.type}
      disabled={props.disabled}
      className={buttonClassnames}
    >
      {LOCALIZATION.SEND}
    </ReactStrapButton>
  );
};

export default ButtonWithLoading;
