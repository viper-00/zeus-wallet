import { Box, Tab, TabList, TabPanels, TabPanel, Tabs, Text, Center, Flex } from '@chakra-ui/react';
import ToolCard from 'components/ToolCard';

const DeFiPage = () => {
  return (
    <>
      <Text fontWeight={'bold'} fontSize={20}>
        DEFI | Decentralized finance
      </Text>
      <Text fontSize={14} mt={5}>
        Decentralized finance offers financial instruments without relying on intermediaries such as brokerages,
        exchanges, or banks by using smart contracts on a blockchain
      </Text>
      <Box mt={10}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <Center>
            <TabList overflowY="auto">
              <Tab width={150}>DEX</Tab>
              <Tab width={150}>CEX</Tab>
              <Tab width={150}>Derivatives</Tab>
              <Tab width={150}>Bridge</Tab>
              <Tab width={150}>Lending & Borrowing</Tab>
              <Tab width={150}>Insurance</Tab>
              <Tab width={150}>Yield Farming</Tab>
              <Tab width={150}>Airdrops</Tab>
            </TabList>
          </Center>

          <TabPanels>
            <TabPanel>
              <Text fontWeight={'bold'} fontSize={20}>Decentralised Exchanges</Text>
              <Text fontSize={14}>Decentralised exchanges let you trade any tokens without intermediaries.</Text>
              <Text fontSize={14} mt={5}>30 tools</Text>
              <Flex mt={10} flexWrap={'wrap'} flex={3}>
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />

              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default DeFiPage;
