import axios from 'axios';
import { coin, setCryptoCoins } from 'lib/store/coin';

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
        // let btcPrice: any, ethPrice: any;
        let coins: coin[] = [];
        response.data.resultData.data.forEach((element: any) => {
          // if (element.symbol === 'BTC') {
          //   btcPrice = element.quote.USD.price;
          // } else if (element.symbol === 'ETH') {
          //   ethPrice = element.quote.USD.price;
          // }

          coins.push({
            name: element.name,
            symbol: element.symbol,
            slug: element.slug,
            last_updated: element.last_updated,
            price: element.quote.USD.price,
            volume_change_24h: element.quote.USD.volume_change_24h,
            percent_change_1h: element.quote.USD.percent_change_1h,
            percent_change_24h: element.quote.USD.percent_change_24h,
            percent_change_7d: element.quote.USD.percent_change_7d,
            percent_change_30d: element.quote.USD.percent_change_30d,
            percent_change_60d: element.quote.USD.percent_change_60d,
            percent_change_90d: element.quote.USD.percent_change_90d,
          });
        });

        setCryptoCoins({
          cryptoCoins: coins,
        });
      }

      return response;
    } catch (err) {
      throw new Error('do not fetch own crypto price: ' + err);
    }
  }
}
