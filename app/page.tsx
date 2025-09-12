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
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        <Flex direction="column" gap={12}>
          {/* Hero Section */}
          <Flex direction="column" gap={6} textAlign="center" align="center">
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              ParseMint
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Digital rewards platform that accepts receipts and provides monetary value points to users.
              Turn your everyday purchases into valuable rewards!
            </Text>
            <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
              <Link href="/signup">
                <Button colorScheme="teal" size="lg">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Flex>
          </Flex>

          {/* Features Section */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box bg="white" p={8} borderRadius="lg" shadow="md" h="full">
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Icon as={MdReceipt} boxSize={12} color="teal.500" />
                <Heading size="md">Upload Receipts</Heading>
                <Text color="gray.600">
                  Simply snap a photo of your receipt and upload it to our platform.
                  Our advanced parsing technology extracts all the details.
                </Text>
              </Flex>
            </Box>

            <Box bg="white" p={8} borderRadius="lg" shadow="md" h="full">
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Icon as={MdStars} boxSize={12} color="blue.500" />
                <Heading size="md">Earn Points</Heading>
                <Text color="gray.600">
                  Every purchase earns you valuable points based on the amount spent
                  and participating merchants.
                </Text>
              </Flex>
            </Box>

            <Box bg="white" p={8} borderRadius="lg" shadow="md" h="full">
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Icon as={MdAccountBalanceWallet} boxSize={12} color="purple.500" />
                <Heading size="md">Redeem Rewards</Heading>
                <Text color="gray.600">
                  Convert your points into cash, gift cards, or exclusive deals
                  from our partner network.
                </Text>
              </Flex>
            </Box>
          </SimpleGrid>

          {/* CTA Section */}
          <Box textAlign="center" py={8}>
            <Flex direction="column" gap={4} align="center">
              <Heading size="lg">Ready to start earning?</Heading>
              <Text color="gray.600">
                Join thousands of users who are already maximizing their purchase rewards.
              </Text>
              <Link href="/signup">
                <Button colorScheme="teal" size="lg">
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
