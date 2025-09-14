'use client';

import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';

export default function CareersPage() {
  return (
    <Box minH="100vh" className="main-background">
      <Container maxW="container.lg" py={16}>
        <VStack gap={8} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              color="secondary.900"
              mb={4}
            >
              Careers at ParseMint
            </Heading>
            <Text fontSize="xl" color="secondary.600" maxW="3xl" mx="auto">
              Join our team and help build the future of digital rewards
            </Text>
          </Box>

          <Box className="card-background" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="lg" color="secondary.900">
                Why Work With Us?
              </Heading>
              <Text color="secondary.600" fontSize="lg" lineHeight="tall">
                At ParseMint, we&apos;re building innovative solutions that directly impact how 
                people earn and redeem rewards. Join a team that values creativity, 
                collaboration, and cutting-edge technology.
              </Text>

              <Heading size="lg" color="secondary.900" pt={4}>
                Open Positions
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <Box bg="secondary.50" p={6} borderRadius="md">
                  <Heading size="md" color="secondary.900" mb={2}>
                    Full-Stack Developer
                  </Heading>
                  <Text color="secondary.600" mb={4}>
                    Help build and maintain our receipt parsing platform using React, 
                    Node.js, and modern cloud technologies.
                  </Text>
                  <Button className="primary-button" size="sm">
                    Apply Now
                  </Button>
                </Box>

                <Box bg="secondary.50" p={6} borderRadius="md">
                  <Heading size="md" color="secondary.900" mb={2}>
                    Product Manager
                  </Heading>
                  <Text color="secondary.600" mb={4}>
                    Drive product strategy and work with our engineering team to 
                    deliver exceptional user experiences.
                  </Text>
                  <Button className="primary-button" size="sm">
                    Apply Now
                  </Button>
                </Box>

                <Box bg="secondary.50" p={6} borderRadius="md">
                  <Heading size="md" color="secondary.900" mb={2}>
                    Machine Learning Engineer
                  </Heading>
                  <Text color="secondary.600" mb={4}>
                    Improve our receipt parsing algorithms and develop new ML-powered 
                    features for our platform.
                  </Text>
                  <Button className="primary-button" size="sm">
                    Apply Now
                  </Button>
                </Box>

                <Box bg="secondary.50" p={6} borderRadius="md">
                  <Heading size="md" color="secondary.900" mb={2}>
                    Customer Success Manager
                  </Heading>
                  <Text color="secondary.600" mb={4}>
                    Help our users get the most value from ParseMint and build 
                    lasting relationships with our community.
                  </Text>
                  <Button className="primary-button" size="sm">
                    Apply Now
                  </Button>
                </Box>
              </SimpleGrid>

              <Box textAlign="center" pt={4}>
                <Text color="secondary.600" mb={4}>
                  Don&apos;t see a position that fits? We&apos;re always looking for talented individuals.
                </Text>
                <Button className="accent-button" size="lg">
                  Send Us Your Resume
                </Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}