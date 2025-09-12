'use client';

import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react';

export default function TermsPage() {
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
              Terms of Service
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Last updated: {new Date().toLocaleDateString()}
            </Text>
          </Box>

          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="lg" color="gray.700">
                Acceptance of Terms
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                By accessing and using ParseMint, you accept and agree to be bound by the 
                terms and provision of this agreement. These terms apply to all users of 
                the service, including browsers, customers, and contributors.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Use License
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                Permission is granted to temporarily use ParseMint for personal, 
                non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not modify or 
                copy the materials or use the materials for any commercial purpose.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                User Account
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                When you create an account with us, you must provide information that is 
                accurate, complete, and current at all times. You are responsible for 
                safeguarding the password and for all activities that occur under your account.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Receipt Uploads and Points
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                You may upload receipts to earn points through our platform. Points earned 
                are based on our algorithms and merchant partnerships. We reserve the right 
                to modify point values and redemption options at any time with reasonable notice.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Prohibited Uses
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                You may not use our service for any unlawful purpose, to upload fraudulent 
                receipts, to attempt to gain unauthorized access to our systems, or to 
                interfere with the proper working of our platform.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Limitation of Liability
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                In no event shall ParseMint or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or 
                due to business interruption) arising out of the use or inability to use 
                the materials on ParseMint.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Contact Information
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                If you have any questions about these Terms of Service, please contact us 
                at parsemint@bordevtech.com.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}