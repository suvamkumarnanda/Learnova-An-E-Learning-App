import React from "react";
import {
  Flex,
  Box,
  Select,
  Input,
  Button,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavBarDrawer } from "../components/NavBarDrawer";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  function signup() {
    navigate("/signup");
  }

  function home() {
    navigate("/");
  }



  return (
    <Box >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p={4}
        bg="#f5f5f5"
        backgroundColor={"rgba(0,0,0,2)"}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="fixed"
        width="100%"
        zIndex={12}
      >
        <Flex align="center">
          <Box>
            {/* Logo */}
            {/* <img src={image} alt="Logo" width="30%" /> */}
            <Text
              fontSize={30}
              fontWeight="extrabold"
              color="white"
              onClick={home}
              _hover={{ cursor: "pointer" }}
            >
              Learnova
            </Text>
          </Box>
        </Flex>

        {!isMobile ? (
          <Flex>
            <Box >
              {/* Search Bar */}
              <Input
                type="text"
                variant="filled"
                border="1px solid black"
                fontSize='0.7rem'
                m='0 2rem'
                color="white"
                // backgroundColor={"white"}
                placeholder="What do you want to learn?"
                borderRadius="10px 0 0px 10px"
                _placeholder={{ color: "black",letterSpacing:'1px' }}
              />
            </Box>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              bg="grey"
              color="white"
              border="1px white"
              borderRadius="0px 10px 10px 0px"
              _hover={{ background: "#0288D1" }}
            />
          </Flex>
        ) : (
          <Flex align="center">
            <IconButton
              aria-label="Menu"
              icon={<FaBars />}
              bg="black"
              color="black"
              onClick={onOpen}
              fontSize="2xl"
              mr={2}
            />
          </Flex>
        )}

        {isMobile && (
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            color="black"
            borderRadius="7px"
            _hover={{ backgroundColor: "#003e9c", color: "white" }}
          />
        )}

        {!isMobile && (
          <Flex align="center">
            {/* Links */}
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="#"
              >
                
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="#"
              >
                
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="#"
              >
                
              </Link>
            </Box>
            <Box mr={4}>
              <Link textDecoration="none" color="white" href="/login">
                Login
              </Link>
            </Box>

            {/* Join for Free Button */}
            <Button
              bg="yellowgreen"
              color="black"
              borderRadius="5px"
              _hover={{ bg: "grey" }}
              onClick={signup}
            >
              Join for free
            </Button>
          </Flex>
        )}
      </Flex>
      <NavBarDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default Navbar;
