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
  NativeSelectRoot,
  NativeSelectField,
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
  const bgColor = isActive ? 'brand.50' : 'transparent';
  const textColor = isActive ? 'brand.700' : 'gray.600';
  const borderColor = 'brand.500';
  const iconColor = isActive ? 'brand.600' : 'gray.500';

  return (
    <Button
      justifyContent="flex-start"
      variant="ghost"
      w="full"
      h="14"
      bg={bgColor}
      color={textColor}
      borderLeft={isActive ? '4px solid' : '4px solid transparent'}
      borderLeftColor={isActive ? borderColor : 'transparent'}
      borderRadius="md"
      mx={1}
      my={0.5}
      fontWeight={isActive ? "semibold" : "medium"}
      fontSize="sm"
      _hover={{
        bg: 'brand.50',
        color: 'brand.700',
        transform: 'translateX(4px)',
        shadow: 'sm',
      }}
      transition="all 0.2s ease"
      onClick={onClick}
    >
      <HStack gap={3} align="center">
        <Icon as={icon} boxSize={5} color={iconColor} />
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
      <Box textAlign="center" mb={4}>
        <Heading as="h1" size="2xl" color="gray.800" mb={3} fontWeight="bold">
          Dashboard Overview
        </Heading>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          Welcome back! Here&apos;s your account overview.
        </Text>
        <Box h="3px" bg="brand.500" w="120px" mx="auto" borderRadius="full" mt={4} />
      </Box>

      {/* Stats Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        <Box 
          bg="gradient-to-br from-white to-brand.25" 
          p={6} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="brand.500"
          border="1px"
          borderColor="brand.100"
          _hover={{ 
            transform: 'translateY(-2px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <Flex align="center" gap={3} mb={4}>
            <Icon as={MdReceipt} boxSize={10} color="brand.500" />
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="gray.600" textTransform="uppercase" letterSpacing="wide">
                Receipts Uploaded
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color="brand.600">
                24
              </Text>
              <Text fontSize="sm" color="green.500" fontWeight="medium">
                +3 this week
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box 
          bg="gradient-to-br from-white to-secondary.25" 
          p={6} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="secondary.500"
          border="1px"
          borderColor="secondary.100"
          _hover={{ 
            transform: 'translateY(-2px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <Flex align="center" gap={3} mb={4}>
            <Icon as={MdStars} boxSize={10} color="secondary.500" />
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="gray.600" textTransform="uppercase" letterSpacing="wide">
                Points Earned
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color="secondary.600">
                1,247
              </Text>
              <Text fontSize="sm" color="green.500" fontWeight="medium">
                +156 this week
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box 
          bg="gradient-to-br from-white to-accent.25" 
          p={6} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="accent.500"
          border="1px"
          borderColor="accent.100"
          _hover={{ 
            transform: 'translateY(-2px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <Flex align="center" gap={3} mb={4}>
            <Icon as={MdAccountBalanceWallet} boxSize={10} color="accent.500" />
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="gray.600" textTransform="uppercase" letterSpacing="wide">
                Cash Value
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color="accent.600">
                $12.47
              </Text>
              <Text fontSize="sm" color="gray.500" fontWeight="medium">
                Ready to redeem
              </Text>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>

      {/* Action Cards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box 
          bg="gradient-to-br from-brand.500 to-brand.600" 
          p={8} 
          borderRadius="xl" 
          shadow="xl" 
          color="white"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'white',
            opacity: 0.1,
            bgImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px)',
            bgSize: '20px 20px',
          }}
        >
          <Flex direction="column" gap={4} align="center" textAlign="center" position="relative" zIndex={1}>
            <Icon as={MdReceipt} boxSize={14} color="white" />
            <Heading as="h3" size="lg" fontWeight="bold">Upload New Receipt</Heading>
            <Text fontSize="lg" opacity={0.9}>
              Snap a photo of your latest receipt to earn more points.
            </Text>
            <Button 
              colorScheme="whiteAlpha" 
              bg="white" 
              color="brand.600" 
              size="lg"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-2px)',
                shadow: 'xl'
              }}
              transition="all 0.2s"
            >
              Upload Receipt
            </Button>
          </Flex>
        </Box>

        <Box 
          bg="gradient-to-br from-secondary.500 to-secondary.600" 
          p={8} 
          borderRadius="xl" 
          shadow="xl" 
          color="white"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'white',
            opacity: 0.1,
            bgImage: 'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            bgSize: '20px 20px',
          }}
        >
          <Flex direction="column" gap={4} align="center" textAlign="center" position="relative" zIndex={1}>
            <Icon as={MdAccountBalanceWallet} boxSize={14} color="white" />
            <Heading as="h3" size="lg" fontWeight="bold">Redeem Rewards</Heading>
            <Text fontSize="lg" opacity={0.9}>
              Convert your points into cash or gift cards.
            </Text>
            <Button 
              colorScheme="whiteAlpha" 
              bg="white" 
              color="secondary.600" 
              size="lg"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-2px)',
                shadow: 'xl'
              }}
              transition="all 0.2s"
            >
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
      <Box textAlign="center" mb={4}>
        <Heading as="h1" size="2xl" color="gray.800" mb={3} fontWeight="bold">
          Redeem Rewards
        </Heading>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          Exchange your points for cash, gift cards, and exclusive rewards.
        </Text>
        <Box h="3px" bg="secondary.500" w="140px" mx="auto" borderRadius="full" mt={4} />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        <Box 
          bg="gradient-to-br from-white to-green.25" 
          p={6} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="green.500"
          border="1px"
          borderColor="green.100"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={4}>
            <Icon as={MdAccountBalanceWallet} boxSize={14} color="green.500" />
            <Heading as="h3" size="lg" fontWeight="bold" color="gray.800">PayPal Cash</Heading>
            <Text color="gray.600" textAlign="center" fontSize="md">
              Direct cash transfer to your PayPal account
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="medium">
              Minimum: 1,000 points = $10
            </Text>
            <Button 
              colorScheme="green" 
              size="lg" 
              w="full"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
              Redeem Now
            </Button>
          </VStack>
        </Box>

        <Box 
          bg="gradient-to-br from-white to-orange.25" 
          p={6} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="orange.500"
          border="1px"
          borderColor="orange.100"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={4}>
            <Icon as={MdLocalOffer} boxSize={14} color="orange.500" />
            <Heading as="h3" size="lg" fontWeight="bold" color="gray.800">Amazon Gift Card</Heading>
            <Text color="gray.600" textAlign="center" fontSize="md">
              Get Amazon gift cards for online shopping
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="medium">
              Available: $5, $10, $25, $50
            </Text>
            <Button 
              colorScheme="orange" 
              size="lg" 
              w="full"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
              Redeem Now
            </Button>
          </VStack>
        </Box>

        <Box 
          bg="gradient-to-br from-white to-purple.25" 
          p={6} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="purple.500"
          border="1px"
          borderColor="purple.100"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={4}>
            <Icon as={MdStars} boxSize={14} color="purple.500" />
            <Heading as="h3" size="lg" fontWeight="bold" color="gray.800">Store Credit</Heading>
            <Text color="gray.600" textAlign="center" fontSize="md">
              Use credit at participating retail partners
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="medium">
              500 points = $5 credit
            </Text>
            <Button 
              colorScheme="purple" 
              size="lg" 
              w="full"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
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
      <Box textAlign="center" mb={4}>
        <Heading as="h1" size="2xl" color="gray.800" mb={3} fontWeight="bold">
          My Receipts
        </Heading>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          Track your uploaded receipts and manage your spending digitally.
        </Text>
        <Box h="3px" bg="brand.500" w="100px" mx="auto" borderRadius="full" mt={4} />
      </Box>

      <HStack justify="space-between" wrap="wrap" bg="gradient-to-r from-white to-brand.25" p={4} borderRadius="xl" shadow="lg" border="1px" borderColor="brand.100">
        <Button 
          colorScheme="brand" 
          size="lg"
          fontWeight="bold"
          _hover={{ 
            transform: 'translateY(-1px)',
            shadow: 'lg'
          }}
        >
          <HStack gap={2}>
            <Icon as={MdReceipt} />
            <Text>Upload New Receipt</Text>
          </HStack>
        </Button>
        <HStack bg="gray.50" p={3} borderRadius="lg" border="1px" borderColor="gray.200">
          <Text fontSize="sm" color="gray.700" fontWeight="semibold">Sort by:</Text>
          <NativeSelectRoot size="sm">
            <NativeSelectField
              bg="white"
              borderColor="gray.200"
              _hover={{ borderColor: "brand.400" }}
              _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
              fontWeight="medium"
            >
              <option>Recent</option>
              <option>Amount</option>
              <option>Store</option>
            </NativeSelectField>
          </NativeSelectRoot>
        </HStack>
      </HStack>

      <VStack gap={4} align="stretch">
        {[1, 2, 3, 4, 5].map((item) => (
          <Box 
            key={item} 
            bg="gradient-to-r from-white to-brand.25" 
            p={6} 
            borderRadius="xl" 
            shadow="xl"
            borderLeft="4px"
            borderLeftColor="brand.500"
            border="1px"
            borderColor="brand.100"
            _hover={{ 
              transform: 'translateX(4px)',
              shadow: '2xl'
            }}
            transition="all 0.2s"
          >
            <Flex justify="space-between" align="center">
              <HStack gap={4}>
                <Icon as={MdReceipt} boxSize={10} color="brand.500" />
                <Box>
                  <Text fontWeight="bold" color="gray.800" fontSize="lg">
                    Target Store #{item}
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="medium">
                    {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </Text>
                </Box>
              </HStack>
              <VStack align="end" gap={1}>
                <Text fontWeight="bold" color="gray.800" fontSize="xl">
                  ${(Math.random() * 100 + 10).toFixed(2)}
                </Text>
                <Text fontSize="sm" color="green.600" fontWeight="bold">
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
      <Box textAlign="center" mb={4}>
        <Heading as="h1" size="2xl" color="gray.800" mb={3} fontWeight="bold">
          Promotions & Offers
        </Heading>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          Discover special offers and bonus point opportunities.
        </Text>
        <Box h="3px" bg="accent.500" w="160px" mx="auto" borderRadius="full" mt={4} />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box 
          bg="gradient-to-br from-purple.500 to-pink.500" 
          p={8} 
          borderRadius="xl" 
          shadow="xl" 
          color="white"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'white',
            opacity: 0.1,
            bgImage: 'radial-gradient(circle at 30% 70%, white 2px, transparent 2px)',
            bgSize: '30px 30px',
          }}
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={4} align="start" position="relative" zIndex={1}>
            <Icon as={MdStars} boxSize={12} />
            <Heading as="h3" size="lg" fontWeight="bold">Double Points Weekend!</Heading>
            <Text fontSize="lg" opacity={0.9}>
              Earn 2x points on all grocery receipts this weekend.
            </Text>
            <Button 
              bg="white" 
              color="purple.500" 
              size="lg"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
              Learn More
            </Button>
          </VStack>
        </Box>

        <Box 
          bg="gradient-to-br from-green.500 to-teal.500" 
          p={8} 
          borderRadius="xl" 
          shadow="xl" 
          color="white"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'white',
            opacity: 0.1,
            bgImage: 'radial-gradient(circle at 70% 30%, white 2px, transparent 2px)',
            bgSize: '25px 25px',
          }}
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={4} align="start" position="relative" zIndex={1}>
            <Icon as={MdLocalOffer} boxSize={12} />
            <Heading as="h3" size="lg" fontWeight="bold">New Store Bonus</Heading>
            <Text fontSize="lg" opacity={0.9}>
              Get 500 bonus points when you upload your first receipt from a new store.
            </Text>
            <Button 
              bg="white" 
              color="green.500" 
              size="lg"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
              Get Started
            </Button>
          </VStack>
        </Box>

        <Box 
          bg="gradient-to-br from-blue.500 to-indigo.500" 
          p={8} 
          borderRadius="xl" 
          shadow="xl" 
          color="white"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'white',
            opacity: 0.1,
            bgImage: 'radial-gradient(circle at 80% 80%, white 2px, transparent 2px)',
            bgSize: '28px 28px',
          }}
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={4} align="start" position="relative" zIndex={1}>
            <Icon as={MdGroup} boxSize={12} />
            <Heading as="h3" size="lg" fontWeight="bold">Friend Referral</Heading>
            <Text fontSize="lg" opacity={0.9}>
              Invite friends and get 1,000 points for each successful referral.
            </Text>
            <Button 
              bg="white" 
              color="blue.500" 
              size="lg"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
              Invite Friends
            </Button>
          </VStack>
        </Box>

        <Box 
          bg="gradient-to-br from-orange.500 to-red.500" 
          p={8} 
          borderRadius="xl" 
          shadow="xl" 
          color="white"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'white',
            opacity: 0.1,
            bgImage: 'radial-gradient(circle at 20% 20%, white 2px, transparent 2px)',
            bgSize: '32px 32px',
          }}
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={4} align="start" position="relative" zIndex={1}>
            <Icon as={MdReceipt} boxSize={12} />
            <Heading as="h3" size="lg" fontWeight="bold">Monthly Challenge</Heading>
            <Text fontSize="lg" opacity={0.9}>
              Upload 20 receipts this month and earn a 2,000 point bonus.
            </Text>
            <Button 
              bg="white" 
              color="orange.500" 
              size="lg"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
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
      <Box textAlign="center" mb={4}>
        <Heading as="h1" size="2xl" color="gray.800" mb={3} fontWeight="bold">
          Referrals & Bonuses
        </Heading>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          Invite friends and family to earn bonus rewards together.
        </Text>
        <Box h="3px" bg="premium.500" w="150px" mx="auto" borderRadius="full" mt={4} />
      </Box>

      <Box 
        bg="gradient-to-br from-brand.500 to-secondary.500" 
        p={10} 
        borderRadius="xl" 
        shadow="xl"
        color="white"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'white',
          opacity: 0.1,
          bgImage: 'radial-gradient(circle at 40% 60%, white 3px, transparent 3px)',
          bgSize: '40px 40px',
        }}
      >
        <VStack gap={6} position="relative" zIndex={1}>
          <Icon as={MdGroup} boxSize={20} color="white" />
          <Heading as="h2" size="xl" textAlign="center" fontWeight="bold">
            Invite Friends & Earn Together
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="2xl" opacity={0.9}>
            Share ParseMint with your friends and family. When they join and upload their first receipt, 
            you both get 1,000 bonus points!
          </Text>
          
          <HStack gap={4} w="full" maxW="md">
            <input
              type="text"
              placeholder="Enter friend's email"
              style={{
                flex: 1,
                padding: '16px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '500',
                outline: 'none',
              }}
            />
            <Button 
              bg="white" 
              color="brand.600" 
              size="lg"
              fontWeight="bold"
              px={8}
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
            >
              Send Invite
            </Button>
          </HStack>
        </VStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box 
          bg="gradient-to-br from-white to-brand.25" 
          p={8} 
          borderRadius="xl" 
          shadow="xl"
          borderTop="4px"
          borderTopColor="brand.500"
          border="1px"
          borderColor="brand.100"
          _hover={{ 
            transform: 'translateY(-2px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={6}>
            <Heading as="h3" size="lg" color="gray.800" fontWeight="bold">
              Your Referral Stats
            </Heading>
            <SimpleGrid columns={2} gap={6} w="full">
              <Box textAlign="center">
                <Text fontSize="5xl" fontWeight="bold" color="brand.600">
                  3
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
                  Friends Invited
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="5xl" fontWeight="bold" color="green.600">
                  2
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
                  Successfully Joined
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        <Box 
          bg="gradient-to-br from-white to-premium.25" 
          p={8} 
          borderRadius="xl" 
          shadow="xl"
          borderTop="4px"
          borderTopColor="premium.500"
          border="1px"
          borderColor="premium.100"
          _hover={{ 
            transform: 'translateY(-2px)',
            shadow: '2xl'
          }}
          transition="all 0.3s"
        >
          <VStack gap={6}>
            <Heading as="h3" size="lg" color="gray.800" fontWeight="bold">
              Bonus Points Earned
            </Heading>
            <Text fontSize="6xl" fontWeight="bold" color="premium.600">
              2,000
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center" fontWeight="medium">
              Total points earned from referrals this month
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

export default function DashboardPage() {
  const { isAuthenticated, currentUser, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Only redirect if not loading and not authenticated
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  // Show loading state while authentication is being determined
  if (loading) {
    return (
      <Box 
        minH="100vh" 
        bg="gray.50" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <VStack gap={4}>
          <Box 
            w="12" 
            h="12" 
            border="4px solid" 
            borderColor="teal.200" 
            borderTopColor="teal.500" 
            borderRadius="full" 
            animation="spin 1s linear infinite"
          />
          <Text color="gray.600">Loading...</Text>
        </VStack>
      </Box>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
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
          shadow="lg"
          bgGradient="linear(to-b, white, brand.25)"
        >
          <VStack gap={2} align="stretch" px={4}>
            {/* ParseMint Brand - Centered above Dashboard */}
            <Box mb={6} textAlign="center" px={2}>
              <Heading
                as="h1"
                size="xl"
                className="brand-gradient"
                fontWeight="bold"
                fontSize="2xl"
                letterSpacing="tight"
                mb={4}
              >
                ParseMint
              </Heading>
              <Box h="2px" bg="brand.500" w="70%" mx="auto" borderRadius="full" mb={4} />
              <Heading as="h2" size="md" color="gray.700" mb={2} fontWeight="bold">
                Dashboard
              </Heading>
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
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
        <Box flex="1" p={8} overflowY="auto" bg="gray.25">
          <Container maxW="container.xl" centerContent>
            <Box w="full" maxW="container.lg">
              {renderTabContent()}
            </Box>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}