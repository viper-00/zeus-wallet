import { TokenInfo } from 'packages/constants/tokenList';
import { AssetBalance, Chain } from 'packages/types';
import { ETH } from './eth';

export class Web3 {
  static ETH = ETH;

  static async checkAddress(chain: Chain, address: string): Promise<boolean> {
    switch (chain) {
      case Chain.ETH:
        return ETH.checkAddress(address);
      default:
        return false;
    }
  }

  static async getAssetBalance(chain: Chain, address: string): Promise<AssetBalance> {
    switch (chain) {
      case Chain.ETH:
        return ETH.getAssetBalance(address);
      default:
        return {};
    }
  }

  static async getTransactionList(chain: Chain, address: string): Promise<any[]> {
    switch (chain) {
      case Chain.ETH:
        return await ETH.getAssetTransactions(address);
    }
    return [];
  }

  static async getTransactionDetail(token: TokenInfo, hash: string): Promise<any> {
    switch (token.chain) {
      case Chain.ETH:
        return null;
    }
    return null;
  }
}
