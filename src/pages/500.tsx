import { Box, Button, Flex, Image, Text, Center } from '@chakra-ui/react';
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
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
          <Text className="text-4xl font-bold">Looks like something went wrong!</Text>
          <Box className="mb-6">
            We track these errors automatically, but if the problem persists feel free to contact us. In the meantime,
            try refreshing.
          </Box>
          <Link href="/">
            <Button variant="surface">Go Home</Button>
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export default Custom404;
