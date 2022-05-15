import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

const Slot: FC<any> = ({time, setSlot, slot}) => {
    return (
        <Box
            p="8.5px 17px"
            borderRadius={4}
            fontSize="12px"
            lineHeight="15px"
            cursor="pointer"
            onClick={() => setSlot(time)}
            background={slot === time ? "#1372FF" : '#E8E8E9'}
            color={slot === time ? "#FFF" : "#212225"}
        >
            {time}
        </Box>
    );
};

export default Slot;