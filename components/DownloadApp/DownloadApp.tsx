import { Icon } from '@chakra-ui/icons';
import { Box, Container, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Appstore } from '../Icons/Appstore';
import { Googleplay } from '../Icons/Googleplay';

const DownloadApp = () => {
    return (
        <Box 
            pb={[90, 90, ]}
            background='#FBFBFD'  
        >
            <Container>
                <Box
                    borderRadius='20px'
                    background={'url(/Phones.png) no-repeat, #fff'}
                    backgroundSize={'cover'}
                    bgPosition={['0px 255px', '0 255px', '0px 310px', '570px 125px', '570px 150px']}
                    pt={['40px', '40px', '40px', '80px']}
                    pb={['200px', '200px', '250px', '144px']}
                    textAlign={['center', 'center', 'center', 'left']}
                    pl={[0, 0, 0, 100]}
                >
                    <Box
                        color={'#313338'}
                        fontSize={[20, 21, 22, 23, 24]}
                        lineHeight={["26px", '32px', '34p', '38px', '46px']}
                        fontWeight={'700'}
                        mb={3}
                    >
                        Скачайте наше приложение
                    </Box>
                    <Box as='h1'
                        color={'#313338'}
                        fontSize={[32, 34, 36, 46, 53]}
                        lineHeight={1.1}
                        fontWeight={'bold'}
                        letterSpacing={'-0.04em'}
                        mb={[6, 7, 8, 9, 10]}
                    >
                        MedHub Health
                    </Box>
                    <Box>
                        <Flex
                            flexDirection={[ 'row', 'row', 'column', ]}
                            justifyContent={'center'}
                            mb={5}
                        >
                            <Link href='#' isExternal mr={[2, 2, 0]} mb={[0, 0, 3, 3, 5]} flex="0 0">
                                <Icon as={Appstore} width="143px" height="39px"/>
                            </Link>
                            <Link href='#' isExternal>
                                <Icon as={Googleplay} width="143px" height="39px"/>
                            </Link>
                        </Flex>
                    </Box>
                    <Box>
                        <NextLink href={'#'} passHref>
                            <Link
                                background={'url(/ArrowRightBlue.svg) no-repeat right'}
                                maxW="305px"
                                pr={'25px'}
                                color={'#1372FF'}
                                lineHeight={'1.1'}
                                fontWeight={'bold'}
                                fontSize={[16, 17, 18, 19, 20]}
                            >
                                Подробнее о MedHub Health
                            </Link>
                        </NextLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default DownloadApp;