'use client';

import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <Grid h="100%" templateRows="1fr auto" bg="gray.50">
      <GridItem>
        <Container maxW="container.lg" py={8}>
          <VStack gap={6} align="stretch">
            <Box textAlign="center">
              <Heading
                as="h1"
                size="xl"
                bgGradient="linear(to-r, teal.400, blue.500)"
                bgClip="text"
                mb={3}
              >
                About ParseMint
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
                Transforming everyday purchases into valuable rewards
              </Text>
            </Box>

            <Card.Root bg="white" borderRadius="lg" shadow="md">
              <Card.Body p={6}>
                <VStack gap={5} align="stretch">
                  <Heading size="md" color="gray.700">
                    Our Mission
                  </Heading>
                  <Text color="gray.600" fontSize="md" lineHeight="tall">
                    ParseMint is a revolutionary digital rewards platform that helps you maximize 
                    the value of every purchase. By simply uploading your receipts, you can earn 
                    valuable points that convert into real monetary rewards.
                  </Text>

                  <Heading size="md" color="gray.700" pt={3}>
                    How It Works
                  </Heading>
                  <Text color="gray.600" fontSize="md" lineHeight="tall">
                    Our advanced parsing technology automatically extracts purchase details from 
                    your receipts, calculates point values based on spending amounts and merchant 
                    partnerships, and provides you with an easy way to redeem your rewards.
                  </Text>

                  <Heading size="md" color="gray.700" pt={3}>
                    Our Team
                  </Heading>
                  <Text color="gray.600" fontSize="md" lineHeight="tall">
                    Based in Florida, US, our dedicated team is committed to making reward 
                    earning simple, transparent, and valuable for every user. We believe that 
                    every purchase should provide more than just the product or service – it 
                    should contribute to your financial wellbeing.
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </VStack>
        </Container>
      </GridItem>
    </Grid>
  );
}