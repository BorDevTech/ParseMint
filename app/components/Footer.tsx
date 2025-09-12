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
    <Box bg="gray.800" color="white" py={10} mt="auto">
      <Container maxW="container.xl">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="flex-start"
          gap={8}
        >
          {/* Left side - Company Info */}
          <VStack align="flex-start" gap={3}>
            <Text fontSize="lg" fontWeight="bold">
              ParseMint™
            </Text>
            <Text color="gray.300">
              Florida, US
            </Text>
            <ChakraLink 
              href="mailto:parsemint@bordevtech.com" 
              color="teal.300"
              _hover={{ color: 'teal.200' }}
            >
              parsemint@bordevtech.com
            </ChakraLink>
            
            {/* Social Media Icons */}
            <HStack gap={4} pt={2}>
              <ChakraLink 
                href="#" 
                _hover={{ color: 'teal.300' }}
                aria-label="TikTok"
              >
                <Icon as={FaTiktok} boxSize={6} />
              </ChakraLink>
              <ChakraLink 
                href="#" 
                _hover={{ color: 'teal.300' }}
                aria-label="Instagram"
              >
                <Icon as={FaInstagram} boxSize={6} />
              </ChakraLink>
              <ChakraLink 
                href="#" 
                _hover={{ color: 'teal.300' }}
                aria-label="Facebook"
              >
                <Icon as={FaFacebook} boxSize={6} />
              </ChakraLink>
            </HStack>
          </VStack>

          {/* Right side - Navigation Links */}
          <HStack 
            align="flex-start" 
            gap={6} 
            wrap="wrap"
            direction={{ base: 'column', md: 'row' }}
          >
            <Link href="/about">
              <ChakraLink 
                color="gray.300" 
                _hover={{ color: 'teal.300' }}
              >
                About
              </ChakraLink>
            </Link>
            <Link href="/careers">
              <ChakraLink 
                color="gray.300" 
                _hover={{ color: 'teal.300' }}
              >
                Careers
              </ChakraLink>
            </Link>
            <Link href="/privacy">
              <ChakraLink 
                color="gray.300" 
                _hover={{ color: 'teal.300' }}
              >
                Privacy Policy
              </ChakraLink>
            </Link>
            <Link href="/terms">
              <ChakraLink 
                color="gray.300" 
                _hover={{ color: 'teal.300' }}
              >
                Terms of Service
              </ChakraLink>
            </Link>
            <Link href="/support">
              <ChakraLink 
                color="gray.300" 
                _hover={{ color: 'teal.300' }}
              >
                Support
              </ChakraLink>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}