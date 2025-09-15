'use client';

import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  SimpleGrid,
  Button,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Could show success message here
    }, 1000);
  };

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
              Support Center
            </Heading>
            <Text fontSize="xl" color="secondary.600" maxW="3xl" mx="auto">
              We&apos;re here to help! Get answers to your questions or contact our support team.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {/* FAQ Section */}
            <Box className="card-background" p={8} borderRadius="lg" shadow="md">
              <VStack gap={6} align="stretch">
                <Heading size="lg" color="secondary.900">
                  Frequently Asked Questions
                </Heading>

                <Box>
                  <Heading size="md" color="secondary.900" mb={2}>
                    How do I earn points?
                  </Heading>
                  <Text color="secondary.600">
                    Simply upload a photo of your receipt through our platform. 
                    Our system will automatically calculate points based on your 
                    purchase amount and merchant partnerships.
                  </Text>
                </Box>

                <Box>
                  <Heading size="md" color="secondary.900" mb={2}>
                    How do I redeem my points?
                  </Heading>
                  <Text color="secondary.600">
                    Visit your dashboard and click on &quot;Redeem Rewards&quot;. You can 
                    convert points to cash, gift cards, or exclusive deals from 
                    our partner network.
                  </Text>
                </Box>

                <Box>
                  <Heading size="md" color="secondary.900" mb={2}>
                    What receipts are accepted?
                  </Heading>
                  <Text color="secondary.600">
                    We accept receipts from most retail stores, restaurants, 
                    gas stations, and online purchases. The receipt must be 
                    clear and show the purchase details.
                  </Text>
                </Box>

                <Box>
                  <Heading size="md" color="secondary.900" mb={2}>
                    How long does it take to process receipts?
                  </Heading>
                  <Text color="secondary.600">
                    Most receipts are processed within minutes. Complex receipts 
                    may take up to 24 hours for manual review.
                  </Text>
                </Box>
              </VStack>
            </Box>

            {/* Contact Form */}
            <Box className="card-background" p={8} borderRadius="lg" shadow="md">
              <form onSubmit={handleSubmit}>
                <VStack gap={6} align="stretch">
                  <Heading size="lg" color="secondary.900">
                    Contact Support
                  </Heading>

                  <Box>
                    <Text fontWeight="medium" mb={2} color="secondary.900">
                      Name <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      bg="white"
                      required
                    />
                  </Box>

                  <Box>
                    <Text fontWeight="medium" mb={2} color="secondary.900">
                      Email <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      bg="white"
                      required
                    />
                  </Box>

                  <Box>
                    <Text fontWeight="medium" mb={2} color="secondary.900">
                      Subject <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What can we help you with?"
                      bg="white"
                      required
                    />
                  </Box>

                  <Box>
                    <Text fontWeight="medium" mb={2} color="secondary.900">
                      Message <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your issue or question in detail..."
                      bg="white"
                      rows={5}
                      required
                    />
                  </Box>

                  <Button
                    type="submit"
                    className="primary-button"
                    size="lg"
                    loading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>

                  <Text fontSize="sm" color="secondary.500" textAlign="center">
                    You can also reach us directly at{' '}
                    <Text as="span" color="primary.500">
                      parsemint@bordevtech.com
                    </Text>
                  </Text>
                </VStack>
              </form>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}