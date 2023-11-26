import { ethers } from 'ethers';
import { tokenList } from 'packages/constants/tokenList';
import { ERC20ABI } from 'packages/contracts/abi/ERC20';
import { Chain, FeeData, TransactionDetail, TransactionTokenTransfer, TxStatus } from 'packages/types';
import { GetRandomRPCUrl } from 'packages/utils';

export class ETH {
  static chain = Chain.ETH;

  static web3Instance: any;

  static {
    ETH.web3Instance = new ethers.JsonRpcProvider(GetRandomRPCUrl(this.chain));
  }

  static checkAddress(address: string): boolean {
    return ethers.isAddress(address);
  }

  static async getBalance(address: string, isWei?: boolean): Promise<number> {
    const balance = await ETH.web3Instance.getBalance(address);
    return isWei ? balance : ethers.formatEther(balance);
  }

  static async getTokenDecimals(contractAddress: string): Promise<number> {
    const contract = new ethers.Contract(contractAddress, ERC20ABI, ETH.web3Instance);
    const decimals = await contract.decimals();
    return decimals;
  }

  static async getTokenBalance(address: string, contractAddress: string): Promise<number> {
    const contract = new ethers.Contract(contractAddress, ERC20ABI, ETH.web3Instance);
    const balance = await contract.balanceOf(address);
    const decimals = await this.getTokenDecimals(contractAddress);
    return parseFloat(ethers.formatUnits(balance, decimals));
  }

  static async getTransactionStatus(hash: string): Promise<string> {
    const receipt = await ETH.web3Instance.waitForTransaction(hash);
    return TxStatus[receipt.status];
  }

  static async getBlockTimestamp(blockHash: string): Promise<number> {
    const block = await ETH.web3Instance.getBlock(blockHash);
    if (block && block.timestamp) {
      const timestamp = new Date(block.timestamp * 1000);
      return timestamp.getTime();
    }

    return 0;
  }

  static async getBlockGasUsed(hash: string): Promise<number> {
    const receipt = await ETH.web3Instance.waitForTransaction(hash);
    return receipt.gasUsed;
  }

  static async decodeTokenTransfer(hash: string): Promise<TransactionTokenTransfer> {
    const transaction = await ETH.web3Instance.getTransaction(hash);

    const tokenInfo = tokenList.find((item) => item.chain === this.chain && item.contractAddress === transaction.to);

    if (!tokenInfo) {
      throw new Error('TokenInfo not found.');
    }

    let to: string = transaction.to;
    let value: string = transaction.value;
    if (transaction.data !== '') {
      const inter = new ethers.Interface(ERC20ABI);
      const result = inter.decodeFunctionData('transfer', transaction.data);
      to = result[0];
      value = ethers.formatUnits(result[1].toString(), tokenInfo?.decimals);
    }

    return {
      hash: transaction.hash,
      from: transaction.from,
      to: to,
      asset: tokenInfo?.symbol,
      value: value,
    };
  }

  static async getTransactionDetail(hash: string): Promise<TransactionDetail> {
    try {
      const transaction = await ETH.web3Instance.getTransaction(hash);
      if (transaction) {
        const gasUsed = await this.getBlockGasUsed(hash);
        const gasPrice = transaction.gasPrice;
        const fee = ethers.formatEther(BigInt(gasUsed) * BigInt(gasPrice));
        const isContract = transaction.data !== '' ? true : false;

        let to: string = transaction.to;
        let value: string = ethers.formatEther(transaction.value);
        if (isContract) {
          const transferResult = await this.decodeTokenTransfer(hash);
          if (!transferResult) {
            throw new Error('Transaction data not found.');
          }

          to = transferResult.to;
          value = transferResult.value;
        }

        const transactionDetail: TransactionDetail = {
          blockHash: transaction.blockHash,
          blockNumber: transaction.blockNumber,
          hash: transaction.hash,
          chainId: transaction.chainId,
          from: transaction.from,
          to: to,
          value: value,
          gasPrice: gasPrice,
          gasLimit: transaction.gasLimit,
          blockTimestamp: await this.getBlockTimestamp(transaction.blockHash),
          status: await this.getTransactionStatus(hash),
          maxFeePerGas: transaction.maxFeePerGas,
          maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
          nonce: transaction.nonce,
          type: transaction.type,
          gasUsed: gasUsed,
          isContract: isContract,
          url: 'https://etherscan.io/tx/' + hash,
          fee: fee,
        };

        return transactionDetail;
      } else {
        throw new Error('Transaction not found.');
      }
    } catch (error) {
      throw new Error('Failed to retrieve transaction details.' + error);
    }
  }

  static async getFeeData(): Promise<FeeData> {
    const feeData = await ETH.web3Instance.getFeeData();
    return {
      gasPrice: feeData.gasPrice.toString(),
      maxFeePerGas: feeData.maxFeePerGas.toString(),
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas.toString(),
    };
  }

  static async getGasLimit(contractAddress: string): Promise<number> {
    if (contractAddress !== '') {
      return 96000;
    }

    return 21000;
  }

  // ------

  static async createTransaction(): Promise<any> {}

  static async getFee(): Promise<any> {}

  static async sendTransaction(): Promise<any> {}
}
