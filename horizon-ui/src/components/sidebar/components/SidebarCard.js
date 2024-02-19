import {
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import logoWhite from "assets/img/layout/logoWhite.png";
import React, { useState, useRef } from "react";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const borderColor = useColorModeValue("white", "navy.800");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
  };

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="30px"
      position="relative"
    >
      <Flex
        border="5px solid"
        borderColor={borderColor}
        bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
        borderRadius="50%"
        w="94px"
        h="94px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)" // Adjusted for proper centering
      >
        <Image src={logoWhite} w="40px" h="40px" />
      </Flex>
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        px="15px"
        pt="75px" // Adjusted padding to account for absolute positioning of logo
      >
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color="white"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          px="10px"
          mt="10px"
        >
          Drop Audio File
        </Text>
        {selectedFile ? (
          <Box
            mt="4"
            p="4" // Increased padding from 2 to 4
            px="6" // Added horizontal padding
            bg="whiteAlpha.500"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="full"
          >
            <Text fontSize="14px" color={"white"} fontWeight="500" isTruncated>
              {selectedFile.name}
            </Text>
            <CloseButton color="white" onClick={removeSelectedFile} />
          </Box>
        ) : (
          <Text
            fontSize="14px"
            color={"white"}
            fontWeight="500"
            px="10px"
            mb="6px"
            textAlign="center"
          >
            Drop your audio file here for emotional analysis with Valence!
          </Text>
        )}
      </Flex>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="audio/*"
      />
      <Button
        onClick={handleButtonClick}
        bg="whiteAlpha.300"
        _hover={{ bg: "whiteAlpha.200" }}
        _active={{ bg: "whiteAlpha.100" }}
        mb={{ sm: "16px", xl: "24px" }}
        color={"white"}
        fontWeight="regular"
        fontSize="sm"
        minW="185px"
        mx="auto"
      >
        {selectedFile ? "Emotionally Analyze" : "Select Audio File"}
      </Button>
    </Flex>
  );
}
