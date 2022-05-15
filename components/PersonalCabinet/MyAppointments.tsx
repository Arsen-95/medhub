import { Box } from '@chakra-ui/react';
import React from 'react';
import MyAppointment from './MyAppointment';

const MyAppointments = () => {
    return (
        <Box>
            <MyAppointment
                status="На рассмотрении"
                date={"12.01.2022 | 12:00"}
                specialization="Офталомолог"
                doctor="Малышева Е.В."
            />
            <MyAppointment
                status="Одобрено"
                date={"12.01.2022 | 12:00"}
                specialization="Невролог"
                doctor="Айболит"
            />
        </Box>
    );
};

export default MyAppointments;