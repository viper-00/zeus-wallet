import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
      <Stack spacing={{ base: 8, md: 0 }} justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
        <Box maxW={400}>
          <Link href="/" isExternal>
            <Text fontSize={20} fontWeight={'bold'}>
              Zeus Wallet
            </Text>
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
            Developing the world&apos;s premier cryptocurrency wallet involves meticulously crafting a robust and
            user-friendly platform with cutting-edge security features and seamless transaction capabilities.
          </Text>
        </Box>
        <HStack spacing={20} justifyContent={{ sm: 'space-between', md: 'normal' }}>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Company
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>About Us</CustomLink>
              <CustomLink>Contact Us</CustomLink>
              <CustomLink>Terms & Privacy</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Support
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Request Form</CustomLink>
              <CustomLink>FAQ</CustomLink>
              <CustomLink>Glossary</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Socials
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>X (Twitter)</CustomLink>
              <CustomLink>Telegram</CustomLink>
              <CustomLink>Discord</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
        <Text fontSize="md">
          Built by{' '}
          <Link href="/" textDecoration="underline" _hover={{ textDecoration: 'underline' }} isExternal>
            Zeus Wallet
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;
