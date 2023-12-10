import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  FormControl,
  FormLabel,
  Switch,
  Stack,
  chakra,
  VisuallyHidden,
  Button,
  Select,
  Tooltip,
} from '@chakra-ui/react';
import { FiHome, FiMenu, FiBell, FiCreditCard, FiActivity, FiMinus, FiCopy } from 'react-icons/fi';
import { BsArrowDownLeftCircle, BsArrowUpRightCircle } from 'react-icons/bs';
import { BiLogoMedium } from 'react-icons/bi';
import { TbBuildingBridge2 } from 'react-icons/tb';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { RiNftFill, RiTwitterXFill, RiAddFill } from 'react-icons/ri';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineEye, AiOutlineTransaction } from 'react-icons/ai';
import { IconType } from 'react-icons';
import { FC, ReactNode, useEffect, useState } from 'react';
import { chainList } from 'packages/constants/chainlist';
import { formatEllipsisTxt } from 'utils/format';
import { useRouter } from 'next/router';
import { hydrateWallet, resetWallet } from 'lib/store/wallet';
import { Chain } from 'packages/types';
import { useColorMode } from '@chakra-ui/react';

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const OneLinkItems: Array<LinkItemProps> = [
  { name: 'Portfolio', icon: FiHome, link: '/portfolio' },
  // { name: 'Card', icon: FiCreditCard, link: '/card' },
  // { name: 'DeFi', icon: FiActivity, link: '/defi' },
  // { name: 'NFT', icon: RiNftFill, link: '/nft' },
  { name: 'Transactions', icon: AiOutlineTransaction, link: '/transactions' },
];

const TwoLinkItems: Array<LinkItemProps> = [
  { name: 'Send', icon: BsArrowUpRightCircle, link: '/send' },
  { name: 'Receive', icon: BsArrowDownLeftCircle, link: '/receive' },
  { name: 'Bridge', icon: TbBuildingBridge2, link: '/bridge' },
  { name: 'Swap', icon: MdOutlineSwapHoriz, link: '/swap' },
  // { name: 'Buy', icon: RiAddFill, link: '/buy' },
  // { name: 'Sell', icon: FiMinus, link: '/sell' },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'Gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex flexDirection={'column'} height={'100%'} justifyContent={'space-between'}>
        <Flex flexDirection={'column'}>
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Zeus Wallet
            </Text>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
          </Flex>

          {OneLinkItems.map((item) => (
            <NavItem
              marginBottom={1}
              backgroundColor={router.pathname === item.link ? '#0bc5ea' : ''}
              color={router.pathname === item.link ? 'white' : ''}
              key={item.name}
              icon={item.icon}
              onClick={() => {
                router.push(item.link);
              }}
            >
              {item.name}
            </NavItem>
          ))}

          <Flex
            h="20"
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Text>Action</Text>
          </Flex>

          {TwoLinkItems.map((item) => (
            <NavItem
              marginBottom={1}
              backgroundColor={router.pathname === item.link ? '#0bc5ea' : ''}
              color={router.pathname === item.link ? 'white' : ''}
              key={item.name}
              icon={item.icon}
              onClick={() => {
                router.push(item.link);
              }}
            >
              {item.name}
            </NavItem>
          ))}
        </Flex>

        <Box mb={10}>
          <Flex justifyContent={'center'} mt={10}>
            <Box>
              <FormControl display="flex" alignItems="center">
                <Switch
                  id="mode-switch"
                  size="md"
                  isChecked={colorMode === 'light' ? false : true}
                  onChange={toggleColorMode}
                />
                <FormLabel htmlFor="mode-switch" mb="0" ml={3}>
                  {colorMode.toUpperCase()}
                </FormLabel>
              </FormControl>
            </Box>
          </Flex>

          <Flex justifyContent={'center'} mt={5}>
            <Stack direction={'row'} spacing={1}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaDiscord />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <RiTwitterXFill />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaRedditAlien />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <BiLogoMedium />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <AiFillYoutube />
              </SocialButton>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box as="a" href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [address, setAddress] = useState<string>('');
  const [chain, setChain] = useState<Chain>();

  const router = useRouter();

  useEffect(() => {
    const wallet = hydrateWallet();
    setAddress(wallet.address);
    setChain(wallet.chain);
  }, []);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('#f4f5fe', 'Gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        ZEUS WALLET
      </Text>

      <Box width={'100%'}>
        <Flex alignItems={'center'} width={400}>
          <Select width={200} value={chain} backgroundColor={useColorModeValue('White', 'Gray.900')}>
            {/* <option value={}>All Networks</option> */}
            {chainList.map((item) => (
              <option key={item.chainId} value={item.chainId}>
                {item.name}
              </option>
            ))}
          </Select>
          <Box ml={4}>
            <Tooltip label="Copy">
              <Button
                px={4}
                fontSize={'sm'}
                rounded={'full'}
                bg={useColorModeValue('White', 'Gray.900')}
                color={useColorModeValue('Gray.900', 'White')}
                borderWidth={1}
                leftIcon={<FiBell />}
                rightIcon={<FiCopy />}
                onClick={async () => {
                  await navigator.clipboard.writeText(address);
                }}
                _hover={{
                  bg: useColorModeValue('White', 'Gray.900'),
                }}
                _focus={{
                  bg: useColorModeValue('White', 'Gray.900'),
                }}
              >
                <Text color={useColorModeValue('Gray.900', 'White')}>{formatEllipsisTxt(address)}</Text>
              </Button>
            </Tooltip>
          </Box>
        </Flex>
      </Box>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          aria-label="Search database"
          icon={<AiOutlineEye />}
          bg={useColorModeValue('White', 'Gray.900')}
          px={4}
          rounded={'full'}
          borderWidth={1}
          _hover={{
            bg: useColorModeValue('White', 'Gray.900'),
          }}
          _focus={{
            bg: useColorModeValue('White', 'Gray.900'),
          }}
        />
        <Button
          px={4}
          fontSize={'sm'}
          rounded={'full'}
          bg={useColorModeValue('White', 'Gray.900')}
          color={useColorModeValue('Gray.900', 'White')}
          borderWidth={1}
          leftIcon={<FiBell />}
          _hover={{
            bg: useColorModeValue('White', 'Gray.900'),
          }}
          _focus={{
            bg: useColorModeValue('White', 'Gray.900'),
          }}
          onClick={() => {
            resetWallet();
            router.push('/');
          }}
        >
          <Text color={useColorModeValue('Gray.900', 'White')}>Logout</Text>
        </Button>
        {/* <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'Gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex> */}
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader: FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH="100vh" bg={useColorModeValue('White', 'Gray.900')}>
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default SidebarWithHeader;
