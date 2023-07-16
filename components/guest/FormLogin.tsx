"use client";

// ** Import React
import { ChangeEvent, FormEvent, useState } from "react";

// ** Import Material
import { Input, Button } from "@material-tailwind/react";

// ** Import Icons
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";

// ** Import Other
import { useLazyQuery } from "@apollo/client";
import { IUser } from "@/schema/User";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { validatUser } from "@/services/query/get";

const FormLogin = () => {
  const [input, setinput] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<{ username: boolean; password: boolean }>({
    username: false,
    password: false,
  });

  const [validateUserLogin, { loading }] = useLazyQuery(validatUser);

  const router = useRouter();

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (input.username === "") {
      setError({ ...error, username: true });
    } else if (input.password === "") {
      setError({ ...error, password: true });
    }
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validate();

    validateUserLogin({
      variables: { username: input.username, password: input.password },
    }).then((res) => {
      const {
        data: { users },
      } = res;

      const user: IUser | undefined = users[0];

      if (user === undefined) {
        Swal.fire({
          title: "Gagal Masuk",
          text: "Email Atau Password Salah",
          icon: "error",
        });
      } else {
        localStorage.setItem("token", Math.random().toString());

        Swal.fire({
          title: "Berhasil Masuk",
          text: "Anda Berhasil Masuk",
          icon: "success",
        }).then(() => router.push("/wifi"));
      }
    });
  };

  return (
    <div className=" space-y-8">
      <h1 className="text-center mr-5 font-semibold text-2xl">
        Silahkan Login
      </h1>

      <form onSubmit={handleLogin} className=" space-y-8">
        <Input
          label="Username"
          error={error.username}
          name="username"
          value={input.username}
          onChange={(e) => [
            handleOnchange(e),
            setError({ ...error, username: false }),
          ]}
          size="lg"
          className="font-sans font-semibold text-[15px]"
          icon={<UserIcon className="w-4 h-4 text-gray-800" />}
        />

        <Input
          label="password"
          error={error.password}
          name="password"
          value={input.password}
          onChange={(e) => [
            handleOnchange(e),
            setError({ ...error, password: false }),
          ]}
          type="password"
          size="lg"
          className="font-sans font-semibold text-[15px]"
          icon={<LockClosedIcon className="w-4 h-4 text-gray-800" />}
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#4461F2] font-body font-semibold"
        >
          {loading ? "Loading..." : "Masuk"}
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
