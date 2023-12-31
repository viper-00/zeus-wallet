import { TokenInfo } from 'packages/constants/tokenList';

export enum Chain {
  ETH = 1,
  ETH_GOR = 5,
  ETH_OP = 10,
  BSC = 56,
  POLYGON = 137,
  ARBITRUM_ONE = 42161,
  ARBITRUM_NOVA = 42170,

  BTC = 2,
  TRON = 3,
  LTC = 11,
}

export enum WalletStatus {
  ONLINE = 'Online',
  OFFLINE = 'Offline',
  UNKNOWN = 'unknown',
}

export const ChainIdToName: { [key in Chain]: string } = {
  [Chain.ETH]: 'Ethereum',
  [Chain.ETH_GOR]: 'Ethereum Testnet Goerli',
  [Chain.ETH_OP]: 'OP Mainnet',
  [Chain.POLYGON]: 'Polygon',
  [Chain.ARBITRUM_ONE]: 'Arbitrum One',
  [Chain.ARBITRUM_NOVA]: 'Arbitrum Nova',
  [Chain.BTC]: 'Bitcoin',
  [Chain.TRON]: 'Tron',
  [Chain.BSC]: 'BNB Smart Chain',
  [Chain.LTC]: 'Litecoin',
};

export enum TxStatus {
  Failed = 0,
  Success = 1,
  Pending = 2,
}

export type TransactionDetail = {
  blockHash?: string;
  blockNumber: number;
  chainId: number;

  blockTimestamp?: number;
  hash: string;
  from: string;
  to: string;
  status?: string;
  value: string;
  gasPrice?: number;
  gasLimit?: number;
  maxFeePerGas?: number;
  maxPriorityFeePerGas?: number;
  nonce?: number;
  type?: number;
  gasUsed?: number;
  isContract?: boolean;
  url?: string;
  fee?: string;
};

export type TransactionTokenTransfer = {
  hash: string;
  from: string;
  to: string;
  asset: string;
  value: string;
};

export type FeeData = {
  gasPrice: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
};

export type AssetBalance = {
  [key: string]: string;
};
