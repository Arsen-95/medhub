import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import React, { FC } from 'react';

const Question: FC<any> = ({question, answer}) => {

    return (
        <AccordionItem>
            {({ isExpanded }) => (
            <>
                <h2>
                    <AccordionButton role='group'>
                        <Box flex='1' textAlign='left'
                            color={'#313338'}    
                            fontSize={[16, 17, 18, 19, 20]}
                            lineHeight={'1.1'}
                            fontWeight={'bold'}
                            py={2}
                        >
                            <Text 
                                maxW={[230, '', 600, 700]}
                            >
                                {question}
                            </Text>
                        
                        </Box>
                        {isExpanded ? (
                            <Flex
                                h={9}
                                w={9}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <CloseIcon fontSize='20px' />
                            </Flex>
                        
                        ) : (
                            <Flex
                                h={9}
                                w={9}
                                borderRadius={22}
                                alignItems={'center'}
                                justifyContent={'center'}
                                _groupHover={{
                                    bgColor: '#428EFF',
                                    color: 'white'
                                }}
                            >
                                <AddIcon fontSize='20px' />
                            </Flex>
                        
                        )}
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}
                    color={'#8D8E90'}
                    letterSpacing={'-0.0036em'}
                    fontSize={[16, 17, 18, 19, 20]}
                    lineHeight={'1.1'}
                >
                    {answer}
                </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
};

export default Question;