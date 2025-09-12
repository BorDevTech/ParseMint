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
      bgGradient={theme === 'light' 
        ? "linear(to-r, brand.500, secondary.500, accent.500)" 
        : "linear(to-r, gray.800, gray.900, black)"
      }
      shadow="xl" 
      position="sticky" 
      top={0} 
      zIndex={10}
      borderBottom="3px"
      borderColor="white"
    >
      <Container maxW="container.xl">
        {/* Table-like layout with ParseMint centered */}
        <Flex h={20} alignItems="center" justify="space-between" gap={8}>
          {/* Left spacer */}
          <Box flex="1" />
          
          {/* Center - ParseMint Brand (Always visible) */}
          <Box 
            textAlign="center" 
            bg="white" 
            px={8} 
            py={3} 
            borderRadius="full"
            shadow="lg"
            border="2px"
            borderColor="white"
            _hover={{ 
              transform: 'scale(1.05)',
              shadow: 'xl'
            }}
            transition="all 0.3s"
          >
            <Link href="/">
              <Heading
                as="h1"
                size="xl"
                className="brand-gradient"
                cursor="pointer"
                fontWeight="bold"
                fontSize="2xl"
                letterSpacing="tight"
              >
                ParseMint
              </Heading>
            </Link>
          </Box>

          {/* Right - Navigation */}
          <Flex flex="1" justify="flex-end">
            <HStack gap={4}>
              <ThemeToggle />
              {loading ? (
                // Show loading placeholder to prevent flash
                <Box w="200px" h="10" bg="whiteAlpha.300" borderRadius="md" />
              ) : isAuthenticated ? (
                <>
                  <Link href="/dashboard">
                    <Button 
                      variant="solid"
                      bg="whiteAlpha.200"
                      color="white"
                      borderWidth="2px"
                      borderColor="whiteAlpha.300"
                      _hover={{ 
                        bg: 'whiteAlpha.300',
                        borderColor: 'white',
                        transform: 'translateY(-1px)'
                      }}
                      fontWeight="semibold"
                      transition="all 0.2s"
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/account">
                    <Button 
                      variant="solid"
                      bg="whiteAlpha.200"
                      color="white"
                      borderWidth="2px"
                      borderColor="whiteAlpha.300"
                      _hover={{ 
                        bg: 'whiteAlpha.300',
                        borderColor: 'white',
                        transform: 'translateY(-1px)'
                      }}
                      fontWeight="semibold"
                      transition="all 0.2s"
                    >
                      Profile Settings
                    </Button>
                  </Link>
                  <Button 
                    onClick={logout} 
                    bg="red.500"
                    color="white"
                    borderWidth="2px"
                    borderColor="red.400"
                    _hover={{ 
                      bg: 'red.600',
                      borderColor: 'red.300',
                      transform: 'translateY(-1px)'
                    }}
                    _active={{ transform: 'translateY(0)' }}
                    transition="all 0.2s"
                    fontWeight="semibold"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button 
                      variant="solid"
                      bg="whiteAlpha.200"
                      color="white"
                      borderWidth="2px"
                      borderColor="whiteAlpha.300"
                      _hover={{ 
                        bg: 'whiteAlpha.300',
                        borderColor: 'white',
                        transform: 'translateY(-1px)'
                      }}
                      fontWeight="semibold"
                      transition="all 0.2s"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button 
                      bg="white"
                      color="brand.600"
                      borderWidth="2px"
                      borderColor="white"
                      _hover={{ 
                        bg: 'gray.100',
                        transform: 'translateY(-1px)',
                        shadow: 'md'
                      }}
                      _active={{ transform: 'translateY(0)' }}
                      transition="all 0.2s"
                      fontWeight="bold"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}