import { Box, Container, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Doctor from '../components/Doctor/Doctor'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import FAQ from '../components/FAQ/FAQ'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import MainLayout from '../components/MainLayout'
import NewAppointment from '../components/NewAppointment/NewAppointment'
import Services from '../components/Services/Services'
import Statistics from '../components/Statistics/Statistics'

const Home: NextPage = () => {
  return (
    <>
      <Head> 
        <title>MedHub website</title>
        <meta name="keywords" content="MedHub, Медхаб, онлайн поликлиника"></meta>
        <meta name="description" content="MedHub......." />
      </Head>

      <MainLayout>
        <Box  
          bgColor={'#FBFBFD'}
          pb={['', '', '100px', '150px', '177px']}
        >
          <Container>
            <Flex 
              flexDirection={['column', 'column', 'row', 'row']}
              justifyContent={['', '', 'space-between']}
            >
              <Doctor/>
              <NewAppointment/>
            </Flex>
          </Container>
        </Box>
        <Statistics/>
        <Services/>
        <HowItWorks/>
        <FAQ/>
        <DownloadApp/>
      </MainLayout>
    </>
  )
}

export default Home
