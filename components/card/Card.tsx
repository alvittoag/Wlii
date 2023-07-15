"use client";

// ** Import React
import { ChangeEvent, useState } from "react";

// ** Import Material
import { Button } from "@material-tailwind/react";

// ** Import Components
import Modal from "../modal/Modal";
import FormWifi from "../form/FormWifi";

// ** Import Other
import { IWifi } from "@/schema/Wifi";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { DeleteWifi } from "@/services/query/delete";
import { PutWifi } from "@/services/query/put";

const Card = ({ data }: { data: IWifi }) => {
  // ** Local State
  const [inputWifi, setInputWifi] = useState<{
    name: string;
    provider: string;
    speed: string;
  }>({
    name: data.name,
    provider: data.provider,
    speed: data.speed.toString(),
  });

  const [modal, setModal] = useState(false);

  // ** Mutation
  const [deleteWifi, { loading }] = useMutation(DeleteWifi);

  const [updateWifi, { loading: loadingUpdate }] = useMutation(PutWifi);

  const router = useRouter();

  // ** Functionality
  const handleModal = () => setModal((prev) => !prev);

  const handleInputWifi = (e: ChangeEvent<HTMLInputElement>) => {
    setInputWifi({ ...inputWifi, [e.target.name]: e.target.value });
  };

  // ** Functionality Mutation
  const handleDelete = () => {
    deleteWifi({
      variables: {
        id: data.id,
      },
    }).then(() => {
      alert("Delete Sukses");

      router.refresh();
    });
  };

  const handleEdit = () => {
    updateWifi({
      variables: {
        id: data.id,
        setUpdateWifi: { ...inputWifi },
      },
    }).then(() => {
      alert("Sukes");

      setModal(false);

      router.refresh();
    });
  };

  return (
    <div className="bg-white p-3 border rounded-xl hover:scale-105  duration-500">
      <div className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-700">{data.name}</h1>

        <div className="text-sm space-y-">
          <h5>{data.provider}</h5>
          <h5>{data.speed} Mbps</h5>
        </div>
      </div>

      <div className="flex  items-center justify-between mt-4 border-t pt-3 pb-1">
        <h1 className="text-gray-700">#{data.id}</h1>

        <div className="space-x-3">
          <Button onClick={handleModal} size="sm">
            Edit
          </Button>

          <Button
            onClick={handleDelete}
            size="sm"
            variant="outlined"
            disabled={loading}
            color="red"
          >
            Hapus
          </Button>
        </div>
      </div>

      <Modal
        handle={handleEdit}
        isEdit
        handleModal={handleModal}
        loading={loadingUpdate}
        title="Edit Data Wifi"
        modal={modal}
      >
        <FormWifi
          onChange={handleInputWifi}
          inputWifi={inputWifi}
          setInputWifi={setInputWifi}
          value={inputWifi}
        />
      </Modal>
    </div>
  );
};

export default Card;
