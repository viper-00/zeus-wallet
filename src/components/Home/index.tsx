import { CheckIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Heading,
  Container,
  Text,
  Stack,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  Image,
  Box,
  InputRightElement,
} from '@chakra-ui/react';
import Header from 'components/Common/Header';
import HomeNav from 'components/Common/HomeNav';
import { Web3 } from 'packages/core';
import { useEffect, useState } from 'react';
import { hydrateWallet, setWalletAddress } from 'lib/store/wallet';
import { Chain } from 'packages/types';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const [address, setAddress] = useState<string>();
  const [inputVal, setInputVal] = useState<string>('');
  const [chain, setChain] = useState<Chain>(Chain.ETH);

  const wallet = hydrateWallet();

  useEffect(() => {
    setAddress(wallet.address);
    setInputVal(wallet.address);
    setChain(Chain.ETH);
  }, []);

  useEffect(() => {
    async function init() {
      if (await Web3.checkAddress(chain, wallet.address)) {
        router.push('/portfolio');
      }
    }
    init();
  }, [wallet.address]);

  const handleEnterKeyPress = async (e: any) => {
    if (e.key === 'Enter') {
      if (await Web3.checkAddress(chain, inputVal)) {
        setAddress(inputVal);
        setWalletAddress({ address: inputVal });
        router.push('/portfolio');
      }
    }
  };
  return (
    <Header pageName="Home">
      <Container minW={'100%'} backgroundColor={'#FFF2D5'}>
        <HomeNav />
        <Container centerContent>
          <Heading marginBottom={6} lineHeight="tall">
            Explore all of Web3 in one place
          </Heading>
          <Text>Buy, stake, swap or bridge with crypto card</Text>

          <Stack spacing={11} mt={10}>
            <InputGroup backgroundColor={'#fff'}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="#000" />
              </InputLeftElement>
              <Input
                htmlSize={100}
                type="tel"
                placeholder="Track any EVM or Cosmos address or ENS name"
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                }}
                onKeyPress={(e) => {
                  handleEnterKeyPress(e);
                }}
              />
              <InputRightElement>
                <CheckIcon color="green.500" />
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Text mt={5}>Or</Text>
          <Button colorScheme="blue" mt={5}>
            Connect Wallet
          </Button>

          <Box width={1000} mt={20}>
            <Image src="./test.svg" alt="Test SVG" />
          </Box>
        </Container>
      </Container>
    </Header>

    // <VStack w={'full'}>

    //   <List spacing={3}>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //       Display Transactions
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //       Display ERC20 transfers
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //       Display ERC20 balances
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //       Display NFT balances
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //       Display NFT transfers
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //       Multichain Support
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={CheckCircleIcon} color="green.500" />
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={SettingsIcon} color="green.500" />
    //       Adding explorer links to balances, transactions ...
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={SettingsIcon} color="green.500" />
    //       Better responsive design
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={SettingsIcon} color="green.500" />
    //       Rainbowkit integration
    //     </ListItem>
    //     <ListItem>
    //       <ListIcon as={SettingsIcon} color="green.500" />
    //       ... and more
    //     </ListItem>
    //   </List>
    // </VStack>
  );
};

export default Home;
