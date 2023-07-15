"use client";

// ** Import React
import { useState, ChangeEvent } from "react";

// ** Import Material
import { Button } from "@material-tailwind/react";

// ** Import Components
import FormWifi from "../form/FormWifi";
import FormPaket from "../form/FormPaket";
import Modal from "../modal/Modal";

// ** Import Other
import { useMutation } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { postMember, postPackage, postWifi } from "@/services/query/post";
import FormMember from "../form/FormMember";
import { idGenerator } from "generate-custom-id";
import moment from "moment";

type Props = {
  title: string;
  title_modal: string;
};

const HeaderPage = (props: Props) => {
  const { title, title_modal } = props;

  const pathname = usePathname();

  // ** Local State
  const [inputWifi, setInputWifi] = useState<{
    name: string;
    provider: string;
    speed: string;
  }>({
    name: "",
    provider: "",
    speed: "",
  });

  const [inputPaket, setInputPaket] = useState<{
    name: string;
    max_user: string;
    wifi: string;
    price: string;
  }>({
    name: "",
    max_user: "",
    wifi: "",
    price: "",
  });

  const [inputMember, setInputMember] = useState<{
    name_user: string;
    package_id: string;
    expired: string;
  }>({
    name_user: "",
    package_id: "",
    expired: "",
  });

  const [modal, setmodal] = useState<boolean>(false);

  // ** Mutation
  const [addWifi, { loading: loadingAddWifi }] = useMutation(postWifi);

  const [addPackage, { loading: loadingAddPackage }] = useMutation(postPackage);

  const [addMember, { loading: loadingAddMember }] = useMutation(postMember);

  const router = useRouter();

  // ** Functionality
  const handleModal = () => setmodal((prev) => !prev);

  const handleInputWifi = (e: ChangeEvent<HTMLInputElement>) => {
    setInputWifi({ ...inputWifi, [e.target.name]: e.target.value });
  };

  const handleInputPaket = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPaket({ ...inputPaket, [e.target.name]: e.target.value });
  };

  const handleInputMember = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMember({ ...inputMember, [e.target.name]: e.target.value });
  };

  const codeGenerator = idGenerator("example", 1, 4, {
    prefix: "Member",
    trace: true,
  });

  const hoursNow = moment().get("hours");

  const setTime = (val: string) => {
    const value = moment()
      .set("hours", hoursNow + Number(val))
      .format("LLL");

    return value;
  };

  // ** Functionality Mutation
  const handleAddWifi = () => {
    addWifi({
      variables: {
        name: inputWifi.name,
        provider: inputWifi.provider,
        speed: Number(inputWifi.speed),
      },
    }).then(() => {
      alert("sukes");

      setmodal(false);

      setInputWifi({ name: "", provider: "", speed: "" });

      router.refresh();
    });
  };

  const handleAddPackage = () => {
    const payload = {
      name: inputPaket.name,
      max_user: Number(inputPaket.max_user),
      price: Number(inputPaket.price),
      wifi_id: Number(inputPaket.wifi),
    };

    addPackage({
      variables: { object: payload },
    }).then(() => {
      alert("sukes");

      setmodal(false);

      setInputPaket({ name: "", max_user: "", price: "", wifi: "" });

      router.refresh();
    });
  };

  const handleAddMember = () => {
    const payload = {
      name_user: inputMember.name_user,
      expired: setTime(inputMember.expired),
      package_id: inputMember.package_id,
      code: codeGenerator,
    };

    addMember({
      variables: { object: payload },
    }).then(() => {
      alert("sukes");

      setmodal(false);

      setInputMember({ expired: "", name_user: "", package_id: "" });

      router.refresh();
    });
  };

  const validateAdd: any =
    (pathname === "/wifi" && handleAddWifi) ||
    (pathname === "/paket" && handleAddPackage) ||
    (pathname === "/member" && handleAddMember);

  return (
    <div className="bg-white py-5 px-7 flex items-center justify-between border-b">
      <h1 className="text-gray-900 text-2xl font-bold">{title}</h1>

      <Button onClick={handleModal}>Tambah Data</Button>

      <Modal
        handle={validateAdd}
        handleModal={handleModal}
        loading={loadingAddWifi || loadingAddPackage || loadingAddMember}
        title={title_modal}
        modal={modal}
      >
        {pathname === "/wifi" && (
          <FormWifi
            onChange={handleInputWifi}
            inputWifi={inputWifi}
            setInputWifi={setInputWifi}
            value={inputWifi}
          />
        )}

        {pathname === "/paket" && (
          <FormPaket
            input={inputPaket}
            setInput={setInputPaket}
            onChange={handleInputPaket}
          />
        )}

        {pathname === "/member" && (
          <FormMember
            input={inputMember}
            setInput={setInputMember}
            onChange={handleInputMember}
          />
        )}
      </Modal>
    </div>
  );
};

export default HeaderPage;
