import type { AppProps } from 'next/app';
import { ChakraProvider} from "@chakra-ui/react";
import { theme } from "../lib";
import '@fontsource/open-sans';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
