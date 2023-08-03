"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("83d0722b-27e8-4e55-9fa9-f4a4efcc2ea4");
  }, []);

  return null;
};
