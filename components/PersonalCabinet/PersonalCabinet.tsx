import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import PersonalAppointments from './PersonalAppointments';
import PersonalData from './PersonalData';

const PersonalCabinet = () => {
    return (
        <Box
            mt="6"
            mb="107px"
        >
            <Box
                mb="33px"
            >
                Личный кабинет
            </Box>
            <Flex
                bgColor="#FFF"
                borderRadius={4}
                boxShadow="0px 4px 6px rgba(103, 106, 117, 0.12)"
            >
                <PersonalData/>
                <PersonalAppointments/>
            </Flex>
        </Box>
    );
};

export default PersonalCabinet;