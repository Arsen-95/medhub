import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

const DoctorItem: FC<any> = ({doctorName, talonsAvailable, choosenDoctor, setChoosenDoctor}) => {
    return (
        <Box
            boxShadow='0px 4px 6px rgba(103, 106, 117, 0.12)'
            borderRadius={4}
            p={6}
            cursor="pointer"
            mb={3}
            _hover={{
                background: '#1372FF',
                color: '#FFF'
            }}
            background={choosenDoctor === doctorName ? '#1372FF' : '#FFF'}
            color={choosenDoctor === doctorName ? '#FFF' : 'inherit'}
            onClick={() => setChoosenDoctor(doctorName)}
        >
            <Box
                fontWeight="bold"
                fontSize={20}
                lineHeight="26px"
                mb={2}
            >
                {doctorName}
            </Box>
            <Box>
                {talonsAvailable && `Доступно талонов: ${talonsAvailable}`}
            </Box>
        </Box>
    );
};

export default DoctorItem;