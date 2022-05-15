import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Service from './Service';

const Services = () => {

    return (
        <Box as='section' py={'90px'}>
            <Container>
                <Text as='h2' 
                    color={'#313338'}
                    fontSize={[32, 35, 38, 40, 42]}
                    lineHeight={1.1}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    mb={10}
                >
                    Медицинские сервисы
                </Text>
                <Flex 
                    flexDirection={
                        ['column', 'column', 'column', 'column', 'column']
                    } 
                    flexWrap={'wrap'} 
                    gap={5}
                >
                    <Flex 
                        flexDirection={['column', 'column', 'row']}
                        gap={5}
                    >
                        <Service
                            linkTo="/appointment"
                            minW={'640px'}
                            backgroundColor={'#F7F7F7'}
                            backgroundUrl={'/Stethoscope.png'}
                            BackgroundProps={['100px / cover']}
                            title={'Запись на приём в клинику'}
                            description={'Быстрая запись на приём к опытным врачам по всему городу'}
                        />
                        <Service
                            minW={'640px'}
                            backgroundColor={'#F9F2FF'}
                            backgroundUrl={'/Consult.png'}
                            BackgroundProps={'97% / auto 85%'}
                            title={'Онлайн консультация'}
                            description={`Медицинская консультация \n круглосуточно`}
                            
                        />
                    </Flex>
                    <Flex
                        flexDirection={['column', 'column', 'row']}
                        gap={5}
                    >
                        <Service
                            minW={'420px'}
                            backgroundColor={'#FDF0EB'}
                            backgroundUrl={'/Phones.png'}
                            BackgroundProps={'0px 100px / cover'}
                            title={'Медкарты'}
                            description={'Медкарта прямо в Вашем смартфоне'}
                        />
                        <Service
                            minW={'420px'}
                            backgroundColor={'#EFEFEF'}
                            backgroundUrl={'/Scan.png'}
                            BackgroundProps={'100% 100% / 80%'}
                            title={'Диагностика'}
                            description={'МРТ, УЗИ, ЭКГ, Рентген'}
                        />
                        <Service
                            minW={'420px'}
                            backgroundColor={'#FFF2FB'}
                            backgroundUrl={'/Tablet.png'}
                            BackgroundProps={'90% 90%'}
                            title={'Онлайн аптека'}
                            description={'Доставка товаров для здоровья'}
                        />
                    </Flex>
                   
                </Flex>
            </Container>
            
        </Box>
        
    );
};

export default Services;