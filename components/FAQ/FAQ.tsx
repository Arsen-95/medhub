import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Container, Text } from "@chakra-ui/react";
import Question from "./Question";

const FAQ = () => {
    return (
        <Box
            p={'45px 0 90px'}
            bgColor={'#FBFBFD'}

        >
            <Container
                maxW={1268}
            >
                <Text as='h6'
                    textAlign={'center'}
                    color={'#313338'}
                    fontSize={32}
                    lineHeight={10}
                    fontWeight={'bold'}
                    mb={10}
                >
                    Часто задаваемые вопросы
                </Text>
                <Accordion allowMultiple>
                    <Question
                        question={'Как отменить прием'}
                        answer={'Нажмите на...'}
                    />
                    <Question
                        question={'Что делать если мне нужна справка?'}
                        answer={'Взять ее'}
                    />
                    <Question
                        question={'Как добавить своих детей в мой аккаунт?'}
                        answer={'Lorem'}
                    />
                    <Question
                        question={'Я заболел, что делать?'}
                        answer={'Не болеть'}
                    />
                    <Question
                        question={'Как зарегистрироваться и назначить приём?'}
                        answer={'Авторизируйтесь....'}
                    />
                </Accordion>
            </Container>
        </Box>
    );
};

export default FAQ;