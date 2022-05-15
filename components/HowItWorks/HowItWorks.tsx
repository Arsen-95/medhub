import { AspectRatio, Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Slider from './Slider';

const HowItWorks = () => {
    return (
        <Box 
            bgColor={'#FBFBFD'}
            p={'100px 0 45px'}
        >
            <Container>
                <Text as='h6'
                    textAlign={'center'}
                    color={'#313338'}
                    fontSize={[32, 35, 38, 40, 42]}
                    lineHeight={10}
                    fontWeight={'bold'}
                    mb={10}
                >
                    Как это работает
                </Text>
                <Slider/>
                <NextLink href={'/videos'} passHref>
                    <Flex 
                        justifyContent={['center', 'center', 'center', 'right']}
                    >
                        <Link
                            textAlign={'right'}
                            fontSize={[16, 17, 18, 19, 20]}
                            color={'#8D8E90'}
                            letterSpacing={'-0.0036em'}
                            mr={5}
                        >
                            Все обучающие видео 
                        </Link>
                        <Image src='/Arrow-right.svg' alt='Arrow-right'/>
                    </Flex>
                </NextLink>
            </Container>
        </Box>
    );
};

export default HowItWorks;