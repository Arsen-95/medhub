import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import DoctorItem from './DoctorItem';

const DoctorsList: FC<any> = ({choosenDoctor, setChoosenDoctor}) => {
    return (
        <Box 
            display={[`${choosenDoctor ? 'none' : 'block'}`, 'block']}
            p={['none', "0 8px 24px 24px"]}
            minW={['none', "250px", '300px', '460px']}
            pos="relative"
            bgColor="#FFF"
            boxShadow= {["none", '0px 4px 14px rgba(49, 51, 56, 0.3)']}
        >
            <Box
                fontWeight="bold"
                fontSize={20}
                py="24px"
                pos="sticky"
                top="-6"
                bgColor="#FBFBFD"
                left="6"
            >
                Список врачей
            </Box>
            <Box
                maxH={500}
                overflowY="auto"
                pr={3}
                css={{
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
                }}
            >
                <DoctorItem
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Малышева"
                    talonsAvailable="8"
                />
                <DoctorItem 
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Айболит"
                    talonsAvailable="8"
                />
                <DoctorItem
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Глазник"
                    talonsAvailable="8"
                />
                <DoctorItem 
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Бокерия"
                    talonsAvailable="8"
                />
                <DoctorItem
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Пислолетов"
                    talonsAvailable="8"
                />
                <DoctorItem 
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Малышева"
                    talonsAvailable="8"
                />
                <DoctorItem
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Малышева"
                    talonsAvailable="8"
                />
                <DoctorItem 
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Малышева"
                    talonsAvailable="8"
                />
                <DoctorItem
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Малышева"
                    talonsAvailable="8"
                />
                <DoctorItem 
                    choosenDoctor={choosenDoctor}
                    setChoosenDoctor={setChoosenDoctor}
                    doctorName="Малышева"
                    talonsAvailable="8"
                />

            </Box>
            </Box>
    );
};

export default DoctorsList;