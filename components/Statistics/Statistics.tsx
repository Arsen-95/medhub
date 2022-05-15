import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import StatisticsItem from "./StatisticsItem";

const Statistics = () => {
  return (
    <Box as="section" bgColor={"#FBFBFD"} pb={"90px"}>
      <Container>
        <Flex
          flexDirection={["column", "row", "row", "row", "row"]}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <StatisticsItem
            quantity={"2 млн"}
            title={"Активных пациентов"}
            content={
              "Более 2 млн людей уже пользуются нашей системой и назначают приёмы в онлайн режиме в любое время суток"
            }
          />
          <StatisticsItem
            quantity={"1231"}
            title={"Поликлиника города"}
            content={
              "В скором времени мы будем доступны во всех регионах Узбекистана"
            }
          />
          <StatisticsItem
            quantity={"421 546"}
            title={"Зарегистрированных приемов"}
            content={
              "Уже почти полмиллиона людей проявили свою благодарность нам в виде отзыва"
            }
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Statistics;
