import { PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import { Button, Card, Flex, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import { hydrateWallet } from 'lib/store/wallet';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';
import { formatEllipsisTxt } from 'utils/format';

const SendPage = () => {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    const wallet = hydrateWallet();
    setAddress(wallet.address);
  }, []);
  return (
    <>
      <Flex flexDirection={'column'} alignItems={'center'} mt={10}>
        <Text fontWeight={'bold'} fontSize={20}>
          Send
        </Text>

        <Stack width={500} mt={10}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search tokens" />
          </InputGroup>
        </Stack>
      </Flex>
    </>
  );
};

export default SendPage;
