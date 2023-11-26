import { ChakraProvider } from '@chakra-ui/react';
import { createConfig, WagmiConfig } from 'wagmi';
import { configureChains } from '@wagmi/core';
import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  foundry,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia,
} from '@wagmi/core/chains';
import { extendTheme } from '@chakra-ui/react';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { InjectedConnector } from '@wagmi/connectors/injected'
import { ETH } from 'packages/core/eth';

async function aa() {
  // const result = await ETH.getTransactionDetail("0xdcd24233fec5e90c85a39faa8c8637e74538c7f9b456ab8884e012fd71c5789d")
  // console.log(result)
}

aa()


const preferredChains = [
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  foundry,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia,
];

const { chains, publicClient } = configureChains(preferredChains, [publicProvider()]);

const connectors: any = [new InjectedConnector({ chains, options: { shimDisconnect: true } })];

const client = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WagmiConfig config={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default MyApp;
