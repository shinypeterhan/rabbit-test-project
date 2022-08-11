import * as React from "react";
import { ChakraProvider, theme, Box } from "@chakra-ui/react";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import OfferList from "./containers/OfferList";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Box minH={"50px"} />
    <OfferList />
    <Footer />
  </ChakraProvider>
);
