import { Box, Container, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import AuthorizationModal from "../AuthorizationModal";
import MenuItem from "./MenuItem";

type Props = {
  menu: boolean;
};

const BurgerMenu: FC<Props> = ({ menu }) => {
  return (
    <Box
      padding={"70px 0 40px 0"}
      pos={"fixed"}
      zIndex={1000}
      left="0"
      w={"100%"}
      h={"100vh"}
      opacity={menu ? "1" : "0"}
      visibility={menu ? "visible" : "hidden"}
      bgColor={"#fff"}
      transition={"all 0.35s"}
      transform={menu ? "translateX(0)" : "translateX(100%)"}
      overflowY={"scroll"}
    >
      <Container maxW={"450px"}>
        <Flex justifyContent={"center"} flexDirection={"column"} gap={3}>
          <Box display={"flex"} gap={3}>
            <MenuItem href={"#"}>Все сервисы</MenuItem>
            <MenuItem href={"#"}>Новости</MenuItem>
          </Box>
          <Box gap={3} display={"flex"} mb={10}>
            <MenuItem href={"/appointment"}>Запись на приём</MenuItem>
            <MenuItem href={"#"}>Служба поддержки</MenuItem>
          </Box>
          <Box textAlign={"center"} mb={10}>
            <NextLink href={"/ru"} passHref>
              <Link
                background={"url(/Lang.svg) 15% 50% no-repeat"}
                display={"inline-flex"}
                textAlign={"center"}
                justifyContent={"center"}
                border={"1px solid #C4C4C4"}
                borderRadius={24}
                padding={"11px 12px 11px 42px"}
              >
                Рус
              </Link>
            </NextLink>
          </Box>
          <Box
            bgColor={"#1372FF"}
            width={"100%"}
            h={12}
            textAlign={"center"}
            borderRadius={4}
          >
            <AuthorizationModal />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default BurgerMenu;
