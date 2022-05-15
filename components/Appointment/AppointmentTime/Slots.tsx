import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Slot from './Slot';

const Slots = () => {
    const [slot, setSlot] = useState('')
    return (
        <Flex
            flexWrap="wrap"
            gap={1}
            mb="10"
        >
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="8:00"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="8:12"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="8:24"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="8:36"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="8:48"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="9:00"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="9:12"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="9:24"
            />
            <Slot 
                slot={slot}
                setSlot={setSlot}
                time="9:36"
            />

        </Flex>
    );
};

export default Slots;