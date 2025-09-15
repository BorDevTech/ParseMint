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
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import { MdReceipt, MdStars, MdAccountBalanceWallet } from 'react-icons/md';
import { useTheme } from './contexts/ThemeContext';
import Link from 'next/link';

export default function Home() {
  const { theme } = useTheme();

  return (
    <Grid 
      h="100%" 
      templateRows="1fr auto" 
      className="main-background"
    >
      <GridItem>
        <Container maxW="container.xl" py={{ base: 4, md: 6 }}>
          <Flex direction="column" gap={{ base: 6, md: 8 }}>
            {/* Hero Section */}
            <Flex direction="column" gap={{ base: 3, md: 4 }} textAlign="center" align="center">
              <Heading
                as="h1"
                size={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="bold"
                fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                color="primary.700"
              >
                ParseMint
              </Heading>
              <Text 
                fontSize={{ base: "md", sm: "lg", md: "lg" }}
                color="secondary.700"
                maxW="2xl" 
                lineHeight="1.6"
                px={{ base: 4, md: 0 }}
              >
                Digital rewards platform that accepts receipts and provides monetary value points to users.
                Turn your everyday purchases into valuable rewards!
              </Text>
              <Flex direction={{ base: 'column', md: 'row' }} gap={3} w={{ base: "full", sm: "auto" }} px={{ base: 4, md: 0 }}>
                <Link href="/signup">
                  <Button
                    className="primary-button"
                    size={{ base: "sm", md: "md" }}
                    shadow="lg"
                    w={{ base: "full", md: "auto" }}
                  >
                    Get Started
                  </Button>
                </Link>
                <Button 
                  className="secondary-button"
                  size={{ base: "sm", md: "md" }}
                  w={{ base: "full", md: "auto" }}
                >
                  Learn More
                </Button>
              </Flex>
            </Flex>

            {/* Features Section */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
              <Card.Root 
                className="card-background"
                borderRadius="xl" 
                _hover={{ 
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                  borderColor: 'primary.300'
                }}
                transition="all 0.3s"
              >
                <Card.Body p={{ base: 4, md: 6 }}>
                  <Flex direction="column" gap={3} align="center" textAlign="center">
                    <Box
                      p={3}
                      borderRadius="full"
                      bg="primary.100"
                      border="2px"
                      borderColor="primary.300"
                      boxSize={12}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={MdReceipt} boxSize={{ base: 6, md: 7 }} color="primary.600" />
                    </Box>
                    <Heading 
                      size={{ base: "sm", md: "md" }}
                      color="secondary.800"
                    >
                      Upload Receipts
                    </Heading>
                    <Text color="secondary.600" fontSize={{ base: "sm", md: "md" }}>
                      Simply snap a photo of your receipt and upload it to our platform.
                      Our advanced parsing technology extracts all the details.
                    </Text>
                  </Flex>
                </Card.Body>
              </Card.Root>

              <Card.Root 
                className="card-background"
                borderRadius="xl" 
                _hover={{ 
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                  borderColor: 'accent.300'
                }}
                transition="all 0.3s"
              >
                <Card.Body p={{ base: 4, md: 6 }}>
                  <Flex direction="column" gap={3} align="center" textAlign="center">
                    <Box
                      p={3}
                      borderRadius="full"
                      bg="accent.100"
                      border="2px"
                      borderColor="accent.300"
                      boxSize={12}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={MdStars} boxSize={{ base: 6, md: 7 }} color="accent.600" />
                    </Box>
                    <Heading 
                      size={{ base: "sm", md: "md" }}
                      color="secondary.800"
                    >
                      Earn Points
                    </Heading>
                    <Text color="secondary.600" fontSize={{ base: "sm", md: "md" }}>
                      Every purchase earns you valuable points based on the amount spent
                      and participating merchants.
                    </Text>
                  </Flex>
                </Card.Body>
              </Card.Root>

              <Card.Root 
                className="card-background"
                borderRadius="xl" 
                _hover={{ 
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                  borderColor: 'primary.300'
                }}
                transition="all 0.3s"
                gridColumn={{ base: "1", sm: "1 / -1", md: "auto" }}
              >
                <Card.Body p={{ base: 4, md: 6 }}>
                  <Flex direction="column" gap={3} align="center" textAlign="center">
                    <Box
                      p={3}
                      borderRadius="full"
                      bg="primary.100"
                      border="2px"
                      borderColor="primary.300"
                      boxSize={12}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={MdAccountBalanceWallet} boxSize={{ base: 6, md: 7 }} color="primary.600" />
                    </Box>
                    <Heading 
                      size={{ base: "sm", md: "md" }}
                      color="secondary.800"
                    >
                      Redeem Rewards
                    </Heading>
                    <Text color="secondary.600" fontSize={{ base: "sm", md: "md" }}>
                      Convert your points into cash, gift cards, or exclusive deals
                      from our partner network.
                    </Text>
                  </Flex>
                </Card.Body>
              </Card.Root>
            </SimpleGrid>

            {/* CTA Section */}
            <Card.Root 
              bg="primary.600"
              borderRadius="2xl"
              color="white"
              shadow="2xl"
            >
              <Card.Body textAlign="center" py={{ base: 6, md: 8 }} px={{ base: 4, md: 6 }}>
                <Flex direction="column" gap={{ base: 3, md: 4 }} align="center">
                  <Heading size={{ base: "lg", md: "xl" }} fontWeight="bold">Ready to start earning?</Heading>
                  <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} maxW="2xl">
                    Join thousands of users who are already maximizing their purchase rewards.
                  </Text>
                  <Link href="/signup">
                    <Button
                      bg="white"
                      color="primary.700"
                      size={{ base: "sm", md: "md" }}
                      fontWeight="bold"
                      _hover={{
                        bg: 'gray.100',
                        transform: 'translateY(-2px)',
                        shadow: 'xl'
                      }}
                      _active={{ transform: 'translateY(0)' }}
                      transition="all 0.2s"
                      px={{ base: 4, md: 6 }}
                      w={{ base: "full", sm: "auto" }}
                    >
                      Sign Up Now
                    </Button>
                  </Link>
                </Flex>
              </Card.Body>
            </Card.Root>
          </Flex>
        </Container>
      </GridItem>
    </Grid>
  );
}
