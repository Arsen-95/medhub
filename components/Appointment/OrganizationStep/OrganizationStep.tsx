import { CloseIcon, Icon } from '@chakra-ui/icons';
import { Box, Container, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ClinicChoice from './ClinicChoice';

const OrganizationStep: FC<any> = ({step, setClinic, setStep}) => {

    return (
        <Box
            transform={[`${step === 2 ? 'translate(0)' : 'translate(-150%)'}`, 'none']}
            opacity={[`${step === 2 ? '1' : '0.3'}`, '1']}
            display={['block', 'block', `${step === 2 ? 'block' : 'none' }`]}
            transition="all 0.7s"
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
                    onClick={() => setStep('')}
                >
                    <Icon as={CloseIcon} />
                </Box>
                <Text 
                    as="h3"
                    color="#313338"
                    fontSize={28}
                    fontWeight="bold"
                    mb={12}
                >
                    Выберите медорганизацию
                </Text>
                <Box
                    h={["70vh", "60vh", "60vh", "auto"]}
                    pr={1}
                    overflowY={['auto', 'auto', 'auto', 'visible']}
                    css={[{
                        '::-webkit-scrollbar-thumb':{
                            background: '#89B8FF',
                            borderRadius: '4px'
                          },
                        '::-webkit-scrollbar': {
                          width: '4px'
                        },
                        '::-webkit-scrollbar-track': {
                          backgroundColor: '#E8E8E9'
                        }
                    }, '']}
                >
                    <ClinicChoice 
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"СП № 15 Алмазарского района"}
                        address={"100077, Ул. Коракамиш-2, 2"}
                        tel={"+998 90 999 99 99"}
                        schedule={"8:00–16:00"}
                    />
                    <ClinicChoice
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"РМО Мирзо-Улугбекского района"}
                        address={"100177, ТТЗ-2"}
                        tel={"+998 71 261 01 02"}
                        schedule={"8:00–20:00"}
                    />
                    <ClinicChoice 
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"СП № 15 Алмазарского района"}
                        address={"100077, Ул. Коракамиш-2, 2"}
                        tel={"+998 90 999 99 99"}
                        schedule={"8:00–16:00"}
                    />
                    <ClinicChoice
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"РМО Мирзо-Улугбекского района"}
                        address={"100177, ТТЗ-2"}
                        tel={"+998 71 261 01 02"}
                        schedule={"8:00–20:00"}
                    />
                    <ClinicChoice 
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"СП № 15 Алмазарского района"}
                        address={"100077, Ул. Коракамиш-2, 2"}
                        tel={"+998 90 999 99 99"}
                        schedule={"8:00–16:00"}
                    />
                    <ClinicChoice
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"РМО Мирзо-Улугбекского района"}
                        address={"100177, ТТЗ-2"}
                        tel={"+998 71 261 01 02"}
                        schedule={"8:00–20:00"}
                    />
                    <ClinicChoice 
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"СП № 15 Алмазарского района"}
                        address={"100077, Ул. Коракамиш-2, 2"}
                        tel={"+998 90 999 99 99"}
                        schedule={"8:00–16:00"}
                    />
                    <ClinicChoice
                        setClinic={setClinic}
                        setStep={setStep}
                        clinic={"РМО Мирзо-Улугбекского района"}
                        address={"100177, ТТЗ-2"}
                        tel={"+998 71 261 01 02"}
                        schedule={"8:00–20:00"}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default OrganizationStep;