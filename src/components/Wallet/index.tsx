import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  IconButton,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsArrowDownLeftCircle, BsArrowUpRightCircle } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { TbBuildingBridge2 } from 'react-icons/tb';

const WalletPage = () => {
  return (
    <>
      <Box paddingX={20}>
        <Flex justifyContent={'space-between'}>
          <Box>
            <Text fontSize="2xl">Total Balance</Text>
            <Text fontSize="4xl">$32.01</Text>
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
                <ListItem px={5} py={5} backgroundColor={'#fbfbfb'}>
                  <Flex justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                      <BsArrowUpRightCircle size={30} />
                      <Flex flexDirection={'column'} ml={5}>
                        <Text>Matic Token</Text>
                        <Text>MATIC</Text>
                      </Flex>
                    </Flex>
                    <Flex alignItems={'flex-end'} flexDirection={'column'}>
                      <Text>$51.52</Text>
                      <Text>51.53</Text>
                    </Flex>
                  </Flex>
                </ListItem>
                <ListItem px={5} py={5} backgroundColor={'#fff'}>
                  <Flex justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                      <BsArrowUpRightCircle size={30} />
                      <Flex flexDirection={'column'} ml={5}>
                        <Text>Matic Token</Text>
                        <Text>MATIC</Text>
                      </Flex>
                    </Flex>
                    <Flex alignItems={'flex-end'} flexDirection={'column'}>
                      <Text>$51.52</Text>
                      <Text>51.53</Text>
                    </Flex>
                  </Flex>
                </ListItem>
                <ListItem px={5} py={5} backgroundColor={'#fbfbfb'}>
                  <Flex justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                      <BsArrowUpRightCircle size={30} />
                      <Flex flexDirection={'column'} ml={5}>
                        <Text>Matic Token</Text>
                        <Text>MATIC</Text>
                      </Flex>
                    </Flex>
                    <Flex alignItems={'flex-end'} flexDirection={'column'}>
                      <Text>$51.52</Text>
                      <Text>51.53</Text>
                    </Flex>
                  </Flex>
                </ListItem>
                <ListItem px={5} py={5} backgroundColor={'#fff'}>
                  <Flex justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                      <BsArrowUpRightCircle size={30} />
                      <Flex flexDirection={'column'} ml={5}>
                        <Text>Matic Token</Text>
                        <Text>MATIC</Text>
                      </Flex>
                    </Flex>
                    <Flex alignItems={'flex-end'} flexDirection={'column'}>
                      <Text>$51.52</Text>
                      <Text>51.53</Text>
                    </Flex>
                  </Flex>
                </ListItem>
                <ListItem px={5} py={5} backgroundColor={'#fbfbfb'}>
                  <Flex justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                      <BsArrowUpRightCircle size={30} />
                      <Flex flexDirection={'column'} ml={5}>
                        <Text>Matic Token</Text>
                        <Text>MATIC</Text>
                      </Flex>
                    </Flex>
                    <Flex alignItems={'flex-end'} flexDirection={'column'}>
                      <Text>$51.52</Text>
                      <Text>51.53</Text>
                    </Flex>
                  </Flex>
                </ListItem>
              </List>
            </Card>
          </GridItem>

          <GridItem colSpan={3}>
            <Card py={5}>
              <Box alignItems={'center'} justifyContent={'space-between'} px={5}>
                <Text>Token Allocation</Text>

                <Flex alignItems={'center'} justifyContent={'space-between'} mt={10}>
                  <Flex alignItems={'center'} ml={10}>
                    <BsArrowUpRightCircle size={30} />
                    <Text ml={2}>Tether USD</Text>
                  </Flex>
                  <Text>40%</Text>
                </Flex>

                <Flex alignItems={'center'} justifyContent={'space-between'} mt={10}>
                  <Flex alignItems={'center'} ml={10}>
                    <BsArrowUpRightCircle size={30} />
                    <Text ml={2}>Tether USD</Text>
                  </Flex>
                  <Text>40%</Text>
                </Flex>

                <Flex alignItems={'center'} justifyContent={'space-between'} mt={10}>
                  <Flex alignItems={'center'} ml={10}>
                    <BsArrowUpRightCircle size={30} />
                    <Text ml={2}>Tether USD</Text>
                  </Flex>
                  <Text>40%</Text>
                </Flex>

                <Flex alignItems={'center'} justifyContent={'space-between'} mt={10}>
                  <Flex alignItems={'center'} ml={10}>
                    <BsArrowUpRightCircle size={30} />
                    <Text ml={2}>Tether USD</Text>
                  </Flex>
                  <Text>40%</Text>
                </Flex>

                <Flex alignItems={'center'} justifyContent={'space-between'} mt={10}>
                  <Flex alignItems={'center'} ml={10}>
                    <BsArrowUpRightCircle size={30} />
                    <Text ml={2}>Tether USD</Text>
                  </Flex>
                  <Text>40%</Text>
                </Flex>
              </Box>
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
