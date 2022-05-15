import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const StatisticsItem = ({quantity, title, content}) => {
    return (
        <Box 
            _notLast={{mb: '40px'}}
            maxW={400}
        >
            <Box
                fontSize={[80, 85, 90, 95, 100]}
                lineHeight={'80px'}
                color={'#313338'}
                letterSpacing={'-0.04em'}
                opacity={'0.2'}
                fontWeight={'bold'}
                mb={[3, 3.5, 4, 5, 6]}
            >
                {quantity}
            </Box>
            <Heading as="h2"
                color={'#313338'}
                fontSize={[20, 23, 26, 29, 32]}
                lineHeight={'26px'}
                mb={[3, 3.5, 4, 5, 6]}
            >
                {title}
            </Heading>
            <Text
                maxW={350}
                color={'#8D8E90'}
                letterSpacing={'-0.0036em'}
                lineHeight={5}
                fontSize={[16, 17, 18, 19, 20]}
            >
                {content}    
            </Text>
        </Box>
    );
};

export default StatisticsItem;