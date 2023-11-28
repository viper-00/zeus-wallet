import type { NextApiRequest, NextApiResponse } from 'next';
import { Coin } from 'packages/api/coin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await Coin.getCryptoPrice();
    if (result.status === 200 && result.data) {
      const resultData = result.data;
      res.status(200).send({ resultData });
    }

    res.status(500).send({ error: 'failed to fetch data' + result });
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' + err });
  }
}
