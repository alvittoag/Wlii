"use client";

// ** Import React
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// ** Import Material
import { Input, Option, Select } from "@material-tailwind/react";

// ** Import Other
import { useQuery } from "@apollo/client";
import { queryWifi } from "@/services/query/get";
import { IWifi } from "@/schema/Wifi";
import { maxUser } from "@/constants";

type Props = {
  input: {
    name: string;
    max_user: string;
    wifi: string;
    price: string;
  };

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  setInput: Dispatch<
    SetStateAction<{
      name: string;
      max_user: string;
      wifi: string;
      price: string;
    }>
  >;
};

const FormPaket = (props: Props) => {
  const { onChange, input, setInput } = props;

  const { data, loading } = useQuery<{ wifi: IWifi[] | undefined }>(queryWifi);

  return (
    <>
      {loading ? (
        <p className="flex justify-center items-center h-full py-20">
          Loading...
        </p>
      ) : (
        <>
          <Input
            value={input.name}
            name="name"
            onChange={onChange}
            label="Nama Paket"
          />

          <Select
            onChange={(val) => setInput({ ...input, max_user: val! })}
            value={input.max_user}
            name="max_user"
            label="Maksimal User"
          >
            {maxUser?.map((user, i) => (
              <Option key={i} value={user}>
                {user} User
              </Option>
            ))}
          </Select>

          <Select
            onChange={(val) => setInput({ ...input, wifi: val! })}
            value={input.wifi}
            name="wifi"
            label="Pilih Wifi"
          >
            {data?.wifi?.map((wifi, i) => (
              <Option key={i} value={wifi.id.toString()}>
                {wifi.name} | {wifi.provider} | {wifi.speed} Mbps
              </Option>
            ))}
          </Select>

          <Input
            value={input.price}
            name="price"
            onChange={onChange}
            label="Harga Paket"
            type="number"
          />
        </>
      )}
    </>
  );
};

export default FormPaket;
