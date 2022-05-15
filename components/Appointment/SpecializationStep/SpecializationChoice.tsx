import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const SpecializationChoice: FC<any> = ({specialization, setSpecialization, setStep, available}) => {
    return (
        <Box
            boxShadow="0px 4px 6px rgba(103, 106, 117, 0.12)"
            cursor={"pointer"}
            _hover={{
                bgColor: "#1372FF",
                color: '#FFF',
            }}
            p={6}
            _notLast={{mb: "6"}}
            borderRadius="4px"
            background="#FFFFFF"
            onClick={() => {
                setSpecialization(specialization);
                setStep((step: number) => step += 1)
            }}
        >
            <Text
                as="h4"
                fontSize={["20px", "22px", "24px", "26px", "28px"]}
                fontWeight="bold"
            >
                {specialization}
            </Text>
            <Box>
                {`Доступно: ${available} талонов`}
            </Box>
        </Box>
    );
};

export default SpecializationChoice;