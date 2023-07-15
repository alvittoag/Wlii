"use client";

// ** Import React
import React from "react";

// ** Import Recoil
import { RecoilRoot } from "recoil";
import { ApolloWrapper } from "./ApolloWrapper";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloWrapper>
      <RecoilRoot>{children}</RecoilRoot>;
    </ApolloWrapper>
  );
};

export default Provider;
