import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Coins = {
  btc: string | null;
  eth: string | null;
};

interface CoinPerisistState {
  btc: Coins['btc'];
  eth: Coins['eth'];
  setAll: (tokens: { btc: string; eth: string }) => void;
  hydrateCoins: () => Coins;
}

export const useCoinPersistStore = create(
  persist<CoinPerisistState>(
    (set, get) => ({
      btc: null,
      eth: null,
      setAll: ({ btc, eth }) => set({ btc, eth }),
      hydrateCoins: () => {
        return {
          btc: get().btc,
          eth: get().eth,
        };
      },
    }),
    {
      name: 'board.coin.store',
    },
  ),
);

export default useCoinPersistStore;

export const setAll = (coins: { btc: string; eth: string }) => useCoinPersistStore.getState().setAll(coins);
export const hydrateCoins = () => useCoinPersistStore.getState().hydrateCoins();
