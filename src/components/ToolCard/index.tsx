import { LinkIcon } from '@chakra-ui/icons';
import { Heading, Avatar, Box, Center, Image, Flex, Text, Stack, Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const ToolCard = () => {
  return (
    <Box
      width={500}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      p={6}
      mx={3}
      my={5}
    >
      <Flex>
        <Image
          src="https://krperkqbaqewikgzuoea.supabase.co/storage/v1/object/public/logos/uniswap.jpeg"
          alt="image"
          width={70}
          height={70}
          borderRadius={10}
        />
        <Flex flexDirection={'column'} ml={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} mb={2}>
            Uniswap
          </Heading>
          <Link href={''}>
            <Flex alignItems={'center'} color={useColorModeValue('gray.900', 'green.400')}>
              <LinkIcon boxSize={3} />
              <Text fontSize={'12'} ml={1} fontWeight={'bold'}>
                Website
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Box>
        <Stack spacing={0} mt={5}>
          <Text color={useColorModeValue('', 'gray.100')}>
            Uniswap is a protocol for trading and automated liquidity provision on ethereum.
          </Text>
        </Stack>

        <Stack>
          <Text my={3} color={'gray.500'} fontWeight="bold">
            Social
          </Text>
          <Flex>
            <Link href={''}>
              <Flex alignItems={'center'} mr={5} color={useColorModeValue('gray.900', 'green.400')}>
                <LinkIcon boxSize={3} />
                <Text ml={1} fontSize={12}>
                  X
                </Text>
              </Flex>
            </Link>
            <Link href={''}>
              <Flex alignItems={'center'} mr={5} color={useColorModeValue('gray.900', 'green.400')}>
                <LinkIcon boxSize={3} />
                <Text ml={1} fontSize={12}>
                  X
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Text my={3} color={'gray.500'} fontWeight="bold">
            Network
          </Text>
          <Flex flexWrap={'wrap'}>
            <Flex
              width={100}
              height={6}
              borderRadius={5}
              bg={useColorModeValue('#151f21', 'gray.800')}
              alignItems={'center'}
              justifyContent={'center'}
              mr={2}
              mb={2}
            >
              <Text color={'white'} fontSize={12}>
                Ethereum
              </Text>
            </Flex>
          </Flex>
        </Stack>

        <Button
          w={'full'}
          mt={8}
          bg={useColorModeValue('#151f21', 'gray.800')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          onClick={() => {
            window.location.href = '#';
          }}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

export default ToolCard;
