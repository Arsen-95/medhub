import { Box, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const ClinicChoice: FC<any> = ({clinic, address, tel, schedule, setStep, setClinic}) => {
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
                setClinic(clinic);
                setStep((step: number) => step += 1)
            }}
        >
            <Text 
                as="h4"
                fontSize={["20px", "22px", "24px", "26px", "28px"]}
                fontWeight="bold"
            >
                {clinic}
            </Text>
            <Box
                pl={25}
                background={"url(Geolocation.svg) no-repeat"}
                backgroundPosition={"-2px 5px"}
            >
                {address}
            </Box>
            <Box
                pl={25}
                background={"url(Phone.svg) no-repeat"}
                backgroundPosition={"0 7px"}
            >
                <Link href={`tel: ${tel}`} >
                    {tel}
                </Link> 
            </Box>
            <Box
                pl={25}
                background={"url(Clock.svg) no-repeat"}
                backgroundPosition={"0 7px"}
            >
                {schedule}
            </Box>
        </Box>
    );
};

export default ClinicChoice;