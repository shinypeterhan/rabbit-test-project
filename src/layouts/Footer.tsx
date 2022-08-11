import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bg="black"
      w="100%"
      p={4}
      color="white"
      height={"135px"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
    >
      <Box>
        <Text align={"center"} fontSize={"24px"} fontWeight={"bold"}>
          &copy;&nbsp;{new Date().getFullYear()}&nbsp;TALLYSIGHT INC.RESERVED
        </Text>
        <Text align={"center"} color={"gray"} fontSize={"16px"}>
          If you or someone you know has a gambling problem and wants help, call
          1-800-Gambler. You must be 21 years or older to place a bet.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
