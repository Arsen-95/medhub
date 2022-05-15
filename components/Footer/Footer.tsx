import { Box, Center, Container, Flex, Image, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Logo from "../Logo";
import FooterLink from "./FooterLink";
import SocialNetworks from "./SocialNetworks";
import NextLink from 'next/link';

const Footer = () => {
    
    return (
        <Box as='footer' 
            padding={'45px 0'}
            bgColor={'#222326'}
        >
            <Container>
                <Flex 
                    mb={'34px'}
                    justifyContent={'center'}
                >
                    <Logo
                        color={'#FFFFFF'}
                    />
                </Flex>
                <Flex 
                    flexDirection={['column', 'row', 'row', 'row']}
                    justifyContent={['', 'space-between', 'space-between']}
                    textAlign={'center'}
                    mb={[12, 12, 6]}
                >
                    <UnorderedList 
                        listStyleType={'none'} 
                        textAlign={['center', 'center', 'left']}
                        m={0}
                        mb={[6, 6, 0]}
                    >
                        <FooterLink
                            linkTo={'#'}
                            linkColor={'#FFFFFF'}
                            fontSize={16}
                        >
                            Продукты
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            MedHub Doctor
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            MedHub Health
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            MedHub Library
                        </FooterLink>
                    </UnorderedList>
                    <UnorderedList 
                        listStyleType={'none'} 
                        textAlign={['center', 'center', 'left']}
                        m={0}
                        mb={[6, 6, 0]}
                    >
                        <FooterLink
                            linkTo={'#'}
                            linkColor={'#FFFFFF'}
                            fontSize={16}
                        >
                            Блог и сообщества
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            MedHub Блог
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            Конференции
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            Выставки
                        </FooterLink>
                    </UnorderedList>
                    <UnorderedList
                        listStyleType={'none'} 
                        textAlign={['center', 'center', 'left']}
                        m={0}
                        mb={[6, 6, 0]} 
                    >
                        <FooterLink
                            linkTo={'#'}
                            linkColor={'#FFFFFF'}
                            fontSize={16}
                        >
                            Служба поддержки
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            Поддержка
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            Форумы
                        </FooterLink>
                    </UnorderedList>
                    <UnorderedList 
                        listStyleType={'none'} 
                        textAlign={['center', 'center', 'left']}
                        m={0}
                    >
                    <FooterLink
                            linkTo={'#'}
                            linkColor={'#FFFFFF'}
                            fontSize={16}
                        >
                            MedHub
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            Для управления
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            Для пациента
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            Для врачей
                        </FooterLink>
                        <FooterLink
                            linkTo={'#'}
                        >
                            О компании
                        </FooterLink>
                    </UnorderedList>
                </Flex>
                <SocialNetworks/>
                <Flex 
                    flexDirection={['column', 'column', 'row']}
                    justifyContent={['', '', 'space-between']}
                    alignItems={'center'}
                >
                    
                        {/* <Image src="Geolocation.svg" alt="Geolocation" mr={4}/> */}
                    <Box
                        background="url(Geolocation.svg) no-repeat"
                        fontSize={14}
                        lineHeight={'18px'}
                        color='#8E8E93'
                        mb={['27px', '27px', 0]}
                        pl="8"
                    >
                        Ташкент
                    </Box>
                    <Box
                        color={'#8E8E93'}
                        fontSize={14}
                        lineHeight={'18px'}
                        textAlign={'center'}
                    >
                        Copyright MedHub 2022
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;