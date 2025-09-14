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
  const [error, setError] = useState<string>('');
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
    setError('');

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        router.push('/dashboard');
      } else {
        setError('Invalid email or password. Try test@parsemint.com / password123');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box h="100%" bgGradient="linear(to-br, brand.50, secondary.50)" py={4} overflow="auto">
      <Container maxW="lg" h="100%" display="flex" alignItems="center">
        <VStack gap={4} align="stretch" w="100%">
          {/* Header */}
          <Box textAlign="center">
            <Link href="/">
              <Heading
                as="h1"
                size="lg"
                bgGradient="linear(to-r, brand.500, secondary.500)"
                bgClip="text"
                mb={2}
                cursor="pointer"
                _hover={{ 
                  bgGradient: 'linear(to-r, brand.600, secondary.600)'
                }}
                transition="all 0.2s"
              >
                ParseMint
              </Heading>
            </Link>
            <Text color="gray.600" fontSize="md">
              Welcome back!
            </Text>
          </Box>

          {/* Login Form */}
          <Box 
            bg="white" 
            p={6} 
            borderRadius="xl" 
            shadow="xl"
            border="1px"
            borderColor="brand.100"
            w="100%"
            maxW="md"
            mx="auto"
          >
            <form onSubmit={handleSubmit}>
              <VStack gap={4} align="stretch">
                <Heading size="md" textAlign="center" color="gray.800">
                  Login to your account
                </Heading>
                
                <Text fontSize="xs" color="gray.600" textAlign="center">
                  Test credentials: test@parsemint.com / password123
                </Text>

                {error && (
                  <Box 
                    bg="red.50" 
                    border="1px" 
                    borderColor="red.200" 
                    borderRadius="md" 
                    p={3}
                  >
                    <Text color="red.600" fontSize="sm" textAlign="center">
                      {error}
                    </Text>
                  </Box>
                )}

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700" fontSize="sm">
                    Email Address <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    bg="white"
                    borderColor="gray.300"
                    size="sm"
                    _focus={{ 
                      borderColor: 'brand.400',
                      boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)'
                    }}
                    required
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700" fontSize="sm">
                    Password <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Enter your password"
                    bg="white"
                    borderColor="gray.300"
                    size="sm"
                    _focus={{ 
                      borderColor: 'brand.400',
                      boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)'
                    }}
                    required
                  />
                </Box>

                <Button
                  type="submit"
                  bg="accent.500"
                  color="white"
                  size="md"
                  loading={isSubmitting}
                  loadingText="Logging in..."
                  _hover={{ 
                    bg: 'accent.600',
                    transform: 'translateY(-2px)',
                    shadow: 'lg'
                  }}
                  _active={{ transform: 'translateY(0)' }}
                  transition="all 0.2s"
                  fontWeight="semibold"
                >
                  Login
                </Button>

                <Text fontSize="xs" color="gray.500" textAlign="center">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup">
                    <Text 
                      as="span" 
                      color="brand.500" 
                      cursor="pointer" 
                      _hover={{ 
                        textDecoration: 'underline',
                        color: 'brand.600'
                      }}
                      fontWeight="medium"
                    >
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
              <Button 
                variant="ghost" 
                color="secondary.600"
                size="sm"
                _hover={{ 
                  bg: 'secondary.50',
                  color: 'secondary.700'
                }}
              >
                ← Back to Home
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}