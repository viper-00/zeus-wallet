import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  IconButton,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { getCryptoCoins } from 'lib/store/coin';
import Image from 'next/image';
import { TokenInfo, tokenList } from 'packages/constants/tokenList';
import { Web3 } from 'packages/core';
import { ETH } from 'packages/core/eth';
import { Chain, ChainIdToName } from 'packages/types';
import { useEffect, useState } from 'react';
import { BsArrowDownLeftCircle, BsArrowUpRightCircle } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { TbBuildingBridge2 } from 'react-icons/tb';
import { hydrateWallet } from 'lib/store/wallet';

const WalletPage = () => {
  const [coins, setCoins] = useState<TokenInfo[]>([]);
  const [totalUSDBalance, setTotalUSDBalance] = useState<number>(0);

  useEffect(() => {
    async function init() {
      const wallet = hydrateWallet();
      const lists: TokenInfo[] = tokenList.filter((item) => item.chain === wallet.chain);
      const coinPrices = getCryptoCoins();
      const assetBalances = await Web3.getAssetBalance(wallet.chain, wallet.address);

      let usdBalance: number = 0;
      coinPrices.forEach((item) => {
        lists.forEach((innerItem) => {
          if (item.symbol === innerItem.symbol) {
            innerItem.price = item.price;
            innerItem.percentChange24h = item.percent_change_24h;
            innerItem.balance = assetBalances[item.symbol];
            usdBalance += Number(item.price) * Number(assetBalances[item.symbol]);
            return;
          }
        });
      });
      setCoins(lists);
      setTotalUSDBalance(usdBalance);
    }

    init();
  }, []);

  return (
    <>
      <Box paddingX={20}>
        <Flex justifyContent={'space-between'}>
          <Box>
            <Text fontSize="2xl">Total Balance</Text>
            <Text fontSize="4xl">${parseFloat(String(totalUSDBalance)).toFixed(2)}</Text>
          </Box>
          <Flex>
            <Flex alignItems={'center'} flexDirection={'column'}>
              <IconButton
                isRound={true}
                aria-label=""
                icon={<BsArrowUpRightCircle size={30} />}
                bg={'#FFF2D5'}
                color={'#000'}
                rounded={'full'}
                _hover={{
                  bg: '#fff',
                }}
                _focus={{
                  bg: '#fff',
                }}
                width={51}
                height={51}
              />
              <Text>Send</Text>
            </Flex>
            <Flex alignItems={'center'} flexDirection={'column'} paddingLeft={5}>
              <IconButton
                isRound={true}
                aria-label=""
                icon={<BsArrowDownLeftCircle size={30} />}
                bg={'#FFF2D5'}
                color={'#000'}
                rounded={'full'}
                _hover={{
                  bg: '#fff',
                }}
                _focus={{
                  bg: '#fff',
                }}
                width={51}
                height={51}
              />
              <Text>Receive</Text>
            </Flex>
            <Flex alignItems={'center'} flexDirection={'column'} paddingLeft={5}>
              <IconButton
                isRound={true}
                aria-label=""
                icon={<TbBuildingBridge2 size={30} />}
                bg={'#FFF2D5'}
                color={'#000'}
                rounded={'full'}
                _hover={{
                  bg: '#fff',
                }}
                _focus={{
                  bg: '#fff',
                }}
                width={51}
                height={51}
              />
              <Text>Bridge</Text>
            </Flex>
            <Flex alignItems={'center'} flexDirection={'column'} paddingLeft={5}>
              <IconButton
                isRound={true}
                aria-label=""
                icon={<MdOutlineSwapHoriz size={30} />}
                bg={'#FFF2D5'}
                color={'#000'}
                rounded={'full'}
                _hover={{
                  bg: '#fff',
                }}
                _focus={{
                  bg: '#fff',
                }}
                width={51}
                height={51}
              />
              <Text>Swap</Text>
            </Flex>
            <Flex alignItems={'center'} flexDirection={'column'} paddingLeft={5}>
              <IconButton
                isRound={true}
                aria-label=""
                icon={<GrAdd size={30} />}
                bg={'#FFF2D5'}
                color={'#000'}
                rounded={'full'}
                _hover={{
                  bg: '#fff',
                }}
                _focus={{
                  bg: '#fff',
                }}
                width={51}
                height={51}
              />
              <Text>Buy</Text>
            </Flex>
            <Flex alignItems={'center'} flexDirection={'column'} paddingLeft={5}>
              <IconButton
                isRound={true}
                aria-label=""
                icon={<FiMinus size={30} />}
                bg={'#FFF2D5'}
                color={'#000'}
                rounded={'full'}
                _hover={{
                  bg: '#fff',
                }}
                _focus={{
                  bg: '#fff',
                }}
                width={51}
                height={51}
              />
              <Text>Sell</Text>
            </Flex>
          </Flex>
        </Flex>

        <Grid templateColumns="repeat(1, 1fr)" marginY={5}>
          <GridItem w="100%" h="1" bg="blue.500" />
        </Grid>

        <SimpleGrid spacing={4} templateColumns="repeat(4, 4fr)">
          <Card padding={5}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text>$0</Text>
              <BsArrowUpRightCircle size={30} />
            </Flex>
            <Text marginTop={4}>Total Staked Rewards</Text>
          </Card>
          <Card padding={5}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text>$0</Text>
              <BsArrowUpRightCircle size={30} />
            </Flex>
            <Text marginTop={4}>Total Staked Balance</Text>
          </Card>
          <Card padding={5}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text>$0</Text>
              <BsArrowUpRightCircle size={30} />
            </Flex>
            <Text marginTop={4}>Total DeFi Rewards</Text>
          </Card>
          <Card padding={5}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Text>$0</Text>
              <BsArrowUpRightCircle size={30} />
            </Flex>
            <Text marginTop={4}>Total DeFi Rewards</Text>
          </Card>
        </SimpleGrid>

        <Grid gap={5} templateColumns="repeat(5, 1fr)" mt={10}>
          <GridItem colSpan={2}>
            <Card py={5}>
              <Flex alignItems={'center'} justifyContent={'space-between'} px={5}>
                <Text>Coins</Text>
                <Box>
                  <Checkbox value="sasuke">Only Verified Coins</Checkbox>
                </Box>
              </Flex>

              <List mt={10}>
                {coins &&
                  coins.map((item, index) => (
                    <ListItem px={5} py={5} backgroundColor={index % 2 === 0 ? '#fbfbfb' : 'fff'} key={index}>
                      <Flex justifyContent={'space-between'}>
                        <Flex alignItems={'center'}>
                          <Image src={item.icon} alt="coin SVG" width={30} height={30} />
                          <Flex flexDirection={'column'} ml={5}>
                            <Text fontWeight={'bold'}>{item.symbol}</Text>
                            <Flex>
                              <Text>{parseFloat(item.price as string).toFixed(item.displayDecimals)}</Text>

                              <Text
                                color={parseFloat(item.percentChange24h as string) > 0 ? 'green' : 'red'}
                                marginLeft={2}
                              >
                                {parseFloat(item.percentChange24h as string) > 0 ? (
                                  <>+{parseFloat(item.percentChange24h as string)}%</>
                                ) : (
                                  <>{parseFloat(item.percentChange24h as string)}%</>
                                )}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex alignItems={'flex-end'} flexDirection={'column'}>
                          <Text fontWeight={'bold'}>
                            ${(Number(item.price) * Number(item.balance)).toFixed(item.displayDecimals)}
                          </Text>
                          <Text>{item.balance}</Text>
                        </Flex>
                      </Flex>
                    </ListItem>
                  ))}
              </List>
            </Card>
          </GridItem>

          <GridItem colSpan={3}>
            <Card py={5}>
              <Text pl={5} mb={10}>
                Token Allocation
              </Text>
              {coins &&
                coins.map((item, index) => (
                  <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    backgroundColor={index % 2 === 0 ? '#fbfbfb' : 'fff'}
                    py={5}
                    px={5}
                    key={index}
                  >
                    <Flex alignItems={'center'}>
                      <Image src={item.icon} alt="coin SVG" width={30} height={30} />
                      <Text ml={2}>{item.symbol}</Text>
                    </Flex>
                    <CircularProgress
                      value={Number(
                        (
                          ((parseFloat(item.price as string) * parseFloat(item.balance as string)) / totalUSDBalance) *
                          100
                        ).toFixed(2),
                      )}
                      color="green.400"
                      size={58}
                    >
                      <CircularProgressLabel>
                        {(((Number(item.price) * Number(item.balance)) / totalUSDBalance) * 100).toFixed(2)}%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Flex>
                ))}
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default WalletPage;

// { name: 'Send', icon: BsArrowUpRightCircle },
// { name: 'Receive', icon: BsArrowDownLeftCircle },
// { name: 'Bridge', icon: TbBuildingBridge2 },
// { name: 'Swap', icon: MdOutlineSwapHoriz },
// { name: 'Buy', icon: GrAdd },
// { name: 'Sell', icon: FiMinus },
