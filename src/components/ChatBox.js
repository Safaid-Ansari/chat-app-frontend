import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../context/chatProvider";
const { selectedChat } = ChatState();

const ChatBox = () => {
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems={"center"}
      flexDir={"column"}
      p={3}
      bg={"white"}
      w={{ base: "100%", md: "68%" }}
      borderRadius={"lg"}
      borderWidth={"1px"}
    >
      Single Chat{" "}
    </Box>
  );
};

export default ChatBox;
