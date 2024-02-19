import React from "react";
import { Box, Text, VStack, Container } from "@chakra-ui/react";

// Dummy data simulating timestamps paired with strings
const transcriptData = [
  {
    time: "0:23",
    speaker: "John",
    text: "It's great to see you both. I've had a super productive week and I'm super excited for the long weekend. I'll be heading out to go camping with my family for a couple of days, and we're planning to fo kayaking. What are you planning to do?",
  },
  {
    time: "2:58",
    speaker: "Sarah",
    text: "Nothing quite as exciting as you (laugh). I don’t really have anything planned. I’ve been so busy that I’m taking this weekend to rest.",
  },
  {
    time: "3:41",
    speaker: "",
    text: "I am excited to get some time to myself though! It’s been a while since I’ve had a calm weekend in.",
  },
  {
    time: "4:14",
    speaker: "John",
    text: "I’m sure that’s needed. How have things been going on the work side of things? I know we have a few important deadlines coming up soon with major clients so i’d like to check in on progress.",
  },
  {
    time: "5:56",
    speaker: "Jane",
    text: "Unfortunately I’ve run into more bugs than I’ve imagined and I think I’m going to need to push my deadline out by two weeks.",
  },
  {
    time: "6:20",
    speaker: "",
    text: "This may mean we won’t be able to have my features to the clients before the holidays, but we can realistically have it ready by the new year. Do you think that...",
  },
];

export default function TranscriptComponent() {
  return (
    <Container maxW="container.md" p={4}>
      <VStack
        spacing={4}
        align="stretch"
        maxHeight="500px" // Example max height
        overflowY="scroll" // Add scroll on Y axis if content overflows
        sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
            borderRadius: "8px",
          },
        }}
      >
        {transcriptData.map((entry, index) => (
          <Box
            key={index}
            bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
            p={4}
            borderRadius="lg"
          >
            <Text fontSize="sm" color="white" fontWeight="bold">
              {entry.time} [{entry.speaker}]
            </Text>
            <Text fontSize="md" color="white" fontWeight="regular" mt={2}>
              {entry.text}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
