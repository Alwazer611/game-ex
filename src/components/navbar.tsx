import { HStack, Image } from "@chakra-ui/react";
import logo from "..assets/logo.png";
import React from "react";

const navbar = () => {
  return (
    <HStack>
      <Image src={logo}></Image>
    </HStack>
  );
};

export default navbar;
