import React from "react";
import Modal from "antd/lib/modal";
import "antd/dist/antd.css";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ModalWindow = (props: Props) => {
  const { visible, onClose } = props;

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      destroyOnClose
      forceRender
      onCancel={onClose}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ModalWindow;
