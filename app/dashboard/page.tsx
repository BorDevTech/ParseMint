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
  IconButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import { 
  MdReceipt, 
  MdStars, 
  MdAccountBalanceWallet,
  MdDashboard,
  MdRedeem,
  MdDescription,
  MdLocalOffer,
  MdGroup,
  MdMenu,
  MdClose,
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
  const bgColor = isActive ? 'whiteAlpha.200' : 'transparent';
  const textColor = isActive ? 'white' : 'whiteAlpha.800';
  const borderColor = 'white';
  const iconColor = isActive ? 'white' : 'whiteAlpha.700';

  return (
    <Button
      justifyContent="flex-start"
      variant="ghost"
      w="full"
      h={{ base: "12", md: "14" }}
      bg={bgColor}
      color={textColor}
      borderLeft={isActive ? '4px solid' : '4px solid transparent'}
      borderLeftColor={isActive ? borderColor : 'transparent'}
      borderRadius="md"
      mx={1}
      my={0.5}
      fontWeight={isActive ? "bold" : "medium"}
      fontSize={{ base: "sm", md: "sm" }}
      _hover={{
        bg: 'whiteAlpha.200',
        color: 'white',
        transform: 'translateX(4px)',
        shadow: 'lg',
      }}
      transition="all 0.2s ease"
      onClick={onClick}
    >
      <HStack gap={{ base: 2, md: 3 }} align="center">
        <Icon as={icon} boxSize={{ base: 4, md: 5 }} color={iconColor} />
        <Text fontSize={{ base: "sm", md: "md" }}>{label}</Text>
      </HStack>
    </Button>
  );
}

