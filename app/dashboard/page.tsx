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
  VStack,
  HStack,
} from '@chakra-ui/react';
import { 
  MdReceipt, 
  MdStars, 
  MdAccountBalanceWallet,
  MdDashboard,
  MdRedeem,
  MdDescription,
  MdLocalOffer,
  MdGroup,
} from 'react-icons/md';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({ icon, label, isActive, onClick }: SidebarItemProps) {
  const bgColor = isActive ? 'teal.50' : 'transparent';
  const textColor = isActive ? 'teal.700' : 'gray.600';
  const borderColor = 'teal.500';

  return (
    <Button
      justifyContent="flex-start"
      variant="ghost"
      w="full"
      h="12"
      bg={bgColor}
      color={textColor}
      borderLeft={isActive ? '3px solid' : '3px solid transparent'}
      borderLeftColor={isActive ? borderColor : 'transparent'}
      borderRadius="0"
      _hover={{
        bg: 'teal.50',
        color: 'teal.700',
      }}
      onClick={onClick}
    >
      <HStack gap={2} align="center">
        <Icon as={icon} />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
}

// Dashboard tab components
function OverviewTab() {
  return (
    <VStack gap={8} align="stretch">
      {/* Header */}
      <Box>
        <Heading size="xl" color="gray.700" mb={2}>
          Dashboard Overview
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
    </VStack>
  );
}

function RedeemTab() {
  return (
    <VStack gap={8} align="stretch">
      <Box>
        <Heading size="xl" color="gray.700" mb={2}>
          Redeem Rewards
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Exchange your points for cash, gift cards, and exclusive rewards.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        <Box bg="white" p={6} borderRadius="lg" shadow="md">
          <VStack gap={4}>
            <Icon as={MdAccountBalanceWallet} boxSize={12} color="green.500" />
            <Heading size="md">PayPal Cash</Heading>
            <Text color="gray.600" textAlign="center">
              Direct cash transfer to your PayPal account
            </Text>
            <Text fontSize="sm" color="gray.500">
              Minimum: 1,000 points = $10
            </Text>
            <Button colorScheme="green" size="md" w="full">
              Redeem Now
            </Button>
          </VStack>
        </Box>

        <Box bg="white" p={6} borderRadius="lg" shadow="md">
          <VStack gap={4}>
            <Icon as={MdLocalOffer} boxSize={12} color="orange.500" />
            <Heading size="md">Amazon Gift Card</Heading>
            <Text color="gray.600" textAlign="center">
              Get Amazon gift cards for online shopping
            </Text>
            <Text fontSize="sm" color="gray.500">
              Available: $5, $10, $25, $50
            </Text>
            <Button colorScheme="orange" size="md" w="full">
              Redeem Now
            </Button>
          </VStack>
        </Box>

        <Box bg="white" p={6} borderRadius="lg" shadow="md">
          <VStack gap={4}>
            <Icon as={MdStars} boxSize={12} color="purple.500" />
            <Heading size="md">Store Credit</Heading>
            <Text color="gray.600" textAlign="center">
              Use credit at participating retail partners
            </Text>
            <Text fontSize="sm" color="gray.500">
              500 points = $5 credit
            </Text>
            <Button colorScheme="purple" size="md" w="full">
              Redeem Now
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

function ReceiptsTab() {
  return (
    <VStack gap={8} align="stretch">
      <Box>
        <Heading size="xl" color="gray.700" mb={2}>
          My Receipts
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Track your uploaded receipts and manage your spending digitally.
        </Text>
      </Box>

      <HStack justify="space-between" wrap="wrap">
        <Button colorScheme="teal">
          <HStack gap={2}>
            <Icon as={MdReceipt} />
            <Text>Upload New Receipt</Text>
          </HStack>
        </Button>
        <HStack>
          <Text fontSize="sm" color="gray.600">Sort by:</Text>
          <select style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #E2E8F0' }}>
            <option>Recent</option>
            <option>Amount</option>
            <option>Store</option>
          </select>
        </HStack>
      </HStack>

      <VStack gap={4} align="stretch">
        {[1, 2, 3, 4, 5].map((item) => (
          <Box key={item} bg="white" p={6} borderRadius="lg" shadow="md">
            <Flex justify="space-between" align="center">
              <HStack gap={4}>
                <Icon as={MdReceipt} boxSize={8} color="teal.500" />
                <Box>
                  <Text fontWeight="bold" color="gray.700">
                    Target Store #{item}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </Text>
                </Box>
              </HStack>
              <VStack align="end" gap={1}>
                <Text fontWeight="bold" color="gray.700">
                  ${(Math.random() * 100 + 10).toFixed(2)}
                </Text>
                <Text fontSize="sm" color="green.600">
                  +{Math.floor(Math.random() * 50 + 10)} points
                </Text>
              </VStack>
            </Flex>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
}

function PromotionsTab() {
  return (
    <VStack gap={8} align="stretch">
      <Box>
        <Heading size="xl" color="gray.700" mb={2}>
          Promotions & Offers
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Discover special offers and bonus point opportunities.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box bg="gradient-to-r from-purple-500 to-pink-500" p={6} borderRadius="lg" shadow="md" color="white">
          <VStack gap={4} align="start">
            <Icon as={MdStars} boxSize={10} />
            <Heading size="md">Double Points Weekend!</Heading>
            <Text>
              Earn 2x points on all grocery receipts this weekend.
            </Text>
            <Button bg="white" color="purple.500" size="md">
              Learn More
            </Button>
          </VStack>
        </Box>

        <Box bg="gradient-to-r from-green-500 to-teal-500" p={6} borderRadius="lg" shadow="md" color="white">
          <VStack gap={4} align="start">
            <Icon as={MdLocalOffer} boxSize={10} />
            <Heading size="md">New Store Bonus</Heading>
            <Text>
              Get 500 bonus points when you upload your first receipt from a new store.
            </Text>
            <Button bg="white" color="green.500" size="md">
              Get Started
            </Button>
          </VStack>
        </Box>

        <Box bg="gradient-to-r from-blue-500 to-indigo-500" p={6} borderRadius="lg" shadow="md" color="white">
          <VStack gap={4} align="start">
            <Icon as={MdGroup} boxSize={10} />
            <Heading size="md">Friend Referral</Heading>
            <Text>
              Invite friends and get 1,000 points for each successful referral.
            </Text>
            <Button bg="white" color="blue.500" size="md">
              Invite Friends
            </Button>
          </VStack>
        </Box>

        <Box bg="gradient-to-r from-orange-500 to-red-500" p={6} borderRadius="lg" shadow="md" color="white">
          <VStack gap={4} align="start">
            <Icon as={MdReceipt} boxSize={10} />
            <Heading size="md">Monthly Challenge</Heading>
            <Text>
              Upload 20 receipts this month and earn a 2,000 point bonus.
            </Text>
            <Button bg="white" color="orange.500" size="md">
              Join Challenge
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

function ReferralsTab() {
  return (
    <VStack gap={8} align="stretch">
      <Box>
        <Heading size="xl" color="gray.700" mb={2}>
          Referrals & Bonuses
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Invite friends and family to earn bonus rewards together.
        </Text>
      </Box>

      <Box bg="white" p={8} borderRadius="lg" shadow="md">
        <VStack gap={6}>
          <Icon as={MdGroup} boxSize={16} color="teal.500" />
          <Heading size="lg" textAlign="center">
            Invite Friends & Earn Together
          </Heading>
          <Text color="gray.600" textAlign="center" maxW="2xl">
            Share ParseMint with your friends and family. When they join and upload their first receipt, 
            you both get 1,000 bonus points!
          </Text>
          
          <HStack gap={4} w="full" maxW="md">
            <input
              type="text"
              placeholder="Enter friend's email"
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                fontSize: '16px',
              }}
            />
            <Button colorScheme="teal" size="lg">
              Send Invite
            </Button>
          </HStack>
        </VStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box bg="white" p={6} borderRadius="lg" shadow="md">
          <VStack gap={4}>
            <Heading size="md" color="gray.700">
              Your Referral Stats
            </Heading>
            <SimpleGrid columns={2} gap={4} w="full">
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="teal.600">
                  3
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Friends Invited
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="green.600">
                  2
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Successfully Joined
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        <Box bg="white" p={6} borderRadius="lg" shadow="md">
          <VStack gap={4}>
            <Heading size="md" color="gray.700">
              Bonus Points Earned
            </Heading>
            <Text fontSize="4xl" fontWeight="bold" color="purple.600">
              2,000
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              Total points earned from referrals this month
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

export default function DashboardPage() {
  const { isAuthenticated, currentUser } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  const sidebarItems = [
    { id: 'overview', icon: MdDashboard, label: 'Overview' },
    { id: 'redeem', icon: MdRedeem, label: 'Redeem' },
    { id: 'receipts', icon: MdDescription, label: 'Receipts' },
    { id: 'promotions', icon: MdLocalOffer, label: 'Promotions' },
    { id: 'referrals', icon: MdGroup, label: 'Referrals & Bonus' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'redeem':
        return <RedeemTab />;
      case 'receipts':
        return <ReceiptsTab />;
      case 'promotions':
        return <PromotionsTab />;
      case 'referrals':
        return <ReferralsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <Box minH="100vh" bg="gray.50">
      <Flex h="100vh">
        {/* Sidebar */}
        <Box
          w="280px"
          bg="white"
          borderRight="1px solid"
          borderRightColor="gray.200"
          py={6}
          shadow="sm"
        >
          <VStack gap={2} align="stretch" px={4}>
            <Box mb={6} px={2}>
              <Heading size="md" color="gray.700" mb={2}>
                Dashboard
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Welcome, {currentUser?.fullName || 'User'}
              </Text>
            </Box>
            
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                isActive={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
              />
            ))}
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1" p={8} overflowY="auto">
          <Container maxW="container.xl">
            {renderTabContent()}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}