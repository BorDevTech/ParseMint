'use client';

import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
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
      borderTop="3px"
      borderColor="brand.400"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl" h="100%">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="center"
          gap={{ base: 2, md: 4 }}
          h="100%"
        >
          {/* Left side - Company Info */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={1}>
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="bold"
              bgGradient="linear(to-r, brand.300, secondary.300)"
              bgClip="text"
            >
              ParseMint™
            </Text>
            <Text color="gray.300" fontSize={{ base: "xs", md: "sm" }}>
              Florida, US
            </Text>
            <ChakraLink 
              href="mailto:parsemint@bordevtech.com" 
              color="brand.300"
              _hover={{ 
                color: 'brand.200',
                textDecoration: 'underline'
              }}
              fontSize={{ base: "xs", md: "sm" }}
              transition="all 0.2s"
            >
              parsemint@bordevtech.com
            </ChakraLink>
          </VStack>

          {/* Center - Social Media Icons */}
          <HStack gap={3} display={{ base: "flex", md: "flex" }}>
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
              <Icon as={FaTiktok} boxSize={4} />
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
              <Icon as={FaInstagram} boxSize={4} />
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
              <Icon as={FaFacebook} boxSize={4} />
            </ChakraLink>
          </HStack>

          {/* Right side - Navigation Links */}
          <HStack 
            gap={{ base: 2, md: 4 }}
            wrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
          >
            <ChakraLink 
              as={Link}
              href="/about"
              color="gray.300" 
              _hover={{ 
                color: 'brand.300',
                textDecoration: 'underline'
              }}
              fontSize={{ base: "xs", md: "sm" }}
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
              fontSize={{ base: "xs", md: "sm" }}
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
              fontSize={{ base: "xs", md: "sm" }}
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