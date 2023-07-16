"use client";

// ** Import React
import { ChangeEvent, useState } from "react";

// ** Import Material
import { Button, Typography } from "@material-tailwind/react";

// ** Import Othter
import { IMember } from "@/schema/Member";
import { useMutation } from "@apollo/client";
import { DeleteMember } from "@/services/query/delete";
import { useRouter } from "next/navigation";
import moment from "moment";

const RowMember = ({ data }: { data: IMember }) => {
  const router = useRouter();

  // ** Validation
  const expired = moment(data.expired).fromNow(true);

  const validateExpired = moment(data.expired).isBefore(
    new Date().toLocaleDateString()
  );

  // ** Mutation
  const [deleteMember, { loading }] = useMutation(DeleteMember);

  // ** Functionality Mutation
  const handleDelete = () => {
    deleteMember({
      variables: {
        id: data.id,
      },
    }).then(() => {
      alert("Delete Sukses");

      router.refresh();
    });
  };

  return (
    <tr className="even:bg-blue-gray-50/50 hover:bg-gray-200 hover:text-white">
      <td className="p-4 py-7">
        <Typography variant="small" color="blue-gray" className="text-[15px]">
          {data.name_user}
        </Typography>
      </td>

      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="text-[15px]">
          {data.package.name}
        </Typography>
      </td>

      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="text-[15px]">
          {validateExpired ? "Sudah Habis" : expired}
        </Typography>
      </td>

      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="text-[15px]">
          {data.code}
        </Typography>
      </td>

      <td className="space-x-3 flex justify-center items-center py-5">
        <Button
          onClick={handleDelete}
          disabled={loading}
          variant="outlined"
          size="sm"
          color="red"
        >
          Hapus
        </Button>
      </td>
    </tr>
  );
};

export default RowMember;
