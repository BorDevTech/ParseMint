'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Input,
  VStack,
  NativeSelectRoot,
  NativeSelectField,
} from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  hearAboutUs: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    hearAboutUs: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
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
      setShowSuccess(true);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        hearAboutUs: '',
      });
    }, 1000);
  };

  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="md">
        <VStack gap={6} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Link href="/">
              <Heading
                as="h1"
                size="xl"
                bgGradient="linear(to-r, teal.400, blue.500)"
                bgClip="text"
                mb={2}
                cursor="pointer"
              >
                ParseMint
              </Heading>
            </Link>
            <Text color="gray.600" fontSize="lg">
              Join the Early Access Program
            </Text>
          </Box>

          {/* Success Message */}
          {showSuccess && (
            <Box bg="green.50" border="1px" borderColor="green.200" borderRadius="md" p={4}>
              <Text fontWeight="bold" color="green.800">Successfully signed up!</Text>
              <Text fontSize="sm" color="green.700">Welcome to ParseMint! We&apos;ll be in touch soon.</Text>
            </Box>
          )}

          {/* Form Card */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <form onSubmit={handleSubmit}>
              <VStack gap={6} align="stretch">
                <Heading size="lg" textAlign="center" color="gray.700">
                  Sign up for early access
                </Heading>
                
                <Text color="gray.600" textAlign="center">
                  Be among the first to experience ParseMint and turn your receipts into rewards!
                </Text>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Full Name <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    bg="white"
                    required
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Email Address <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    bg="white"
                    required
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Phone Number (Optional)
                  </Text>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    bg="white"
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    How did you hear about us? <Text as="span" color="red.500">*</Text>
                  </Text>
                  <NativeSelectRoot>
                    <NativeSelectField
                      value={formData.hearAboutUs}
                      onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                      bg="white"
                      borderColor="gray.200"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)" }}
                    >
                      <option value="">Select an option</option>
                      <option value="search">Search Engine (Google, Bing, etc.)</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend or Family</option>
                      <option value="advertisement">Online Advertisement</option>
                      <option value="news">News Article or Blog</option>
                      <option value="other">Other</option>
                    </NativeSelectField>
                  </NativeSelectRoot>
                </Box>

                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  loading={isSubmitting}
                  loadingText="Signing up..."
                >
                  Sign Up for Early Access
                </Button>

                <Text fontSize="sm" color="gray.500" textAlign="center">
                  By signing up, you agree to receive updates about ParseMint.
                  We respect your privacy and won&apos;t spam you.
                </Text>
              </VStack>
            </form>
          </Box>

          {/* Back to Home */}
          <Box textAlign="center">
            <Link href="/">
              <Button variant="ghost" colorScheme="teal">
                ← Back to Home
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}