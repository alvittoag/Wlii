"use client";

// ** Import React
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// ** Import Material
import { Input, Option, Select } from "@material-tailwind/react";

// ** Import Other
import { useQuery } from "@apollo/client";
import { queryPackage } from "@/services/query/get";
import { IPackage } from "@/schema/Package";
import { times } from "@/constants";

type Props = {
  input: {
    name_user: string;
    package_id: string;
    expired: string;
  };

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  setInput: Dispatch<
    SetStateAction<{
      name_user: string;
      package_id: string;
      expired: string;
    }>
  >;
};

const FormMember = (props: Props) => {
  const { onChange, input, setInput } = props;

  const { data, loading } = useQuery<{ package: IPackage[] | undefined }>(
    queryPackage
  );

  return (
    <>
      {loading ? (
        <p className="flex justify-center items-center h-full py-20">
          Loading...
        </p>
      ) : (
        <>
          <Input
            value={input.name_user}
            name="name_user"
            onChange={onChange}
            label="Nama Pengguna"
          />

          <Select
            onChange={(val) => setInput({ ...input, package_id: val! })}
            value={input.package_id}
            name="package_id"
            label="Pilih Paket"
          >
            {data?.package?.map((pcg, i) => (
              <Option key={i} value={pcg.id.toString()}>
                {pcg.name} | {pcg.wifi_selected.name} | {pcg.max_user} User
              </Option>
            ))}
          </Select>

          <Select
            onChange={(val) => setInput({ ...input, expired: val! })}
            value={input.expired}
            name="expired"
            label="Pilih Batas Waktu"
          >
            {times.map((time, i) => (
              <Option key={i} value={time.value}>
                {time.text}
              </Option>
            ))}
          </Select>
        </>
      )}
    </>
  );
};

export default FormMember;
