'use client';

import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react';

export default function PrivacyPage() {
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
              Privacy Policy
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Last updated: {new Date().toLocaleDateString()}
            </Text>
          </Box>

          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="lg" color="gray.700">
                Information We Collect
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                We collect information you provide directly to us, such as when you create 
                an account, upload receipts, or contact us for support. This may include 
                your name, email address, phone number, and transaction data from receipts.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                How We Use Your Information
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                We use the information we collect to provide, maintain, and improve our 
                services, process transactions, send you technical notices and support 
                messages, and communicate with you about products, services, and promotional offers.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Information Sharing
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                We do not sell, trade, or otherwise transfer your personal information to 
                third parties without your consent, except as described in this policy. 
                We may share information with trusted partners who assist us in operating 
                our platform and conducting our business.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Data Security
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, 
                no internet transmission is completely secure, and we cannot guarantee absolute security.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Your Rights
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                You have the right to access, update, or delete your personal information. 
                You may also opt out of receiving promotional communications from us. 
                To exercise these rights, please contact us at parsemint@bordevtech.com.
              </Text>

              <Heading size="lg" color="gray.700" pt={4}>
                Contact Us
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                If you have any questions about this Privacy Policy, please contact us at 
                parsemint@bordevtech.com or write to us at our address in Florida, US.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}