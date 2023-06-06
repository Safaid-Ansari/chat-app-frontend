import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ENDPOINT = "https://chat-application-backend-side.onrender.com";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleClick = () => {
    setShow(!show);
  };
  const submitHandler = async () => {
    if (!email || !password) {
      toast({
        title: "Please Fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        "content-type": "application/json",
      };
      const { data } = await axios.post(
        `${ENDPOINT}/api/user/login`,
        {
          email,
          password,
        },
        config
      );
      toast({
        title: "Login successful ",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Something went wrong ",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <VStack>
      <FormControl id="email" isRequired>
        <FormLabel>E-Mail</FormLabel>
        <Input
          value={email}
          placeholder="Enter your email here"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter password here"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: "15px" }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        colorScheme="red"
        width={"100%"}
        style={{ marginTop: "15px" }}
        onClick={() => {
          setEmail("safaidansari07@gmail.com");
          setPassword("12345");
        }}
        isLoading={loading}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
