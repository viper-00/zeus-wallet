import axios from 'axios';
import { setAll } from 'lib/store/coin';

export class Coin {
  static async getCryptoPrice(): Promise<any> {
    try {
      const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
        },
      });

      return response;
    } catch (err) {
      throw new Error('do not fetch crypto price: ' + err);
    }
  }

  static async getOwnCryptoPrice(): Promise<any> {
    try {
      const url = '/api/coin';
      const response = await axios.get(url);

      if (response.data.resultData.data && response.data.resultData.data.length > 0) {
        let btcPrice: any, ethPrice: any;
        response.data.resultData.data.forEach((element: any) => {
          if (element.symbol === 'BTC') {
            btcPrice = element.quote.USD.price;
          } else if (element.symbol === 'ETH') {
            ethPrice = element.quote.USD.price;
          }
        });

        setAll({
          btc: btcPrice.toString(),
          eth: ethPrice.toString(),
        });
      }

      return response;
    } catch (err) {
      throw new Error('do not fetch crypto price: ' + err);
    }
  }
}
