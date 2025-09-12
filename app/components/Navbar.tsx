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
  const { isAuthenticated, logout } = useAuth();
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
          {/* Logo/Brand */}
          <Link href="/">
            <Heading
              as="h1"
              size="lg"
              className="brand-gradient brand-gradient-hover text-2xl font-bold"
              cursor="pointer"
              fontWeight="bold"
              _hover={{ 
                transform: 'scale(1.05)'
              }}
              transition="all 0.2s"
            >
              ParseMint
            </Heading>
          </Link>

          {/* Navigation */}
          <HStack gap={4}>
            <ThemeToggle />
            {isAuthenticated ? (
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