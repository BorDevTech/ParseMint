'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Icon,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { MdReceipt, MdStars, MdAccountBalanceWallet } from 'react-icons/md';
import { useTheme } from './contexts/ThemeContext';
import Link from 'next/link';

export default function Home() {
  const { theme } = useTheme();

  return (
    <Box 
      minH="100vh" 
      bgGradient={
        theme === 'light' 
          ? "linear(to-br, blue.50, teal.50)" 
          : "linear(to-br, gray.900, gray.800)"
      }
    >
      <Container maxW="container.xl" py={{ base: 6, md: 8 }}>
        <Flex direction="column" gap={{ base: 8, md: 12 }}>
          {/* Hero Section */}
          <Flex direction="column" gap={{ base: 4, md: 6 }} textAlign="center" align="center">
            <Heading
              as="h1"
              size={{ base: "2xl", sm: "3xl", md: "3xl" }}
              className="brand-gradient text-6xl font-extrabold mb-4"
              fontWeight="extrabold"
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            >
              ParseMint
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              color={theme === 'light' ? 'gray.600' : 'gray.300'} 
              maxW="2xl" 
              lineHeight="1.6"
              px={{ base: 4, md: 0 }}
            >
              Digital rewards platform that accepts receipts and provides monetary value points to users.
              Turn your everyday purchases into valuable rewards!
            </Text>
            <Flex direction={{ base: 'column', md: 'row' }} gap={4} w={{ base: "full", sm: "auto" }} px={{ base: 4, md: 0 }}>
              <Link href="/signup">
                <Button 
                  colorScheme="brand" 
                  size={{ base: "md", md: "lg" }}
                  bg="accent.500"
                  _hover={{ bg: 'accent.600', transform: 'translateY(-2px)' }}
                  shadow="lg"
                  _active={{ transform: 'translateY(0)' }}
                  transition="all 0.2s"
                  w={{ base: "full", md: "auto" }}
                >
                  Get Started
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size={{ base: "md", md: "lg" }}
                borderColor="secondary.400"
                color={theme === 'light' ? 'secondary.600' : 'secondary.300'}
                _hover={{ 
                  bg: theme === 'light' ? 'secondary.50' : 'secondary.900', 
                  borderColor: 'secondary.500',
                  transform: 'translateY(-2px)' 
                }}
                transition="all 0.2s"
                w={{ base: "full", md: "auto" }}
              >
                Learn More
              </Button>
            </Flex>
          </Flex>

          {/* Features Section */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
            <Box 
              bg={theme === 'light' ? 'white' : 'gray.700'} 
              p={{ base: 6, md: 8 }} 
              borderRadius="xl" 
              shadow="xl" 
              h="full"
              border="1px"
              borderColor={theme === 'light' ? 'brand.100' : 'brand.600'}
              _hover={{ 
                transform: 'translateY(-4px)',
                shadow: '2xl',
                borderColor: 'brand.300'
              }}
              transition="all 0.3s"
            >
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Box
                  p={3}
                  borderRadius="full"
                  bg={theme === 'light' ? 'brand.100' : 'brand.900'}
                  border="2px"
                  borderColor="brand.300"
                >
                  <Icon as={MdReceipt} boxSize={{ base: 6, md: 8 }} color="brand.600" />
                </Box>
                <Heading 
                  size={{ base: "sm", md: "md" }}
                  color={theme === 'light' ? 'gray.800' : 'gray.100'}
                >
                  Upload Receipts
                </Heading>
                <Text color={theme === 'light' ? 'gray.600' : 'gray.300'} fontSize={{ base: "sm", md: "md" }}>
                  Simply snap a photo of your receipt and upload it to our platform.
                  Our advanced parsing technology extracts all the details.
                </Text>
              </Flex>
            </Box>

            <Box 
              bg={theme === 'light' ? 'white' : 'gray.700'} 
              p={{ base: 6, md: 8 }} 
              borderRadius="xl" 
              shadow="xl" 
              h="full"
              border="1px"
              borderColor={theme === 'light' ? 'secondary.100' : 'secondary.600'}
              _hover={{ 
                transform: 'translateY(-4px)',
                shadow: '2xl',
                borderColor: 'secondary.300'
              }}
              transition="all 0.3s"
            >
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Box
                  p={3}
                  borderRadius="full"
                  bg={theme === 'light' ? 'secondary.100' : 'secondary.900'}
                  border="2px"
                  borderColor="secondary.300"
                >
                  <Icon as={MdStars} boxSize={{ base: 6, md: 8 }} color="secondary.600" />
                </Box>
                <Heading 
                  size={{ base: "sm", md: "md" }}
                  color={theme === 'light' ? 'gray.800' : 'gray.100'}
                >
                  Earn Points
                </Heading>
                <Text color={theme === 'light' ? 'gray.600' : 'gray.300'} fontSize={{ base: "sm", md: "md" }}>
                  Every purchase earns you valuable points based on the amount spent
                  and participating merchants.
                </Text>
              </Flex>
            </Box>

            <Box 
              bg={theme === 'light' ? 'white' : 'gray.700'} 
              p={{ base: 6, md: 8 }} 
              borderRadius="xl" 
              shadow="xl" 
              h="full"
              border="1px"
              borderColor={theme === 'light' ? 'premium.100' : 'premium.600'}
              _hover={{ 
                transform: 'translateY(-4px)',
                shadow: '2xl',
                borderColor: 'premium.300'
              }}
              transition="all 0.3s"
              gridColumn={{ base: "1", sm: "1 / -1", md: "auto" }}
            >
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Box
                  p={3}
                  borderRadius="full"
                  bg={theme === 'light' ? 'premium.100' : 'premium.900'}
                  border="2px"
                  borderColor="premium.300"
                >
                  <Icon as={MdAccountBalanceWallet} boxSize={{ base: 6, md: 8 }} color="premium.600" />
                </Box>
                <Heading 
                  size={{ base: "sm", md: "md" }}
                  color={theme === 'light' ? 'gray.800' : 'gray.100'}
                >
                  Redeem Rewards
                </Heading>
                <Text color={theme === 'light' ? 'gray.600' : 'gray.300'} fontSize={{ base: "sm", md: "md" }}>
                  Convert your points into cash, gift cards, or exclusive deals
                  from our partner network.
                </Text>
              </Flex>
            </Box>
          </SimpleGrid>

          {/* CTA Section */}
          <Box 
            textAlign="center" 
            py={{ base: 8, md: 12 }}
            px={{ base: 6, md: 8 }}
            bgGradient="linear(to-r, brand.500, secondary.500)"
            borderRadius="2xl"
            color="white"
            shadow="2xl"
          >
            <Flex direction="column" gap={{ base: 4, md: 6 }} align="center">
              <Heading size={{ base: "lg", md: "xl" }} fontWeight="bold">Ready to start earning?</Heading>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="2xl">
                Join thousands of users who are already maximizing their purchase rewards.
              </Text>
              <Link href="/signup">
                <Button 
                  bg="highlight.500"
                  color="gray.800"
                  size={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  _hover={{ 
                    bg: 'highlight.400',
                    transform: 'translateY(-2px)',
                    shadow: 'xl'
                  }}
                  _active={{ transform: 'translateY(0)' }}
                  transition="all 0.2s"
                  px={{ base: 6, md: 8 }}
                  w={{ base: "full", sm: "auto" }}
                >
                  Sign Up Now
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
