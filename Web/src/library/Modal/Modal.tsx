import { useState } from "react";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  ModalProps,
} from "reactstrap";
import "./Modal.scss";

interface DialogModal extends ModalProps {
  title?: string;
  body?: string;
  confirmText?: string;
  cancelText?: string;
  showModal: boolean;
}
const DialogModal: React.FC<DialogModal> = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Modal
      isOpen={modal}
      fade={false}
      toggle={toggle}
      centered={true}
      scrollable={false}
    >
      <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
      <ModalBody>{props.body}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          {props.confirmText}
        </Button>
        <Button color="secondary" onClick={toggle}>
          {props.cancelText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

DialogModal.defaultProps = {
  title: "Unsaved changes",
  body: "There are unsaved changes. Are you sure you want to leave this page?",
  confirmText: "Yes, Didscard Changes",
  cancelText: "No, Stay on Page",
};

export default DialogModal;
