import { Avatar, Button, HStack, Text, useToast } from '@chakra-ui/react';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { formatEllipsisTxt } from 'utils/format';

const ConnectButton = () => {
  const { connectAsync } = useConnect({ connector: new InjectedConnector() });
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const toast = useToast();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }
    try {
      const { account, chain } = await connectAsync();
    } catch (e) {
      toast({
        title: 'Oops, something went wrong...',
        description: (e as { message: string })?.message,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const handleDisconnect = async () => {
    await disconnectAsync();
  };

  // if (data?.user) {
  return (
    <HStack onClick={handleDisconnect} cursor={'pointer'}>
      <Avatar size="xs" />
      {/* <Text fontWeight="medium">{formatEllipsisTxt(data.user.address)}</Text> */}
    </HStack>
  );
  // }

  return (
    <Button size="sm" onClick={handleAuth} colorScheme="blue">
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;
