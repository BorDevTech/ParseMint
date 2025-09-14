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
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
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
        className="navbar-footer-theme"
        p={6}
        zIndex={1000}
        shadow="2xl"
      >
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg" color="white">Menu</Heading>
          <IconButton
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            variant="ghost"
            color="white"
            size="lg"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            <MdClose />
          </IconButton>
        </Flex>
        <VStack gap={4} align="stretch">
          <ThemeToggle />
          {loading ? (
            <Box h="120px" bg="whiteAlpha.200" borderRadius="md" />
          ) : isAuthenticated ? (
            <>
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="secondary-button"
                  w="full"
                  size="lg"
                >
                  Dashboard
                </Button>
              </Link>
              <Link href="/account" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="secondary-button"
                  w="full"
                  size="lg"
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
                  className="secondary-button"
                  w="full"
                  size="lg"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="primary-button"
                  w="full"
                  size="lg"
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
      className="navbar-footer-theme"
      shadow="lg"
      position="sticky"
      top={0}
      zIndex={10}
      borderBottom="2px"
      h="100%"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl" h="100%">
        <Flex h="100%" alignItems="center" justify="space-between" gap={{ base: 1, md: 4 }}>
          {/* Left spacer - hidden on mobile */}
          <Box flex="1" display={{ base: "none", md: "block" }} />

          {/* Center - ParseMint Brand */}
          <Box
            textAlign="center"
            bg="white"
            px={{ base: 2, md: 4 }}
            py={{ base: 0.5, md: 1 }}
            borderRadius="full"
            shadow="lg"
            border="1px"
            borderColor="primary.200"
            _hover={{
              transform: 'scale(1.05)',
              shadow: 'xl'
            }}
            transition="all 0.3s"
          >
            <Link href="/">
              <Heading
                as="h1"
                size={{ base: "xs", md: "sm" }}
                cursor="pointer"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "lg" }}
                letterSpacing="tight"
                color="primary.700"
              >
                ParseMint
              </Heading>
            </Link>
          </Box>

          {/* Right - Navigation */}
          <Flex flex="1" justify="flex-end">
            {/* Desktop Navigation */}
            <HStack gap={{ base: 1, md: 2 }} display={{ base: "none", md: "flex" }}>
              <ThemeToggle />
              {loading ? (
                <Box w="180px" h="8" bg="whiteAlpha.300" borderRadius="md" />
              ) : isAuthenticated ? (
                <>
                  <Link href="/dashboard">
                    <Button
                      className="secondary-button"
                      size="sm"
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/account">
                    <Button
                      className="secondary-button"
                      size="sm"
                    >
                      Profile
                    </Button>
                  </Link>
                  <Button
                    onClick={logout}
                    bg="red.500"
                    color="white"
                    borderWidth="1px"
                    borderColor="red.400"
                    size="sm"
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
                      className="secondary-button"
                      size="sm"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      className="primary-button"
                      size="sm"
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
              size="sm"
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              <GiHamburgerMenu />
            </IconButton>
          </Flex>
        </Flex>
      </Container>

      <MobileMenu />
    </Box>
  );
}