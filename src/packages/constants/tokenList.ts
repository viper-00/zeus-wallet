import { Chain } from "packages/types";

export type TokenInfo = {
  chain: Chain;
  symbol: string;
  isToken: boolean;
  tokenType?: string;
  decimals: number;
  contractAddress?: string;
  displayDecimals: number;
  icon: any;
};

export const tokenList: TokenInfo[] = [
  {
    chain: Chain.ETH,
    symbol: 'ETH',
    isToken: false,
    decimals: 18,
    displayDecimals: 8,
    icon: require("../../assets/coin/eth.png"),
  },
  {
    chain: Chain.ETH,
    symbol: 'USDT',
    isToken: true,
    contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    displayDecimals: 8,
    icon: require("../../assets/coin/usdt.png"),
  },
  {
    chain: Chain.ETH,
    symbol: 'USDC',
    isToken: true,
    contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    displayDecimals: 8,
    icon: require("../../assets/coin/usdc.png"),
  },
  {
    chain: Chain.ETH,
    symbol: 'WBTC',
    isToken: true,
    contractAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    decimals: 8,
    displayDecimals: 8,
    icon: require("../../assets/coin/wbtc.png"),
  },
  {
    chain: Chain.ETH,
    symbol: 'WETH',
    isToken: true,
    contractAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    decimals: 18,
    displayDecimals: 8,
    icon: require("../../assets/coin/weth.png"),
  },
  {
    chain: Chain.ETH,
    symbol: 'UNI',
    isToken: true,
    contractAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    decimals: 18,
    displayDecimals: 8,
    icon: require("../../assets/coin/uni.png"),
  },
  {
    chain: Chain.BTC,
    symbol: 'BTC',
    isToken: false,
    decimals: 8,
    displayDecimals: 8,
    icon: require("../../assets/coin/btc.png"),
  },
  {
    chain: Chain.TRON,
    symbol: 'TRX',
    isToken: false,
    decimals: 6,
    displayDecimals: 6,
    icon: require("../../assets/coin/trx.png"),
  },
  {
    chain: Chain.TRON,
    symbol: 'USDT',
    isToken: true,
    decimals: 6,
    displayDecimals: 4,
    icon: require("../../assets/coin/usdt.png"),
  },
  {
    chain: Chain.TRON,
    symbol: 'USDC',
    isToken: true,
    decimals: 6,
    displayDecimals: 4,
    icon: require("../../assets/coin/usdc.png"),
  },
  {
    chain: Chain.BSC,
    symbol: 'BNB',
    isToken: false,
    decimals: 18,
    displayDecimals: 8,
    icon: require("../../assets/coin/bnb.png"),
  },
  {
    chain: Chain.BSC,
    symbol: 'USDT',
    isToken: true,
    decimals: 18,
    displayDecimals: 8,
    icon: require("../../assets/coin/usdt.png"),
  },
  {
    chain: Chain.BSC,
    symbol: 'BUSD',
    isToken: true,
    decimals: 18,
    displayDecimals: 8,
    icon: require("../../assets/coin/busd.png"),
  },
  {
    chain: Chain.LTC,
    symbol: 'LTC',
    isToken: false,
    decimals: 8,
    displayDecimals: 8,
    icon: require("../../assets/coin/ltc.png"),
  },
];