// Dashboard tab components
function OverviewTab() {
  return (
    <VStack gap={{ base: 6, md: 8 }} align="stretch">
      {/* Header */}
      <Box textAlign="center" mb={{ base: 2, md: 4 }}>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="gray.800" mb={3} fontWeight="bold">
          Dashboard Overview
        </Heading>
        <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
          Welcome back! Here&apos;s your account overview.
        </Text>
        <Box h="3px" bg="brand.500" w={{ base: "100px", md: "120px" }} mx="auto" borderRadius="full" mt={4} />
      </Box>

      {/* Stats Cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 4, md: 6 }}>
        <Card.Root 
          bgGradient="linear(to-br, brand.400, brand.600)" 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="white"
          border="2px"
          borderColor="brand.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, brand.500, brand.700)"
          }}
          transition="all 0.3s"
        >
          <Card.Body p={{ base: 4, md: 6 }}>
            <Flex align="center" gap={3} mb={4}>
              <Icon as={MdReceipt} boxSize={{ base: 8, md: 10 }} color="white" />
              <Box>
                <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold" color="whiteAlpha.800" textTransform="uppercase" letterSpacing="wide">
                  Receipts Uploaded
                </Text>
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="white">
                  24
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="green.200" fontWeight="medium">
                  +3 this week
                </Text>
              </Box>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root 
          bgGradient="linear(to-br, secondary.400, secondary.600)" 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="white"
          border="2px"
          borderColor="secondary.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, secondary.500, secondary.700)"
          }}
          transition="all 0.3s"
        >
          <Card.Body p={{ base: 4, md: 6 }}>
            <Flex align="center" gap={3} mb={4}>
              <Icon as={MdStars} boxSize={{ base: 8, md: 10 }} color="white" />
              <Box>
                <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold" color="whiteAlpha.800" textTransform="uppercase" letterSpacing="wide">
                  Points Earned
                </Text>
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="white">
                  1,247
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="green.200" fontWeight="medium">
                  +156 this week
                </Text>
              </Box>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root 
          bgGradient="linear(to-br, accent.400, accent.600)" 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="white"
          border="2px"
          borderColor="accent.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, accent.500, accent.700)"
          }}
          transition="all 0.3s"
          gridColumn={{ base: "1", sm: "1 / -1", md: "auto" }}
        >
          <Card.Body p={{ base: 4, md: 6 }}>
            <Flex align="center" gap={3} mb={4}>
              <Icon as={MdAccountBalanceWallet} boxSize={{ base: 8, md: 10 }} color="white" />
              <Box>
                <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold" color="whiteAlpha.800" textTransform="uppercase" letterSpacing="wide">
                  Cash Value
                </Text>
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="white">
                  $12.47
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="green.200" fontWeight="medium">
                  Ready to redeem
                </Text>
              </Box>
            </Flex>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>

      {/* Action Cards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
        <Card.Root 
          bg="gradient-to-br from-brand.500 to-brand.600" 
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
          <Card.Body p={{ base: 6, md: 8 }}>
            <Flex direction="column" gap={4} align="center" textAlign="center" position="relative" zIndex={1}>
              <Icon as={MdReceipt} boxSize={{ base: 10, md: 14 }} color="white" />
              <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold">Upload New Receipt</Heading>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
                Snap a photo of your latest receipt to earn more points.
              </Text>
              <Button 
                colorScheme="whiteAlpha" 
                bg="white" 
                color="brand.600" 
                size={{ base: "md", md: "lg" }}
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
          </Card.Body>
        </Card.Root>

        <Card.Root 
          bg="gradient-to-br from-secondary.500 to-secondary.600" 
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
          <Card.Body p={{ base: 6, md: 8 }}>
            <Flex direction="column" gap={4} align="center" textAlign="center" position="relative" zIndex={1}>
              <Icon as={MdAccountBalanceWallet} boxSize={{ base: 10, md: 14 }} color="white" />
              <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold">Redeem Rewards</Heading>
              <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
                Convert your points into cash or gift cards.
              </Text>
              <Button 
                colorScheme="whiteAlpha" 
                bg="white" 
                color="secondary.600" 
                size={{ base: "md", md: "lg" }}
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
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </VStack>
  );
}

function RedeemTab() {
  return (
    <VStack gap={{ base: 6, md: 8 }} align="stretch">
      <Box textAlign="center" mb={{ base: 2, md: 4 }}>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="gray.800" mb={3} fontWeight="bold">
          Redeem Rewards
        </Heading>
        <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
          Exchange your points for cash, gift cards, and exclusive rewards.
        </Text>
        <Box h="3px" bg="secondary.500" w={{ base: "120px", md: "140px" }} mx="auto" borderRadius="full" mt={4} />
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 4, md: 6 }}>
        <Box 
          bgGradient="linear(to-br, green.400, green.600)" 
          p={{ base: 4, md: 6 }} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="white"
          border="2px"
          borderColor="green.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, green.500, green.700)"
          }}
          transition="all 0.3s"
        >
          <VStack gap={{ base: 3, md: 4 }}>
            <Icon as={MdAccountBalanceWallet} boxSize={{ base: 10, md: 14 }} color="white" />
            <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold" color="white">PayPal Cash</Heading>
            <Text color="whiteAlpha.900" textAlign="center" fontSize={{ base: "sm", md: "md" }}>
              Direct cash transfer to your PayPal account
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" fontWeight="medium">
              Minimum: 1,000 points = $10
            </Text>
            <Button 
              bg="white"
              color="green.600"
              size={{ base: "md", md: "lg" }}
              w="full"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg',
                bg: 'gray.100'
              }}
            >
              Redeem Now
            </Button>
          </VStack>
        </Box>

        <Box 
          bgGradient="linear(to-br, orange.400, orange.600)" 
          p={{ base: 4, md: 6 }} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="white"
          border="2px"
          borderColor="orange.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, orange.500, orange.700)"
          }}
          transition="all 0.3s"
        >
          <VStack gap={{ base: 3, md: 4 }}>
            <Icon as={MdLocalOffer} boxSize={{ base: 10, md: 14 }} color="white" />
            <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold" color="white">Amazon Gift Card</Heading>
            <Text color="whiteAlpha.900" textAlign="center" fontSize={{ base: "sm", md: "md" }}>
              Get Amazon gift cards for online shopping
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" fontWeight="medium">
              Available: $5, $10, $25, $50
            </Text>
            <Button 
              bg="white"
              color="orange.600"
              size={{ base: "md", md: "lg" }}
              w="full"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg',
                bg: 'gray.100'
              }}
            >
              Redeem Now
            </Button>
          </VStack>
        </Box>

        <Box 
          bgGradient="linear(to-br, purple.400, purple.600)" 
          p={{ base: 4, md: 6 }} 
          borderRadius="xl" 
          shadow="xl" 
          borderTop="4px" 
          borderTopColor="white"
          border="2px"
          borderColor="purple.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-4px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, purple.500, purple.700)"
          }}
          transition="all 0.3s"
          gridColumn={{ base: "1", sm: "1 / -1", lg: "auto" }}
        >
          <VStack gap={{ base: 3, md: 4 }}>
            <Icon as={MdStars} boxSize={{ base: 10, md: 14 }} color="white" />
            <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold" color="white">Store Credit</Heading>
            <Text color="whiteAlpha.900" textAlign="center" fontSize={{ base: "sm", md: "md" }}>
              Use credit at participating retail partners
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" fontWeight="medium">
              500 points = $5 credit
            </Text>
            <Button 
              bg="white"
              color="purple.600"
              size={{ base: "md", md: "lg" }}
              w="full"
              fontWeight="bold"
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg',
                bg: 'gray.100'
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
    <VStack gap={{ base: 6, md: 8 }} align="stretch">
      <Box textAlign="center" mb={{ base: 2, md: 4 }}>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="gray.800" mb={3} fontWeight="bold">
          My Receipts
        </Heading>
        <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
          Track your uploaded receipts and manage your spending digitally.
        </Text>
        <Box h="3px" bg="brand.500" w={{ base: "80px", md: "100px" }} mx="auto" borderRadius="full" mt={4} />
      </Box>

      <Flex 
        direction={{ base: "column", md: "row" }}
        justify="space-between" 
        align={{ base: "stretch", md: "center" }}
        gap={{ base: 4, md: 0 }}
        bgGradient="linear(to-r, brand.400, secondary.400)" 
        p={{ base: 4, md: 6 }} 
        borderRadius="xl" 
        shadow="xl" 
        border="2px" 
        borderColor="white" 
        color="white"
      >
        <Button 
          bg="white"
          color="brand.600"
          size={{ base: "md", md: "lg" }}
          fontWeight="bold"
          _hover={{ 
            transform: 'translateY(-1px)',
            shadow: 'xl',
            bg: 'gray.100'
          }}
          transition="all 0.2s"
          w={{ base: "full", md: "auto" }}
        >
          <HStack gap={2}>
            <Icon as={MdReceipt} />
            <Text>Upload New Receipt</Text>
          </HStack>
        </Button>
        <HStack bg="whiteAlpha.200" p={3} borderRadius="lg" border="2px" borderColor="whiteAlpha.300" w={{ base: "full", md: "auto" }}>
          <Text fontSize="sm" color="white" fontWeight="semibold">Sort by:</Text>
          <NativeSelectRoot size="sm">
            <NativeSelectField
              bg="white"
              color="gray.800"
              borderColor="white"
              _hover={{ borderColor: "gray.300" }}
              _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
              fontWeight="medium"
              minW="100px"
            >
              <option>Recent</option>
              <option>Amount</option>
              <option>Store</option>
            </NativeSelectField>
          </NativeSelectRoot>
        </HStack>
      </Flex>

      <VStack gap={{ base: 3, md: 4 }} align="stretch">
        {[1, 2, 3, 4, 5].map((item) => (
          <Box 
            key={item} 
            bgGradient="linear(to-r, brand.300, secondary.300)" 
            p={{ base: 4, md: 6 }} 
            borderRadius="xl" 
            shadow="xl"
            borderLeft="4px"
            borderLeftColor="white"
            border="2px"
            borderColor="brand.200"
            color="white"
            _hover={{ 
              transform: 'translateX(4px)',
              shadow: '2xl',
              bgGradient: "linear(to-r, brand.400, secondary.400)"
            }}
            transition="all 0.2s"
          >
            <Flex 
              direction={{ base: "column", sm: "row" }}
              justify="space-between" 
              align={{ base: "start", sm: "center" }}
              gap={{ base: 3, sm: 0 }}
            >
              <HStack gap={{ base: 3, md: 4 }}>
                <Icon as={MdReceipt} boxSize={{ base: 8, md: 10 }} color="white" />
                <Box>
                  <Text fontWeight="bold" color="white" fontSize={{ base: "md", md: "lg" }}>
                    Target Store #{item}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" fontWeight="medium">
                    {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </Text>
                </Box>
              </HStack>
              <VStack align={{ base: "start", sm: "end" }} gap={1}>
                <Text fontWeight="bold" color="white" fontSize={{ base: "lg", md: "xl" }}>
                  ${(Math.random() * 100 + 10).toFixed(2)}
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="green.200" fontWeight="bold">
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
    <VStack gap={{ base: 6, md: 8 }} align="stretch">
      <Box textAlign="center" mb={{ base: 2, md: 4 }}>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="gray.800" mb={3} fontWeight="bold">
          Promotions & Offers
        </Heading>
        <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
          Discover special offers and bonus point opportunities.
        </Text>
        <Box h="3px" bg="accent.500" w={{ base: "140px", md: "160px" }} mx="auto" borderRadius="full" mt={4} />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
        <Box 
          bg="gradient-to-br from-purple.500 to-pink.500" 
          p={{ base: 6, md: 8 }} 
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
            <Icon as={MdStars} boxSize={{ base: 10, md: 12 }} />
            <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold">Double Points Weekend!</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
              Earn 2x points on all grocery receipts this weekend.
            </Text>
            <Button 
              bg="white" 
              color="purple.500" 
              size={{ base: "md", md: "lg" }}
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
          p={{ base: 6, md: 8 }} 
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
            <Icon as={MdLocalOffer} boxSize={{ base: 10, md: 12 }} />
            <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold">New Store Bonus</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
              Get 500 bonus points when you upload your first receipt from a new store.
            </Text>
            <Button 
              bg="white" 
              color="green.500" 
              size={{ base: "md", md: "lg" }}
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
          p={{ base: 6, md: 8 }} 
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
            <Icon as={MdGroup} boxSize={{ base: 10, md: 12 }} />
            <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold">Friend Referral</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
              Invite friends and get 1,000 points for each successful referral.
            </Text>
            <Button 
              bg="white" 
              color="blue.500" 
              size={{ base: "md", md: "lg" }}
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
          p={{ base: 6, md: 8 }} 
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
            <Icon as={MdReceipt} boxSize={{ base: 10, md: 12 }} />
            <Heading as="h3" size={{ base: "md", md: "lg" }} fontWeight="bold">Monthly Challenge</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
              Upload 20 receipts this month and earn a 2,000 point bonus.
            </Text>
            <Button 
              bg="white" 
              color="orange.500" 
              size={{ base: "md", md: "lg" }}
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
    <VStack gap={{ base: 6, md: 8 }} align="stretch">
      <Box textAlign="center" mb={{ base: 2, md: 4 }}>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="gray.800" mb={3} fontWeight="bold">
          Referrals & Bonuses
        </Heading>
        <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
          Invite friends and family to earn bonus rewards together.
        </Text>
        <Box h="3px" bg="premium.500" w={{ base: "130px", md: "150px" }} mx="auto" borderRadius="full" mt={4} />
      </Box>

      <Box 
        bg="gradient-to-br from-brand.500 to-secondary.500" 
        p={{ base: 6, md: 10 }} 
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
        <VStack gap={{ base: 4, md: 6 }} position="relative" zIndex={1}>
          <Icon as={MdGroup} boxSize={{ base: 16, md: 20 }} color="white" />
          <Heading as="h2" size={{ base: "lg", md: "xl" }} textAlign="center" fontWeight="bold">
            Invite Friends & Earn Together
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" maxW="2xl" opacity={0.9}>
            Share ParseMint with your friends and family. When they join and upload their first receipt, 
            you both get 1,000 bonus points!
          </Text>
          
          <Flex direction={{ base: "column", sm: "row" }} gap={4} w="full" maxW="md">
            <Box flex="1">
              <input
                type="text"
                placeholder="Enter friend's email"
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  outline: 'none',
                }}
              />
            </Box>
            <Button 
              bg="white" 
              color="brand.600" 
              size={{ base: "md", md: "lg" }}
              fontWeight="bold"
              px={{ base: 6, md: 8 }}
              _hover={{ 
                transform: 'translateY(-1px)',
                shadow: 'lg'
              }}
              w={{ base: "full", sm: "auto" }}
            >
              Send Invite
            </Button>
          </Flex>
        </VStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
        <Box 
          bgGradient="linear(to-br, brand.400, brand.600)" 
          p={{ base: 6, md: 8 }} 
          borderRadius="xl" 
          shadow="xl"
          borderTop="4px"
          borderTopColor="white"
          border="2px"
          borderColor="brand.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-2px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, brand.500, brand.700)"
          }}
          transition="all 0.3s"
        >
          <VStack gap={{ base: 4, md: 6 }}>
            <Heading as="h3" size={{ base: "md", md: "lg" }} color="white" fontWeight="bold">
              Your Referral Stats
            </Heading>
            <SimpleGrid columns={2} gap={{ base: 4, md: 6 }} w="full">
              <Box textAlign="center">
                <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="white">
                  3
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
                  Friends Invited
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="green.200">
                  2
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
                  Successfully Joined
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        <Box 
          bgGradient="linear(to-br, premium.400, premium.600)" 
          p={{ base: 6, md: 8 }} 
          borderRadius="xl" 
          shadow="xl"
          borderTop="4px"
          borderTopColor="white"
          border="2px"
          borderColor="premium.300"
          color="white"
          _hover={{ 
            transform: 'translateY(-2px)',
            shadow: '2xl',
            bgGradient: "linear(to-br, premium.500, premium.700)"
          }}
          transition="all 0.3s"
        >
          <VStack gap={{ base: 4, md: 6 }}>
            <Heading as="h3" size={{ base: "md", md: "lg" }} color="white" fontWeight="bold">
              Bonus Points Earned
            </Heading>
            <Text fontSize={{ base: "5xl", md: "6xl" }} fontWeight="bold" color="white">
              2,000
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.800" textAlign="center" fontWeight="medium">
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <Box 
        minH="100vh" 
        bg="#b0c4d4" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <VStack gap={4}>
          <Box 
            w="12" 
            h="12" 
            border="4px solid" 
            borderColor="#5dd3e9" 
            borderTopColor="#0194fe" 
            borderRadius="full" 
            animation="spin 1s linear infinite"
          />
          <Text color="#012b7e">Loading...</Text>
        </VStack>
      </Box>
    );
  }

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

  const SidebarContent = ({ isMobile = false }) => (
    <VStack gap={2} align="stretch" px={{ base: 3, md: 4 }}>
      <Box mb={{ base: 4, md: 6 }} textAlign="center" px={2}>
        <Heading 
          as="h1" 
          size={{ base: "lg", md: "xl" }}
          color="#011149" 
          mb={3} 
          fontWeight="bold"
          textShadow="0 2px 4px rgba(0,0,0,0.08)"
        >
          Dashboard
        </Heading>
        <Box h="3px" bg="white" w="80%" mx="auto" borderRadius="full" mb={4} opacity={0.8} />
        <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900" fontWeight="medium">
          Welcome, {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'User'}

        </Text>
      </Box>
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={activeTab === item.id}
          onClick={() => {
            setActiveTab(item.id);
            if (isMobile) setIsSidebarOpen(false);
          }}
        />
      ))}
    </VStack>
  );

  return (
    <Grid h="100%" templateColumns={{ base: "1fr", md: "280px 1fr" }} bg="#b0c4d4">
      <GridItem 
        bg="#5dd3e9"
        borderRight="1px solid"
        borderRightColor="#c4d3e0"
        py={{ base: 4, md: 6 }}
        shadow="xl"
        color="#011149"
        display={{ base: "none", md: "block" }}
      >
        <SidebarContent />
      </GridItem>
      
      {isSidebarOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          h="100vh"
          w="280px"
          bg="#5dd3e9"
          color="#011149"
          py={6}
          zIndex={1000}
          shadow="2xl"
        >
          <Flex justify="space-between" align="center" mb={4} px={4}>
            <Heading size="md" color="#011149">Navigation</Heading>
            <IconButton
              aria-label="Close sidebar"
              onClick={() => setIsSidebarOpen(false)}
              variant="ghost"
              color="#011149"
              _hover={{ bg: '#c4d3e0' }}
            >
              <MdClose />
            </IconButton>
          </Flex>
          <SidebarContent isMobile={true} />
        </Box>
      )}
      
      <GridItem 
        p={{ base: 4, md: 6 }} 
        overflowY="auto" 
        bg="#e0eaf2"
        position="relative"
      >
        <IconButton
          aria-label="Open sidebar"
          onClick={() => setIsSidebarOpen(true)}
          display={{ base: "flex", md: "none" }}
          position="fixed"
          top={{ base: 20, md: 24 }}
          left={4}
          zIndex={100}
          bg="#0194fe"
          color="white"
          shadow="lg"
          _hover={{ bg: '#012b7e' }}
          size="lg"
        >
          <MdMenu />
        </IconButton>
        <Container maxW="container.xl" centerContent>
          <Box w="full" maxW="container.lg" mt={{ base: 12, md: 0 }}>
            {renderTabContent()}
          </Box>
        </Container>
      </GridItem>
    </Grid>
  );
}