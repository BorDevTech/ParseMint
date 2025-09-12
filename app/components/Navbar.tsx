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

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box bg="white" shadow="md" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo/Brand */}
          <Link href="/">
            <Heading
              as="h1"
              size="lg"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
              cursor="pointer"
            >
              ParseMint
            </Heading>
          </Link>

          {/* Navigation */}
          <HStack gap={4}>
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" colorScheme="teal">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/account">
                  <Button variant="ghost" colorScheme="teal">
                    Profile Settings
                  </Button>
                </Link>
                <Button onClick={logout} colorScheme="red" variant="outline">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" colorScheme="teal">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button colorScheme="teal">
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