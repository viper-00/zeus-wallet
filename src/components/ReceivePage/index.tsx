import { Card, Flex, Text } from '@chakra-ui/react';
import { hydrateWallet } from 'lib/store/wallet';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

const ReceivePage = () => {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    const wallet = hydrateWallet();
    setAddress(wallet.address);
  }, []);
  return (
    <>
      <Flex flexDirection={'column'} alignItems={'center'} mt={10}>
        <Text fontWeight={'bold'} fontSize={20}>
          Receive
        </Text>

        <Card
          width={700}
          alignItems={'center'}
          justifyContent={'center'}
          padding={30}
          backgroundColor={'#f2fafe'}
          mt={10}
        >
          <Text fontWeight={'bold'} textAlign={'center'}>
            Use this address to send tokens from an exchange or a wallet to Board Wallet and this address works on the
            following chains: Ethereum, Polygon, Binance Smart Chain, Avalanche, Fantom, Optimism, Arbitrum, Evmos,
            zkSync Era, Base, Polygon zkEVM, Aurora, Moonbeam, Moonriver
          </Text>
        </Card>

        <Flex mt={20}>
          <QRCodeSVG value={address} size={200} />
        </Flex>
      </Flex>
    </>
  );
};

export default ReceivePage;