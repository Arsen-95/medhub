import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const User = ({mr}) => {
    return (
        <Box 
        display={['block', 'block', 'none', 'none']}
        >
            <Image mr={mr} src='profile.png' alt='profile photo'/>
        </Box>
    );
};

export default User;