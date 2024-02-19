import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";
import valenceVibrationsLogo from "assets/img/layout/valenceVibrationsLogo.png";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      <Image src={valenceVibrationsLogo} w="175px" h="50px" />
      <HSeparator mb="40px" />
    </Flex>
  );
}

export default SidebarBrand;
