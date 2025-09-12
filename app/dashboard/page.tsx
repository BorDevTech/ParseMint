'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  SimpleGrid,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { MdReceipt, MdStars, MdAccountBalanceWallet } from 'react-icons/md';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        <Flex direction="column" gap={8}>
          {/* Header */}
          <Box>
            <Heading size="xl" color="gray.700" mb={2}>
              Dashboard
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Welcome back! Here&apos;s your account overview.
            </Text>
          </Box>

          {/* Stats Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <Box bg="white" p={6} borderRadius="lg" shadow="md">
              <Flex align="center" gap={3} mb={4}>
                <Icon as={MdReceipt} boxSize={8} color="teal.500" />
                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    Receipts Uploaded
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold" color="teal.600">
                    24
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    +3 this week
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" shadow="md">
              <Flex align="center" gap={3} mb={4}>
                <Icon as={MdStars} boxSize={8} color="blue.500" />
                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    Points Earned
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                    1,247
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    +156 this week
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" shadow="md">
              <Flex align="center" gap={3} mb={4}>
                <Icon as={MdAccountBalanceWallet} boxSize={8} color="purple.500" />
                <Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    Cash Value
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold" color="purple.600">
                    $12.47
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Ready to redeem
                  </Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>

          {/* Action Cards */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            <Box bg="white" p={8} borderRadius="lg" shadow="md">
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Icon as={MdReceipt} boxSize={12} color="teal.500" />
                <Heading size="md">Upload New Receipt</Heading>
                <Text color="gray.600">
                  Snap a photo of your latest receipt to earn more points.
                </Text>
                <Button colorScheme="teal" size="lg">
                  Upload Receipt
                </Button>
              </Flex>
            </Box>

            <Box bg="white" p={8} borderRadius="lg" shadow="md">
              <Flex direction="column" gap={4} align="center" textAlign="center">
                <Icon as={MdAccountBalanceWallet} boxSize={12} color="purple.500" />
                <Heading size="md">Redeem Rewards</Heading>
                <Text color="gray.600">
                  Convert your points into cash or gift cards.
                </Text>
                <Button colorScheme="purple" size="lg">
                  View Rewards
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}