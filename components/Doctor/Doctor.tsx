import { Box, Center, Container, Flex, Image, Text } from '@chakra-ui/react';

const Doctor = () => {
    return (
        <Box 
            order={[1, 1, 2]}
            pt={['2', '2', '57px']} 
            flexShrink={0}    
            flexBasis={["430px", '', '', '507px']}
    
        >
            <Flex
                mb={8}
                // order={[1, 1, 2]}
                pos={'relative'}
                flexDirection={['column', 'column', 'row']}
            >
                <Image 
                    src='Doctor.png'
                    alt='Medhub Doctor'
                    flex='0 1' 
                    // width={['', '', '', '507px', '507px']}
                    // h={['', '', 586]}
                />
                <Flex 
                    h={'76px'}
                    w={'328px'}
                    pos={'absolute'}
                    bottom={0}
                    left={0}
                    p={'21px 15px'} 
                    background={'rgba(255, 255, 255, 0.72)'}
                    border={'1px solid #FFFFFF'}
                    backdropFilter={'blur(31px)'}
                    borderRadius={10}
                >
                    <Image src='Users.svg' alt='Photo of users' mr={2.5} />
                    <Text fontSize={16} color={'#313338'}>
                        Более <Text as='span' color='orange'>2 млн</Text> пациентов <Text as='span' color='orange'>уже с нами</Text>
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Doctor;