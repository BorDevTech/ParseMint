'use client';

import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';

export function Footer() {
  return (
    <Box 
      bgGradient="linear(to-r, gray.800, gray.900)" 
      color="white" 
      h="100%"
      borderTop="2px"
      borderColor="brand.400"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl" h="100%">
        <Flex 
          direction="row"
          justify="space-between" 
          align="center"
          gap={4}
          h="100%"
        >
          {/* Left side - Company Info */}
          <HStack gap={3}>
            <Text 
              fontSize="sm"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.300, secondary.300)"
              bgClip="text"
            >
              ParseMint™
            </Text>
            <ChakraLink 
              href="mailto:parsemint@bordevtech.com" 
              color="brand.300"
              _hover={{ 
                color: 'brand.200',
                textDecoration: 'underline'
              }}
              fontSize="xs"
              transition="all 0.2s"
              display={{ base: "none", md: "block" }}
            >
              parsemint@bordevtech.com
            </ChakraLink>
          </HStack>

          {/* Center - Social Media Icons */}
          <HStack gap={2}>
            <ChakraLink 
              href="#" 
              p={1}
              borderRadius="md"
              bg="gray.700"
              _hover={{ 
                bg: 'brand.600',
                transform: 'translateY(-1px)',
                shadow: 'md'
              }}
              transition="all 0.3s"
              aria-label="TikTok"
            >
              <Icon as={FaTiktok} boxSize={3} />
            </ChakraLink>
            <ChakraLink 
              href="#" 
              p={1}
              borderRadius="md"
              bg="gray.700"
              _hover={{ 
                bg: 'accent.600',
                transform: 'translateY(-1px)',
                shadow: 'md'
              }}
              transition="all 0.3s"
              aria-label="Instagram"
            >
              <Icon as={FaInstagram} boxSize={3} />
            </ChakraLink>
            <ChakraLink 
              href="#" 
              p={1}
              borderRadius="md"
              bg="gray.700"
              _hover={{ 
                bg: 'secondary.600',
                transform: 'translateY(-1px)',
                shadow: 'md'
              }}
              transition="all 0.3s"
              aria-label="Facebook"
            >
              <Icon as={FaFacebook} boxSize={3} />
            </ChakraLink>
          </HStack>

          {/* Right side - Navigation Links */}
          <HStack gap={3}>
            <ChakraLink 
              as={Link}
              href="/about"
              color="gray.300" 
              _hover={{ 
                color: 'brand.300',
                textDecoration: 'underline'
              }}
              fontSize="xs"
              transition="all 0.2s"
            >
              About
            </ChakraLink>
            <ChakraLink 
              as={Link}
              href="/privacy"
              color="gray.300" 
              _hover={{ 
                color: 'accent.300',
                textDecoration: 'underline'
              }}
              fontSize="xs"
              transition="all 0.2s"
            >
              Privacy
            </ChakraLink>
            <ChakraLink 
              as={Link}
              href="/support"
              color="gray.300" 
              _hover={{ 
                color: 'premium.300',
                textDecoration: 'underline'
              }}
              fontSize="xs"
              transition="all 0.2s"
            >
              Support
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}