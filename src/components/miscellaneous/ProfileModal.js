import { ViewIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        {children ? (
          <span onClick={onOpen}>{children}</span>
        ) : (
          <IconButton
            display={{ base: "flex" }}
            icon={<ViewIcon></ViewIcon>}
            onClick={onOpen}
          ></IconButton>
        )}

        <Modal size={"lg"} isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent h={"410px"}>
            <ModalHeader
              fontSize={"40px"}
              fontFamily={"Work sans"}
              display={"flex"}
              justifyContent={"center"}
            >
              {user.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              display={"flex"}
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              marginBottom={"60px"}
            >
              <Image
                borderRadius={"full"}
                boxSize={"150px"}
                src={user.pic}
                alt={user.name}
              ></Image>
              <Text
                fontSize={{ base: "25px", md: "27px" }}
                fontFamily={"Work sans"}
              >
                Email : {user.email}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default ProfileModal;
