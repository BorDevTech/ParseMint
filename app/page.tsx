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
import Link from 'next/link';

export default function Home() {
  return (
    <Box minH="100vh" bgGradient="linear(to-br, blue.50, teal.50)">
      <Container maxW="container.xl" py={8}>
        <Flex direction="column" gap={12}>
          {/* Hero Section */}
          <Flex direction="column" gap={6} textAlign="center" align="center">
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, brand.400, secondary.500)"
              bgClip="text"
              fontWeight="bold"
            >
              ParseMint
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" lineHeight="1.6">
              Digital rewards platform that accepts receipts and provides monetary value points to users.
              Turn your everyday purchases into valuable rewards!
            </Text>
            <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
              <Link href="/signup">
                <Button 
                  colorScheme="brand" 
                  size="lg"
                  bg="accent.500"
                  _hover={{ bg: 'accent.600', transform: 'translateY(-2px)' }}
                  shadow="lg"
                  _active={{ transform: 'translateY(0)' }}
                  transition="all 0.2s"
                >
                  Get Started
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                borderColor="secondary.400"
                color="secondary.600"
                _hover={{ 
                  bg: 'secondary.50', 
                  borderColor: 'secondary.500',
                  transform: 'translateY(-2px)' 
                }}
                transition="all 0.2s"
              >
                Learn More
              </Button>
            </Flex>
          </Flex>

          {/* Features Section */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box 
              bg="white" 
              p={8} 
              borderRadius="xl" 
              shadow="xl" 
              h="full"
              border="1px"
              borderColor="brand.100"
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
                  bg="brand.100"
                  border="2px"
                  borderColor="brand.300"
                >
                  <Icon as={MdReceipt} boxSize={8} color="brand.600" />
                </Box>
                <Heading size="md" color="gray.800">Upload Receipts</Heading>
                <Text color="gray.600">
                  Simply snap a photo of your receipt and upload it to our platform.
                  Our advanced parsing technology extracts all the details.
                </Text>
              </Flex>
            </Box>

            <Box 
              bg="white" 
              p={8} 
              borderRadius="xl" 
              shadow="xl" 
              h="full"
              border="1px"
              borderColor="secondary.100"
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
                  bg="secondary.100"
                  border="2px"
                  borderColor="secondary.300"
                >
                  <Icon as={MdStars} boxSize={8} color="secondary.600" />
                </Box>
                <Heading size="md" color="gray.800">Earn Points</Heading>
                <Text color="gray.600">
                  Every purchase earns you valuable points based on the amount spent
                  and participating merchants.
                </Text>
              </Flex>
            </Box>

            <Box 
              bg="white" 
              p={8} 
              borderRadius="xl" 
              shadow="xl" 
              h="full"
              border="1px"
              borderColor="premium.100"
              _hover={{ 
                transform: 'translateY(-4px)',
                shadow: '2xl',
                borderColor: 'premium.300'
              }}
              transition="all 0.3s"
            >
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Box
                  p={3}
                  borderRadius="full"
                  bg="premium.100"
                  border="2px"
                  borderColor="premium.300"
                >
                  <Icon as={MdAccountBalanceWallet} boxSize={8} color="premium.600" />
                </Box>
                <Heading size="md" color="gray.800">Redeem Rewards</Heading>
                <Text color="gray.600">
                  Convert your points into cash, gift cards, or exclusive deals
                  from our partner network.
                </Text>
              </Flex>
            </Box>
          </SimpleGrid>

          {/* CTA Section */}
          <Box 
            textAlign="center" 
            py={12}
            px={8}
            bgGradient="linear(to-r, brand.500, secondary.500)"
            borderRadius="2xl"
            color="white"
            shadow="2xl"
          >
            <Flex direction="column" gap={6} align="center">
              <Heading size="xl" fontWeight="bold">Ready to start earning?</Heading>
              <Text fontSize="lg" opacity={0.9} maxW="2xl">
                Join thousands of users who are already maximizing their purchase rewards.
              </Text>
              <Link href="/signup">
                <Button 
                  bg="highlight.500"
                  color="gray.800"
                  size="lg"
                  fontWeight="bold"
                  _hover={{ 
                    bg: 'highlight.400',
                    transform: 'translateY(-2px)',
                    shadow: 'xl'
                  }}
                  _active={{ transform: 'translateY(0)' }}
                  transition="all 0.2s"
                  px={8}
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
