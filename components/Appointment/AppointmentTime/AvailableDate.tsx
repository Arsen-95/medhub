import { background, Box, Button } from '@chakra-ui/react';
import React, { FC } from 'react';

const AvailableDate: FC<any> = ({date, hours}) => {
    return (
        <Box>
            <Button 
                display="block"
                w='85'
                h="45"
                colorScheme='blue'
            >
                <Box>
                    <Box>{date}</Box>
                    <Box>{hours}</Box>
                </Box>
            </Button>
        </Box>
    );
};

export default AvailableDate;