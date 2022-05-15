import { Box, Button, Container, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import AuthorizationModal from "./AuthorizationModal";
import Burger from "./Burger/Burger";
import BurgerMenu from "./Burger/BurgerMenu";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Box
      as="header"
      pos={"sticky"}
      width={"100%"}
      top={0}
      left={0}
      bgColor={"#fff"}
      zIndex={50}
    >
      <Container>
        <Flex minH={16} justifyContent={"space-between"} alignItems={"center"}>
          <Logo color={"#313338"} />
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            display={["none", "none", "flex"]}
          >
            <NextLink href={"/appointment"} passHref>
              <Link
                display={"block"}
                fontSize={[16, 16, 13, 18, 20]}
                fontWeight={500}
                mr={["", "", 2, 5]}
                color={"#313338"}
                padding={1}
              >
                Запись на прием
              </Link>
            </NextLink>
            <NextLink href={"#"} passHref>
              <Link
                display={"block"}
                fontSize={[16, 16, 13, 18, 20]}
                fontWeight={500}
                mr={["", "", 2, 5]}
                color={"#313338"}
                padding={1}
              >
                Медкарта
              </Link>
            </NextLink>
            <NextLink href={"#"} passHref>
              <Link
                display={"block"}
                fontSize={[16, 16, 13, 18, 20]}
                fontWeight={500}
                mr={["", "", 2, 5]}
                color={"#313338"}
                padding={1}
              >
                Новости
              </Link>
            </NextLink>
            <NextLink href={"#"} passHref>
              <Link
                display={"block"}
                fontSize={[16, 16, 13.5, 18, 20]}
                fontWeight={500}
                mr={["", "", 2, 5]}
                color={"#313338"}
                padding={1}
              >
                Все сервисы
              </Link>
            </NextLink>
          </Flex>
          <Flex alignItems={"center"} display={["none", "none", "flex"]}>
            <NextLink href={"/ru"} passHref>
              <Link
                background={"url(/Lang.svg) 15% 50% no-repeat"}
                display={"inline-flex"}
                textAlign={"center"}
                justifyContent={"center"}
                border={"1px solid #C4C4C4"}
                borderRadius={24}
                padding={["", "", "11px 10px 11px 35px", "11px 12px 11px 42px"]}
                mr={[0, 0, 4, 6]}
                fontSize={["14", "14", "14", "18"]}
              >
                Рус
              </Link>
            </NextLink>
            <AuthorizationModal />
          </Flex>
          <Flex alignItems={"center"} display={["flex", "flex", "none"]}>
            <User mr={3} />
            <Burger menu={menu} setMenu={setMenu} />
          </Flex>
        </Flex>
        <BurgerMenu menu={menu} />
      </Container>
    </Box>
  );
};

export default Header;
