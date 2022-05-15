import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

const NewAppointment = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(
    (district: string) => {
      router.push({ pathname: "/appointment", query: { district } });
    },
    [router]
  );

  return (
    <Box
      as="section"
      mb={[6, 6, 0]}
      order={[2, 2, 1]}
      pt={[0, 0, "100px"]}
      maxW={["", "", 640]}
    >
      <Heading
        as="h1"
        mb={[3, 3.5, 4, 5, 6]}
        fontSize={["32", "34", "34", "45", "54"]}
        lineHeight="1"
        color={" #313338"}
        fontWeight={"bold"}
        fontStyle={"normal"}
        letterSpacing={"-0.04em"}
      >
        Запишитесь на приём в государственную поликлинику
      </Heading>
      <Text
        mb={6}
        color={"#8D8E90"}
        fontSize={[16, 17, 18, 19, 20]}
        fontWeight={"normal"}
      >
        Зарегистрируйтесь и оформите заявку онлайн на приём к специалисту любого
        профиля всего за минуту
      </Text>
      <Menu>
        <MenuButton
          onClick={() => setClicked(!clicked)}
          as={Button}
          w={"100%"}
          rightIcon={!clicked ? <ChevronDownIcon /> : <ChevronUpIcon />}
          bgColor={"#F7F7F7"}
          borderRadius={"8px"}
          color={"#8D8E90"}
          h={"77px"}
          textAlign={"left"}
          maxW={530}
        >
          Выберите район
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleClick("Мирабадский район")}>
            Мирабадский район
          </MenuItem>
          <MenuItem onClick={() => handleClick("Мирзо-Улугбекский район")}>
            Мирзо-Улугбекский район
          </MenuItem>
          <MenuItem onClick={() => handleClick("Чиланзарский район")}>
            Чиланзарский район
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NewAppointment;
