import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import MyAppointments from './MyAppointments';

const PersonalAppointments = () => {

    const [select, setSelect] = useState('')

    return (
        <Box
            p="6"
            w={"100%"}
        >
            <Box
                fontSize={['20', '24', '26', '30', '32']}
                fontWeight="bold"
                mb="6"
            >
                Мои приёмы
            </Box>
            <Flex
                justifyContent="space-between"
            >
                <ButtonGroup 
                    mb={3}
                    size='sm' 
                    isAttached variant='outline'
                >
                    <Button 
                        w="90px"
                        h="48px"
                        mr='-px'
                        borderColor="#D0E3FF"
                        onClick={() => setSelect('Активные')}
                        background={select === 'Активные' ? "#D0E3FF" : "#FFF" }
                        color={select === 'Активные' ? "#313338" : "#8D8E90"}
                    >
                        Активные
                        </Button>
                    <Button 
                        w="90px"
                        h="48px"
                        mr='-px'
                        borderColor="#D0E3FF"
                        onClick={() => setSelect('История')}
                        background={select === 'История' ? "#D0E3FF" : "#FFF" }
                        color={select === 'История' ? "#313338" : "#8D8E90"}
                    >
                        История
                    </Button>
                </ButtonGroup>
                <Button
                    h="53px"
                    w="198px"
                    color="#FFF"
                    background={'url(/PlusSmall.svg) 90% no-repeat, #71AAFF'}
                    borderRadius="4px"
                    pr="40px"
                >
                    Создать прием
                </Button>
            </Flex>
            <MyAppointments/>
        </Box>
    );
};

export default PersonalAppointments;