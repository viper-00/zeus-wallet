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
import type { AppProps } from 'next/app';
import { InjectedConnector } from '@wagmi/connectors/injected';
import { ETH } from 'packages/core/eth';
import { getCryptoCoins } from 'lib/store/coin';
import { Web3 } from 'packages/core';
import { Chain } from 'packages/types';
import { useEffect } from 'react';
import { tokenList } from 'packages/constants/tokenList';

async function init() {
  // const result = await Web3.getTransactionList(Chain.ETH, "0x79D9c06Bf20b7292F199872d4C4711206AdD1f1b")
  // console.log(""result)
}

init();

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
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const updateCoinPrice = setInterval(async () => {
      const ids: string[] = tokenList.map((token) => token.ids);
      await Web3.updateCryptoPrice(ids);
    }, 1000 * 10);

    return () => {
      clearInterval(updateCoinPrice);
    };
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <WagmiConfig config={client}>
        {/* <SessionProvider session={pageProps.session} refetchInterval={0}> */}
        <Component {...pageProps} />
        {/* </SessionProvider> */}
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default MyApp;
