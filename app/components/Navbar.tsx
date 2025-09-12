'use client';

import {
  Box,
  Flex,
  Heading,
  Button,
  Container,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const { isAuthenticated, logout, loading } = useAuth();
  const { theme } = useTheme();

  return (
    <Box 
      bg={theme === 'light' ? 'white' : 'gray.800'} 
      shadow="lg" 
      position="sticky" 
      top={0} 
      zIndex={10}
      borderBottom="2px"
      borderColor="brand.100"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo/Brand - Only show on non-dashboard pages */}
          {!isAuthenticated && (
            <Link href="/">
              <Heading
                as="h1"
                size="xl"
                className="brand-gradient"
                cursor="pointer"
                fontWeight="bold"
                fontSize="2xl"
                letterSpacing="tight"
                _hover={{ 
                  transform: 'scale(1.05)'
                }}
                transition="all 0.2s"
              >
                ParseMint
              </Heading>
            </Link>
          )}
          
          {/* Empty space for authenticated users to push navigation to the right */}
          {isAuthenticated && <Box />}

          {/* Navigation */}
          <HStack gap={6}>
            <ThemeToggle />
            {loading ? (
              // Show loading placeholder to prevent flash
              <Box w="200px" h="10" bg="gray.200" borderRadius="md" />
            ) : isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button 
                    variant="ghost" 
                    colorScheme="brand"
                    _hover={{ 
                      bg: 'brand.50',
                      color: 'brand.700'
                    }}
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link href="/account">
                  <Button 
                    variant="ghost" 
                    colorScheme="secondary"
                    _hover={{ 
                      bg: 'secondary.50',
                      color: 'secondary.700'
                    }}
                  >
                    Profile Settings
                  </Button>
                </Link>
                <Button 
                  onClick={logout} 
                  bg="red.500"
                  color="white"
                  _hover={{ 
                    bg: 'red.600',
                    transform: 'translateY(-1px)'
                  }}
                  _active={{ transform: 'translateY(0)' }}
                  transition="all 0.2s"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button 
                    variant="ghost" 
                    color="secondary.600"
                    _hover={{ 
                      bg: 'secondary.50',
                      color: 'secondary.700'
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button 
                    bg="accent.500"
                    color="white"
                    _hover={{ 
                      bg: 'accent.600',
                      transform: 'translateY(-1px)',
                      shadow: 'md'
                    }}
                    _active={{ transform: 'translateY(0)' }}
                    transition="all 0.2s"
                    fontWeight="semibold"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}