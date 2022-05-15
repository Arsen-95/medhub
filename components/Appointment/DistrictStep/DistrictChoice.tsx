import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const DistrictChoice: FC<any> = ({district, setDistrict, setStep, setClinic, setSpecialization}) => {
    return (
        <Box
            boxShadow="0px 4px 6px rgba(103, 106, 117, 0.12)"
            cursor={"pointer"}
            _hover={{
                bgColor: "#1372FF",
                color: '#FFF',
            }}
            onClick={() => {
                setDistrict(district); 
                setStep((step: number) => step + 1);
                setClinic('')
                setSpecialization('')
            }}
            p={6}
            _notLast={{mb: "6"}}
            borderRadius="4px"
            background="#FFFFFF"
        >
            <Text 
                as="h4"
                fontSize={["20px", "21px", "22px", "23px", "24px"]}
                fontWeight="bold"
            >
                {district}
            </Text>
        </Box>
    );
};

export default DistrictChoice;