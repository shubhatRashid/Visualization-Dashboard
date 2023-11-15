import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Cards from "./Cards"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid, Spacer } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:4000";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider >
      <Navbar />
      <AdminDashboard />
      <Flex justify={"space-around"} >
        <Cards number={data.length} name = "Total Industry Sectors" />
        <Cards number={data.length} name = "Total Topics" />
        <Cards number={data.length} name = "Total Countries" />
        <Cards number={data.length} name = "Total Sources" />
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} gap='1' p="2%">
        <IntensityChart data={data} />
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <RegionChart data={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <TopicsRadarChart data={data} />
        </Box>
      </Flex>
      <Flex m='1%' justifyContent="center" alignItems='center'>
        <PieChart data={data} />
        <RelevanceBubbleChart data={data} />
      </Flex>
      <LikelihoodRadarChart data={data} />
      <CountryChart data={data} />
      <Footer/>
    </ChakraProvider>
  );
};

export default Main;
