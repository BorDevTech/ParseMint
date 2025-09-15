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
      className="navbar-footer-theme"
      h="100%"
      borderTop="2px"
      shadow="lg"
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
              color="primary.300"
            >
              ParseMint™
            </Text>
            <ChakraLink 
              href="mailto:parsemint@bordevtech.com" 
              color="primary.200"
              _hover={{ 
                color: 'primary.100',
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
              bg="whiteAlpha.200"
              _hover={{ 
                bg: 'primary.600',
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
              bg="whiteAlpha.200"
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
              bg="whiteAlpha.200"
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
              color="gray.200" 
              _hover={{ 
                color: 'primary.200',
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
              color="gray.200" 
              _hover={{ 
                color: 'accent.200',
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
              color="gray.200" 
              _hover={{ 
                color: 'primary.200',
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