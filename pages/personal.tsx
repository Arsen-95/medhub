import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import MainLayout from '../components/MainLayout';
import PersonalCabinet from '../components/PersonalCabinet/PersonalCabinet';

const personal = () => {
    return (
        <MainLayout
            background="#FBFBFD" 
        >
            <Container>
                <PersonalCabinet/>
            </Container>
        </MainLayout>
    );
};

export default personal;