import { background, Box, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { Children, FC } from 'react';

const Service: FC<any> = ({description, title, backgroundUrl, BackgroundProps, backgroundColor, minW, linkTo}) => {
    return (
        <NextLink href={linkTo ? `${linkTo}` : '#'} passHref>
            <Link 
                flex={1}
                boxSizing={'border-box'}
                textDecoration={'none'}
                _hover={{textDecor: 'none'}}
                display={'block'}
                background={`url(${backgroundUrl}) no-repeat ${BackgroundProps}`}
                backgroundColor={backgroundColor}
                borderRadius={10}
                padding={['20px 20px 0 20px', '20px 20px 0 20px', '20px 20px 0 20px']}
                minH={[200, 230, 260]}
            >
                <Text as="h3"
                    color={'#313338'}
                    fontSize={[20, 20, 20, 20, 32]}
                    lineHeight={'26px'}
                    fontWeight={'bold'}
                    mb={3}
                    maxW='427px'
                >
                    {title}
                </Text>
                <Text
                    fontSize={[16, 17, 18, 19, 20]}
                    lineHeight={'1.2'}
                    letterSpacing={'-0.0036em'}
                    color={'#8D8E90'}
                    maxW={427}        
                    whiteSpace={'pre-line'}             
                >
                    {description}
                </Text>
            </Link>
        </NextLink>
    );
};

export default Service;