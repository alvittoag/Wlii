// ** Import Next
import Image from "next/image";

// ** Import React
import React from "react";

// ** Import Components
import SideLogin from "@/components/guest/SideLogin";
import FormLogin from "@/components/guest/FormLogin";

const Auth = async () => {
  return (
    <main className="grid grid-cols-3 items-center px-24">
      <SideLogin />

      <Image
        priority={true}
        src={"/assets/people-ilustration.svg"}
        alt="logo"
        width={280}
        height={280}
      />

      <FormLogin />
    </main>
  );
};

export default Auth;
