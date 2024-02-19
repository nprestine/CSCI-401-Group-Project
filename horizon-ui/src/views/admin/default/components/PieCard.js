// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  // Define the data and options for the pie chart
  const pieChartData = [46.4, 23.7, 17.5, 10.3, 2.1]; // Values representing the percentage for each emotion
  const pieChartOptions = {
    
    colors: ["#999999", "#FFFF00", "#800080", "#FF69B4",  "#0000FF"], // Colors for each emotion
    labels: ["Neutral", "Happy", "Nervous", "Surprised", "Sad"], // Labels for each emotion
  };

  return (
    <Card p='40px' align='flex-start' direction='column' w='100%' {...rest}>
      <Flex direction='column' w='100%'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Breakdown
        </Text>
        <PieChart
          h='100'
          w='200'
          chartData={pieChartData}
          chartOptions={pieChartOptions}
        />
      </Flex>
    </Card>
  );
}
