import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import MenuItem from "./MenuItem";

const Navigation: FC<any> = (display) => {
    return (
        <Box display={display}>
            <Flex
                justifyContent={'center'}
                flexDirection={['column', 'column', 'row']}
                mb={'78'}
            >
                <Box 
                    mb={3}
                    display={'flex'}
                >
                    <MenuItem
                        href={'#'}
                    >
                        Все сервисы
                    </MenuItem>
                    <MenuItem
                        href={'#'}
                    >
                        Новости
                    </MenuItem>
                </Box>
                <Box display={'flex'}>
                    <MenuItem
                        href={'#'}
                    >
                        Запись на приём
                    </MenuItem>
                    <MenuItem
                        href={'#'}
                    >
                        Служба поддержки
                    </MenuItem>
                </Box>
            </Flex>
            <Box mb={14}
                textAlign={'center'}
            >
                <NextLink href={'/ru'} passHref>
                    <Link
                        display={'inline-flex'}
                        textAlign={'center'}
                        justifyContent={'center'}
                        border={'1px solid #C4C4C4'}
                        borderRadius={24}
                        padding={'11px 12px'}
                    >
                        <Image src="Lang.png" alt='Language'
                            mr={'7.5px'}
                        />
                        <Box>Рус</Box>
                    </Link>
                </NextLink>
            </Box>
            <Button
                bgColor={'#1372FF'}
                width={['100%', '100%', '134px']}
                h={12}
            >
                <Flex
                    alignItems={'center'}
                >
                    <Box 
                        color={'#FFFFFF'}
                        fontSize={18}
                        mr={'15px'}
                    >
                        Войти
                    </Box>
                    <Image src="EnterBtn.png" alt='Enter button'/>
                </Flex>
            </Button>
        </Box>
    );
};

export default Navigation;