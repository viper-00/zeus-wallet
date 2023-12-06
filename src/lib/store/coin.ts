import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type coin = {
  name: string;
  symbol: string;
  slug: string;
  last_updated: string;
  price: string;
  volume_change_24h: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  percent_change_30d: string;
  percent_change_60d: string;
  percent_change_90d: string;
};

type Coins = {
  btc: string | null;
  eth: string | null;

  cryptoCoins: coin[] | [];
};

interface CoinPerisistState {
  cryptoCoins: Coins['cryptoCoins'];
  setCryptoCoins: (coins: { cryptoCoins: coin[] }) => void;
  getCryptoCoins: () => coin[];
}

export const useCoinPersistStore = create(
  persist<CoinPerisistState>(
    (set, get) => ({
      cryptoCoins: [],
      setCryptoCoins: ({ cryptoCoins }) => set({ cryptoCoins }),
      getCryptoCoins: () => get().cryptoCoins,
    }),
    {
      name: 'zeus.coin.store',
    },
  ),
);

export default useCoinPersistStore;

export const setCryptoCoins = (coins: { cryptoCoins: coin[] }) => useCoinPersistStore.getState().setCryptoCoins(coins);
export const getCryptoCoins = () => useCoinPersistStore.getState().getCryptoCoins();
