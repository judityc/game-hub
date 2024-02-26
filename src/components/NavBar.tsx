import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
