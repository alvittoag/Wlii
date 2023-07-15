"use client";

// ** Import React
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// ** Import Material
import { Input, Option, Select } from "@material-tailwind/react";
import { providerItems, speedItems } from "@/constants";

type Props = {
  value: {
    name: string;
    provider: string;
    speed: string;
  };

  inputWifi: {
    name: string;
    provider: string;
    speed: string;
  };

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  setInputWifi: Dispatch<
    SetStateAction<{
      name: string;
      provider: string;
      speed: string;
    }>
  >;
};

const FormWifi = (props: Props) => {
  const { value, onChange, inputWifi, setInputWifi } = props;

  return (
    <>
      <Input
        value={value.name}
        name="name"
        onChange={onChange}
        label="Nama Wifi"
      />

      <Select
        onChange={(val) => setInputWifi({ ...inputWifi, provider: val! })}
        value={value.provider}
        name="provider"
        label="Pilih Provider"
      >
        {providerItems.map((provider) => (
          <Option value={provider.value}>{provider.value}</Option>
        ))}
      </Select>

      <Select
        onChange={(val) => setInputWifi({ ...inputWifi, speed: val! })}
        value={value.speed}
        name="speed"
        label="Pilih Keceipatan"
      >
        {speedItems.map((speed) => (
          <Option value={speed.value}>{speed.text}</Option>
        ))}
      </Select>
    </>
  );
};

export default FormWifi;
