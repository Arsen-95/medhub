import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const AuthorizationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        borderRadius={4}
        background={"url(/Login.svg) 80% no-repeat, #1372FF"}
        color={"#fff"}
        variant="outline"
        p={["", "", "10px 44px 10px 13px", "12px 58px 12px 24px"]}
        fontSize={["14", "14", "14", "18"]}
        fontWeight={400}
        h={12}
        minW="134px"
        border={"none"}
      >
        Войти
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent textAlign="center">
          <ModalHeader
            letter-spacing="0.04em"
            fontSize={42}
            line-height="50px"
            color="#313338"
          >
            Авторизация
          </ModalHeader>
          <Box color="#8D8E90">Все ещё нет аккаунта? Зарегистрируйтесь</Box>
          <Box mb={8} color="#8D8E90">
            Это займёт меньше минуты
          </Box>

          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input placeholder="Номер телефона" />
            </FormControl>

            <FormControl mt={4} mb={4}>
              <Input placeholder="Пароль" type={"password"} />
            </FormControl>

            <NextLink href={"#"} passHref>
              <Link color="#1372FF">Забыли пароль?</Link>
            </NextLink>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Войти
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthorizationModal;
