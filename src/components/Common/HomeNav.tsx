import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react';
import ConnectButton from 'components/ConnectButton';

const HomeNav = () => {
  return (
    <Box borderBottomColor="chakra-border-color">
      <Container maxW="container.xl" pt={'40px'} pb={'40px'}>
        <Flex align="center" justify="space-between">
          <Text>Logo</Text>
          {/* <NavBar /> */}
          <HStack gap={'10px'}>
            <ConnectButton />
            {/* <ColorModeButton /> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomeNav;
