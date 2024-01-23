import { Box, Container, Flex, HStack, Link, Image } from '@chakra-ui/react';
import ConnectButton from 'components/ConnectButton';

const HomeNav = () => {
  return (
    <Box borderBottomColor="chakra-border-color">
      <Container maxW="container.xl" pt={'40px'} pb={'40px'}>
        <Flex align="center" justify="space-between">
          <Link href="/" isExternal>
            <Image src="./logo.png" alt="logo" width={200} height={100} />
          </Link>
          {/* <NavBar /> */}
          {/* <HStack gap={'10px'}> */}
            {/* <ConnectButton /> */}
            {/* <ColorModeButton /> */}
          {/* </HStack> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default HomeNav;
