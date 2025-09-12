'use client';

import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.lg" py={16}>
        <VStack gap={8} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
              mb={4}
            >
              About ParseMint
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
              Transforming everyday purchases into valuable rewards
            </Text>
          </Box>

          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="lg" color="gray.700">
                Our Mission
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="tall">
                ParseMint is a revolutionary digital rewards platform that helps you maximize 
                the value of every purchase. By simply uploading your receipts, you can earn 
                valuable points that convert into real monetary rewards.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                How It Works
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="tall">
                Our advanced parsing technology automatically extracts purchase details from 
                your receipts, calculates point values based on spending amounts and merchant 
                partnerships, and provides you with an easy way to redeem your rewards.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Our Team
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="tall">
                Based in Florida, US, our dedicated team is committed to making reward 
                earning simple, transparent, and valuable for every user. We believe that 
                every purchase should provide more than just the product or service – it 
                should contribute to your financial wellbeing.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}