import { Box, Button, ButtonGroup, Divider, Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import AvailableDate from './AvailableDate';
import Slots from './Slots';

const TimeSlots: FC<any> = ({doctorName}) => {
    return (
        <>
            {doctorName ? 
            <Box
                transition="all 1s"
                p={"24px 52px 24px 24px"}
                backgroundColor="#FFF"
                borderRadius={4}
                w="100%"
            >
            <Box
                mb={'25px'}
                display="flex"
                alignItems="center"
            >
                <Box
                    h={16}
                    w={16}
                    borderRadius="50%"
                    overflow='hidden'
                >
                    <Image src='DoctorPicture.png' alt="Picture of the doctor"/>
                </Box>
                <Box
                    pl='10px'
                    fontSize={20}
                    fontWeight="bold"
                >
                    {doctorName}
                </Box>
            </Box>
            <Divider mb="6" />
            <ButtonGroup 
                isAttached
                variant='outline'
                mb={4}
            >
                <AvailableDate
                    date={'12 января'}
                    hours={'08:00-17:00'}
                />
                <AvailableDate
                    date={'13 января'}
                    hours={'14:00-17:00'}
                />
            </ButtonGroup>
            <Slots/>
            <Divider mb={6}/>
            <Flex
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>*Вы собираетесь назначить приём на 12 января</Box>
                <Button
                    background='#1372FF'
                    color="white"
                    borderRadius={4}
                    fontSize="18"
                    fontWeight="normal"
                    lineHeight="24px"
                    w="182px"
                    h="48px"
                >
                    Записаться
                </Button>
            </Flex>
        </Box> 
            :
        <Box
            display={[`${doctorName ? 'block' : 'none'}`, 'flex' ]}
            justifyContent={"center"}
            alignItems="center"
            w="100%"
            color="#8D8E90"
        >
            Выберите врача из списка слева, затем день и время приема
        </Box>
        }
        </>
        
    );
};

export default TimeSlots;