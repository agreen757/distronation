import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import logo from 'assets/img/DistroNation_BlackRed.png'
import whitelogo from 'assets/img/DistroNation_White.png'
export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");
  let lg = useColorModeValue(logo, whitelogo);
  return (
    <Flex align='center' direction='column'>
      <img style={{marginBottom:'32px',marginTop:'32px'}} width={'205px'} src={lg}></img>
      
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
