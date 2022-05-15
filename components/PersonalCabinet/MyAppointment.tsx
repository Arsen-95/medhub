import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type AppointmentProps = {
    status: string,
    date: string,
    specialization: string,
    doctor: string
}

const MyAppointment: FC<AppointmentProps> = ({status, date, specialization, doctor}) => {

    

    return (
        <Box
            boxShadow="0px 4px 6px rgba(103, 106, 117, 0.12)"
            borderRadius="4px"
            p="6"
            _notLast={{
                mb: "10px"
            }}
        >
            <Flex
                alignItems="center"
                mb={3}
            >
                <Box
                    p="4px 8px"
                    background={status === "На рассмотрении" ? "#FFFACC" : status === "Одобрено" ? "#8DDE56" : 'red'}
                    borderRadius="4px"
                    fontSize="12"
                    mr={4}
                    minW="117px"
                    textAlign="center"
                >
                    {status}
                </Box>
                <Box
                    color="#8D8E90"
                >
                    {date}
                </Box>
            </Flex>
            <Box
                mb={2}
                fontWeight="bold"
                fontSize={20}
            >
                {specialization}
            </Box>
            <Box
                color="#8D8E90"
            >
                {doctor}
            </Box>
        </Box>
    );
};

export default MyAppointment;