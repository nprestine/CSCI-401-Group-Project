/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import { Image } from "@chakra-ui/react"
import happyEmote from "assets/img/layout/happyEmote.png"
import nervousEmote from "assets/img/layout/nervousEmote.png"
import surprisedEmote from "assets/img/layout/surprisedEmote.png"
import sadEmote from "assets/img/layout/sadEmote.png"
import neutralEmote from "assets/img/layout/neutralEmote.png"
import angryEmote from "assets/img/layout/angryEmote.png"

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        
        <MiniStatistics
          startContent={
            <IconBox
              w='70px'
              h='56px'
              bg='orange'
              icon={
                <Image src={happyEmote} w="40px" h="40px" />
              }
            />
          }
          name='Happy'
          nameFontSize="3xl"
          nameColor="orange"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='70px'
              h='56px'
              bg='purple'
              icon={
                <Image src={nervousEmote} w="40px" h="40px" />
              }
            />
          }
          name='Nervous'
          nameFontSize="3xl"
          nameColor="purple"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='70px'
              h='56px'
              bg='pink'
              icon={
                <Image src={surprisedEmote} w="40px" h="40px" />
              }
            />
          }
          name='Surprised'
          nameFontSize="3xl"
          nameColor="pink"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='70px'
              h='56px'
              bg='blue'
              icon={
                <Image src={sadEmote} w="40px" h="40px" />
              }
            />
          }
          name='Sad'
          nameFontSize="3xl"
          nameColor="blue"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='70px'
              h='56px'
              bg='gray'
              icon={
                <Image src={neutralEmote} w="40px" h="40px" />
              }
            />
          }
          name='Neutral'
          nameFontSize="3xl"
          nameColor="gray"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='70px'
              h='56px'
              bg='red'
              icon={
                <Image src={angryEmote} w="40px" h="40px" />
              }
            />
          }
          name='Angry'
          nameFontSize="3xl"
          nameColor="red"
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        <PieCard />
      </SimpleGrid>
    </Box>
  );
}
