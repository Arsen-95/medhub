import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Fonts from '../styles/font';
import '../styles/styles.css'


const theme = extendTheme({
  fonts: {
    body: 'Cera Pro',
    heading: 'Cera Pro'
  },
  components: {
    Container:  {
      baseStyle: {
        px: 5,
        margin: '0 auto',
        maxW: '1340'
      }
    }
  },
  styles: {
    global: {
      'body, html': {
        height: '100%',
        cursor: "default"
      }
    }
  }
  
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
