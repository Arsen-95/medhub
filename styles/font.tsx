import { Global as GlobalTheme } from '@emotion/react'

const Fonts = () => {
  return <GlobalTheme styles={
    `
    @font-face {
      font-family: 'Cera Pro';
      src: url('/fonts/CeraPro/CeraPro-Regular.eot');
      src:
        local('Cera Pro Regular'),
        local('CeraPro-Regular'),
        url('/fonts/CeraPro/CeraPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/CeraPro/CeraPro-Regular.woff2') format('woff2'),
        url('/fonts/CeraPro/CeraPro-Regular.woff') format('woff'),
        url('/fonts/CeraPro/CeraPro-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Cera Pro';
      src: url('/fonts/CeraPro/CeraPro-Medium.eot');
      src: local('Cera Pro Medium'), local('CeraPro-Medium'),
          url('/fonts/CeraPro/CeraPro-Medium.eot?#iefix') format('embedded-opentype'),
          url('/fonts/CeraPro/CeraPro-Medium.woff2') format('woff2'),
          url('/fonts/CeraPro/CeraPro-Medium.woff') format('woff'),
          url('/fonts/CeraPro/CeraPro-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Cera Pro';
      src: url('/fonts/CeraPro/CeraPro-Bold.eot');
      src:
        local('Cera Pro Bold'),
        local('CeraPro-Bold'),
        url('/fonts/CeraPro/CeraPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/CeraPro/CeraPro-Bold.woff2') format('woff2'),
        url('/fonts/CeraPro/CeraPro-Bold.woff') format('woff'),
        url('/fonts/CeraPro/CeraPro-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    `
  } />
}

export default Fonts;


