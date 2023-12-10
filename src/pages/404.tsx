import { AbsoluteCenter, Box, Button, Container, Flex, Image, Text, Center } from '@chakra-ui/react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <Center>
        <Flex flexDirection={'column'} alignItems={'center'}>
          <Box className="mb-10">
            {/* <Image
            // src={`${STATIC_ASSETS}/images/illustrations/404.gif`}
            draggable={false}
            height={200}
            width={200}
            // alt={TAPE_APP_NAME}
          /> */}
            <Text fontSize={30} fontWeight="bold">
              ZEUS WALLET
            </Text>
          </Box>
          <Text className="text-4xl font-bold">404</Text>
          <Box className="mb-6">This page could not be found.</Box>
          <Link href="/">
            <Button variant="surface">Go Home</Button>
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export default Custom404;
