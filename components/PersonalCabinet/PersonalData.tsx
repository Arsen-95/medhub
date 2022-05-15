import { Box, Button, Divider, Flex, Image, Progress, Text } from '@chakra-ui/react';
import React from 'react';

const PersonalData = () => {
    return (
        <Box
            boxShadow="0px 4px 14px rgba(49, 51, 56, 0.3)"
            borderRadius="4px 0 0 4px"
            p={"12px 8px"}
            maxW={['auto', '314px', '314px', '408px']}
            minW="300px"
            pb="91px"
        >
            <Box
                boxShadow="0px 4px 6px rgba(103, 106, 117, 0.12)"
                borderRadius="4px"
                pb={6}
            >
                <Flex
                    justifyContent={"left"}
                    alignItems="center"
                    mb={3}
                >
                    <Box
                        borderRadius="50%"
                        overflow='hidden'
                        h={["64px", "80px", "100px", "128px"]}
                        w={["64px", "80px", "100px", "128px"]}
                        mr="3"
                    >
                        <Image  src='Avatar.png' alt='avatar'/>
                    </Box>
                    <Box>
                        <Text
                            fontWeight="bold"
                            fontSize={["16px", "18px", "20px", "22px", "24px"]}
                            whiteSpace="pre-wrap"
                        >
                            {`Громова \nАлександра \nКонстантиновна`}
                        </Text>
                        <Box
                            color="#676A75"
                            fontSize="12px"
                        >
                            20 лет, 01.10.2002
                        </Box>
                    </Box>
                </Flex>
                <Divider mb={3}/>
                <Box
                    px={4} 
                    fontSize={['14px', '14px', '14px', '16px']}  
                >
                    <Flex
                        justifyContent="space-between"
                    >
                        <Box>
                            ID
                        </Box>
                        <Box
                            fontWeight="bold"
                        >
                            AA 1234567
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent="space-between"
                    >
                        <Box>
                            Баланс
                        </Box>
                        <Box
                            fontWeight="bold"
                        >
                            500 сум
                        </Box>
                    </Flex>
                    <Flex
                        justifyContent="space-between"
                    >
                        <Box>
                            Номер телефона
                        </Box>
                        <Box
                            fontWeight="bold"
                        >
                            +998 90 123 45 67
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box
                boxShadow="0px 4px 6px rgba(103, 106, 117, 0.12)"
                borderRadius="4px"
                display="flex"
                p={"24px 18px 12px 8px"}
                alignItems="flex-start"
                mb="3"
            >
                <Box
                    mr={3}
                    minH="60px"
                    minW="60px"
                >
                    <Image 
                        src='AchievementBg.svg'
                        alt="level"
                        w="100%"
                        h="100%"
                    />
                </Box>
                <Box>
                    <Box
                        background={"url(info.svg) no-repeat right"}
                        fontSize={['14, 16', '16', '18', '20']}
                        fontWeight="bold"
                    >
                        Ваш уровень: Активист
                    </Box>
                    <Box
                        fontSize={['12', '12', '12', '14', '14']}
                        mb="3"
                    >
                        Вы своевременно наблюдаетесь у врачей и следите за своим здоровьем
                        </Box>
                    <Flex
                        justifyContent="space-between"
                    >
                        <Box>
                            10 860
                        </Box>
                        <Box>
                            15 000
                        </Box>
                    </Flex>
                    <Progress 
                        value={10860 / 15000 * 100}
                        mb="3"
                    />
                    <Text
                        whiteSpace="pre-wrap"
                        color="#8D8E90"
                        fontSize={12}
                    >
                        {`До следующего уровня 4140 баллов \nДля этого пройдите опрос и заполните профиль`}
                    </Text>
                </Box>
            </Box>
            <Button
                mb={3}
                w="100%"
                bgColor="#D0E3FF"
                color="#1372FF"
            >
                Редактировать профиль
            </Button>
            <Button
                color="#1372FF"
                w="100%"
                border="2px solid #1372FF"
                bgColor="#FFF"
            >
                Пополнить баланс
            </Button>
        </Box>
    );
};

export default PersonalData;