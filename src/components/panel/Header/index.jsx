import React from "react";
import Heading from "../../Heading";
import { useSelector } from "react-redux";
import Flex from "../../Flex";
import Box from "../../Box";
import Icon from "../../Icon";

function Header() {
  const user = useSelector((state) => state.user);
  return (
    <header className="col-span-full">
      <Box
        padding="sm"
        bgColor="primary_dark"
        className="border-b-4 border-slate-700 px-3"
      >
        <Flex justify="between" align="center">
          <Flex align="center" gap={3}>
            <Icon icon="fi fi-rr-apps" size="xxl" />
            <Heading type="h1">Trello</Heading>
          </Flex>

          <Flex direction="col" gap={0}>
            <Heading type="p">{user.name}</Heading>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
