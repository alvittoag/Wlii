"use client";

// ** Import React
import { ChangeEvent, useState } from "react";

// ** Import Material
import { Button, Typography } from "@material-tailwind/react";

// ** Import Components
import FormPaket from "@/components/form/FormPaket";
import Modal from "@/components/modal/Modal";

// ** Import Other
import { useRouter } from "next/navigation";
import { DeletePackage } from "@/services/query/delete";
import { PutPackage } from "@/services/query/put";
import { useMutation } from "@apollo/client";
import { IPackage } from "@/schema/Package";

const RowPaket = ({ data }: { data: IPackage }) => {
  // ** Local State
  const [input, setInput] = useState<{
    name: string;
    max_user: string;
    wifi: string;
    price: string;
  }>({
    name: data.name,
    max_user: data.max_user.toString(),
    wifi: data.wifi_selected.id.toString(),
    price: data.price.toString(),
  });

  const [modal, setModal] = useState(false);

  // ** Mutation
  const [deletePackage, { loading }] = useMutation(DeletePackage);

  const [updatePackage, { loading: loadingUpdate }] = useMutation(PutPackage);

  const router = useRouter();

  // ** Functionality
  const handleModal = () => setModal((prev) => !prev);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // ** Functionality Mutation
  const handleDelete = () => {
    deletePackage({
      variables: {
        id: data.id,
      },
    }).then(() => {
      alert("Delete Sukses");

      router.refresh();
    });
  };

  const handleEdit = () => {
    const payload = {
      name: input.name,
      max_user: Number(input.max_user),
      price: Number(input.price),
      wifi_id: Number(input.wifi),
    };

    updatePackage({
      variables: {
        id: data.id,
        setUpdatePackage: payload,
      },
    }).then(() => {
      alert("Sukes");

      setModal(false);

      router.refresh();
    });
  };

  return (
    <>
      <tr className="even:bg-blue-gray-50/50 hover:bg-gray-200 hover:text-white">
        <td className="p-4 py-7">
          <Typography variant="small" color="blue-gray" className="text-[15px]">
            {data.name}
          </Typography>
        </td>
        <td className="p-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[15px] "
          >
            {data.wifi_selected === null && (
              <h1 className="text-red-600">! Wifi Not Found</h1>
            )}
            {data.wifi_selected?.provider} | {data.wifi_selected?.speed} Mbps
          </Typography>
        </td>

        <td className="p-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-[15px] ml-6"
          >
            {data.max_user} User
          </Typography>
        </td>

        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="text-[15px]">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              maximumSignificantDigits: 10,
              currency: "IDR",
            }).format(data.price)}
          </Typography>
        </td>
        <td className="space-x-3 flex justify-center items-center py-5">
          <Button size="sm" onClick={handleModal}>
            Edit
          </Button>

          <Button
            disabled={loading}
            onClick={handleDelete}
            variant="outlined"
            size="sm"
            color="red"
          >
            Hapus
          </Button>
        </td>
      </tr>

      <Modal
        handleModal={handleModal}
        modal={modal}
        title="Edit Data Paket"
        handle={handleEdit}
        isEdit
        loading={loadingUpdate}
      >
        <FormPaket input={input} onChange={handleInput} setInput={setInput} />
      </Modal>
    </>
  );
};

export default RowPaket;
