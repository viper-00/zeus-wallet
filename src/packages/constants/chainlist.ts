export type ChainListInfo = {
  name: string;
  chain: string;
  rpc: string[];
  infoURL: string;
  shortName: string;
  chainId: number;
  networkId: number;
};

export const chainList: ChainListInfo[] = [
  {
    name: 'Ethereum Mainnet',
    chain: 'ETH',
    rpc: [
      'https://cloudflare-eth.com',
      'https://ethereum.publicnode.com',
      'https://mainnet.gateway.tenderly.co',
      'https://rpc.mevblocker.io',
      'https://rpc.mevblocker.io/fast',
      'https://rpc.mevblocker.io/noreverts',
      'https://rpc.mevblocker.io/fullprivacy',
    ],
    infoURL: 'https://ethereum.org',
    shortName: 'eth',
    chainId: 1,
    networkId: 1,
  },
  // {
  //   name: 'Ethereum Testnet Goerli',
  //   chain: 'ETH',
  //   rpc: [
  //     'https://rpc.goerli.mudit.blog/',
  //     'https://ethereum-goerli.publicnode.com',
  //     'wss://ethereum-goerli.publicnode.com',
  //     'https://goerli.gateway.tenderly.co',
  //     'wss://goerli.gateway.tenderly.co',
  //   ],
  //   infoURL: 'https://goerli.net/#about',
  //   shortName: 'gor',
  //   chainId: 5,
  //   networkId: 5,
  // },
  {
    name: 'OP Mainnet',
    chain: 'ETH',
    rpc: [
      'https://mainnet.optimism.io',
      'https://optimism.publicnode.com',
      'wss://optimism.publicnode.com',
      'https://optimism.gateway.tenderly.co',
      'wss://optimism.gateway.tenderly.co',
    ],
    infoURL: 'https://optimism.io',
    shortName: 'oeth',
    chainId: 10,
    networkId: 10,
  },
  {
    name: 'Polygon Mainnet',
    chain: 'Polygon',
    rpc: [
      'https://polygon-rpc.com/',
      'https://rpc-mainnet.matic.network',
      'https://matic-mainnet.chainstacklabs.com',
      'https://rpc-mainnet.maticvigil.com',
      'https://rpc-mainnet.matic.quiknode.pro',
      'https://matic-mainnet-full-rpc.bwarelabs.com',
      'https://polygon-bor.publicnode.com',
      'wss://polygon-bor.publicnode.com',
      'https://polygon.gateway.tenderly.co',
      'wss://polygon.gateway.tenderly.co',
    ],
    infoURL: 'https://polygon.technology/',
    shortName: 'matic',
    chainId: 137,
    networkId: 137,
  },
  {
    name: 'Arbitrum One',
    chainId: 42161,
    shortName: 'arb1',
    chain: 'ETH',
    networkId: 42161,
    rpc: [
      'https://arb1.arbitrum.io/rpc',
      'https://arbitrum-one.publicnode.com',
      'wss://arbitrum-one.publicnode.com',
    ],
    infoURL: 'https://arbitrum.io',
  },
  {
    name: 'Arbitrum Nova',
    chainId: 42170,
    shortName: 'arb-nova',
    chain: 'ETH',
    networkId: 42170,
    rpc: ['https://nova.arbitrum.io/rpc', 'https://arbitrum-nova.publicnode.com', 'wss://arbitrum-nova.publicnode.com'],
    infoURL: 'https://arbitrum.io',
  },
];
