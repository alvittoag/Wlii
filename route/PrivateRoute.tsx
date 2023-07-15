"use client";

// ** Import React
import React from "react";

// ** Import Next
import { useRouter } from "next/navigation";

// ** Import Utils
import { ValidateToken } from "@/utils/validate-token";

type Props = {
  children: React.ReactNode;
  page: string;
  redirect: string;
};

const PrivateRoute = (props: Props) => {
  const { children, page, redirect } = props;

  const router = useRouter();

  React.useEffect(() => {
    const validate = page === "user" ? !ValidateToken() : ValidateToken();

    if (validate) router.push(redirect);
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
