import { ArrowBackIcon, CloseIcon, Icon } from '@chakra-ui/icons';
import { Box, Container, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import DoctorsList from './DoctorsList';
import TimeSlots from './TimeSlots';

const AppointmentTime: FC<any> = ({setAppointmentTime, setStep, step}) => {

    const [choosenDoctor, setChoosenDoctor] = useState('')

    return (
        <Box
            transform={[`${step === 4 ? 'translate(0)' : 'translate(-150%)'}`, 'none']}
            opacity={[`${step === 4 ? '1' : '0.3'}`, '1']}
            display={['block', 'block', `${step === 4 ? 'block' : 'none' }`]}
            transition="all 1s"
            w="100%"
            position={["fixed", "static"]}
            top="16"
            zIndex={10}
            pb={100}
            bgColor={"#FBFBFD"}
            boxShadow={["0px 4px 14px rgba(49, 51, 56, 0.3)", 'none']}
            borderRadius={["8px 8px 0px 0px", 'none']}
            pt={["14", "0"]}
            h="100%"
        >
            <Container
                pos="relative"
            >
                <Box
                    display={['box', "none"]}
                    pos="absolute"  
                    top="-10"  
                    right="30px"
                >
                    {!choosenDoctor ?
                    <Icon onClick={() => setStep('')} as={CloseIcon} /> :
                    <Icon onClick={() => setChoosenDoctor('')} as={ArrowBackIcon} />
                    }
                </Box>
                <Text 
                    as="h3"
                    color="#313338"
                    fontSize={[28, 30, 32, 36, 42]}
                    fontWeight="bold"
                    mb={[0, 12]}
                >
                    Выберите дату и время приёма
                </Text>
                <Box 
                    display="flex"
                    flexDirection={['column', "row"]}
                    borderRadius={4}
                    bgColor={"#FFF"}
                >
                    <DoctorsList
                        setChoosenDoctor={setChoosenDoctor}
                        choosenDoctor={choosenDoctor} 
                    />
                    <TimeSlots doctorName={choosenDoctor}/>
                </Box>
            </Container>
        </Box>
    );
};

export default AppointmentTime;