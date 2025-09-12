'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleInputChange = (field: keyof LoginData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate login process
    setTimeout(() => {
      login();
      router.push('/dashboard');
      setIsSubmitting(false);
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
              Welcome back!
            </Text>
          </Box>

          {/* Login Form */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <form onSubmit={handleSubmit}>
              <VStack gap={6} align="stretch">
                <Heading size="lg" textAlign="center" color="gray.700">
                  Login to your account
                </Heading>

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
                    Password <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Enter your password"
                    bg="white"
                    required
                  />
                </Box>

                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  loading={isSubmitting}
                  loadingText="Logging in..."
                >
                  Login
                </Button>

                <Text fontSize="sm" color="gray.500" textAlign="center">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup">
                    <Text as="span" color="teal.500" cursor="pointer" _hover={{ textDecoration: 'underline' }}>
                      Sign up here
                    </Text>
                  </Link>
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