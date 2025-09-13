'use client';

import {
  Box,
  Flex,
  Heading,
  Button,
  Container,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';

export function Navbar() {
  const { isAuthenticated, logout, loading } = useAuth();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MobileMenu = () => (
    isMenuOpen && (
      <Box
        position="fixed"
        top={0}
        right={0}
        h="100vh"
        w="280px"
        bg={theme === 'light' 
          ? "linear-gradient(to-br, var(--chakra-colors-brand-500), var(--chakra-colors-secondary-500))" 
          : "linear-gradient(to-br, var(--chakra-colors-gray-800), var(--chakra-colors-gray-900))"
        }
        color="white"
        p={6}
        zIndex={1000}
        shadow="2xl"
      >
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg" color="white">Menu</Heading>
          <IconButton
            aria-label="Close menu"
            icon={<CloseIcon />} 
            onClick={() => setIsMenuOpen(false)}
            variant="ghost"
            color="white"
            size="lg"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </Flex>
  <VStack spacing={4} align="stretch">
          <ThemeToggle />
          {loading ? (
            <Box h="120px" bg="whiteAlpha.200" borderRadius="md" />
          ) : isAuthenticated ? (
            <>
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="solid"
                  bg="whiteAlpha.200"
                  color="white"
                  w="full"
                  size="lg"
                  _hover={{ bg: 'whiteAlpha.300' }}
                >
                  Dashboard
                </Button>
              </Link>
              <Link href="/account" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="solid"
                  bg="whiteAlpha.200"
                  color="white"
                  w="full"
                  size="lg"
                  _hover={{ bg: 'whiteAlpha.300' }}
                >
                  Profile Settings
                </Button>
              </Link>
              <Button 
                onClick={() => { logout(); setIsMenuOpen(false); }}
                bg="red.500"
                color="white"
                w="full"
                size="lg"
                _hover={{ bg: 'red.600' }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="solid"
                  bg="whiteAlpha.200"
                  color="white"
                  w="full"
                  size="lg"
                  _hover={{ bg: 'whiteAlpha.300' }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  bg="white"
                  color="brand.600"
                  w="full"
                  size="lg"
                  _hover={{ bg: 'gray.100' }}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </VStack>
      </Box>
    )
  );

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
        <Flex h={{ base: 16, md: 20 }} alignItems="center" justify="space-between" gap={{ base: 2, md: 8 }}>
          {/* Left spacer - hidden on mobile */}
          <Box flex="1" display={{ base: "none", md: "block" }} />
          
          {/* Center - ParseMint Brand */}
          <Box 
            textAlign="center" 
            bg={theme === 'light' ? '#e1ffe9' : 'white'}
            px={{ base: 4, md: 8 }} 
            py={{ base: 2, md: 3 }} 
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
                size={{ base: "md", md: "xl" }}
                className="brand-gradient"
                cursor="pointer"
                fontWeight="bold"
                fontSize={{ base: "lg", md: "2xl" }}
                letterSpacing="tight"
              >
                ParseMint
              </Heading>
            </Link>
          </Box>

          {/* Right - Navigation */}
          <Flex flex="1" justify="flex-end">
            {/* Desktop Navigation */}
            <HStack gap={{ base: 2, md: 4 }} display={{ base: "none", md: "flex" }}>
              <ThemeToggle />
              {loading ? (
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
                      size={{ base: "sm", md: "md" }}
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
                      size={{ base: "sm", md: "md" }}
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
                    size={{ base: "sm", md: "md" }}
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
                      bg="whiteAlpha.800"
                      color="#011149"
                      borderWidth="2px"
                      borderColor="whiteAlpha.300"
                      size={{ base: "sm", md: "md" }}
                      _hover={{ 
                        bg: 'white',
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
                      color="#011149"
                      borderWidth="2px"
                      borderColor="white"
                      size={{ base: "sm", md: "md" }}
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

            <IconButton
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              display={{ base: "flex", md: "none" }}
              variant="ghost"
              color="white"
              size="lg"
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              <HamburgerIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Container>

      <MobileMenu />
    </Box>
  );
}