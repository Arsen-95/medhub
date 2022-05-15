import { Box, Image, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

const Logo: FC<any> = ({ color }) => {
    return (
        <Box>
            <NextLink href={'/'}>
                <Link
                    display={'flex'}
                    _hover={{
                        textDecor: 'none'
                    }}
                >
                    <Image src='Logo.svg' alt="MedHub" w={25.55} h={25.55} mr={2.5}/>
                    <Text as='h1' 
                        fontFamily={'Cera Pro'}
                        fontWeight={'bold'} 
                        fontSize={25.5}
                        lineHeight={'26px'}
                        color={color}
                        >
                            MedHub
                        </Text>
                </Link>
            </NextLink>
        </Box>
    );
};

export default Logo;