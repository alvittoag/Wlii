// ** Import React
import React from "react";

// ** Import Elements
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

type Props = {
  modal: boolean;
  title: string;
  loading: boolean;
  handle: () => void;
  handleModal: () => void;
  children: React.ReactNode;
  isEdit?: boolean;
};

const Modal = (props: Props) => {
  const { handle, loading, modal, title, handleModal, children, isEdit } =
    props;

  return (
    <Dialog open={modal} handler={handleModal} className="px-4 py-2">
      <DialogHeader>{title}</DialogHeader>

      <DialogBody className="space-y-8">{children}</DialogBody>

      <DialogFooter className="space-x-5">
        <Button onClick={handleModal} variant="outlined" color="red">
          Batalkan
        </Button>

        <Button onClick={handle} disabled={loading}>
          {loading ? "loading..." : isEdit ? "Edit" : "Tambah"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;
