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
      py={12} 
      mt="auto"
      borderTop="3px"
      borderColor="brand.400"
    >
      <Container maxW="container.xl">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="flex-start"
          gap={8}
        >
          {/* Left side - Company Info */}
          <VStack align="flex-start" gap={4}>
            <Text 
              fontSize="xl" 
              fontWeight="bold"
              bgGradient="linear(to-r, brand.300, secondary.300)"
              bgClip="text"
            >
              ParseMint™
            </Text>
            <Text color="gray.300" fontSize="md">
              Florida, US
            </Text>
            <ChakraLink 
              href="mailto:parsemint@bordevtech.com" 
              color="brand.300"
              _hover={{ 
                color: 'brand.200',
                textDecoration: 'underline'
              }}
              fontSize="md"
              transition="all 0.2s"
            >
              parsemint@bordevtech.com
            </ChakraLink>
            
            {/* Social Media Icons */}
            <HStack gap={4} pt={3}>
              <ChakraLink 
                href="#" 
                p={2}
                borderRadius="md"
                bg="gray.700"
                _hover={{ 
                  bg: 'brand.600',
                  transform: 'translateY(-2px)',
                  shadow: 'lg'
                }}
                transition="all 0.3s"
                aria-label="TikTok"
              >
                <Icon as={FaTiktok} boxSize={5} />
              </ChakraLink>
              <ChakraLink 
                href="#" 
                p={2}
                borderRadius="md"
                bg="gray.700"
                _hover={{ 
                  bg: 'accent.600',
                  transform: 'translateY(-2px)',
                  shadow: 'lg'
                }}
                transition="all 0.3s"
                aria-label="Instagram"
              >
                <Icon as={FaInstagram} boxSize={5} />
              </ChakraLink>
              <ChakraLink 
                href="#" 
                p={2}
                borderRadius="md"
                bg="gray.700"
                _hover={{ 
                  bg: 'secondary.600',
                  transform: 'translateY(-2px)',
                  shadow: 'lg'
                }}
                transition="all 0.3s"
                aria-label="Facebook"
              >
                <Icon as={FaFacebook} boxSize={5} />
              </ChakraLink>
            </HStack>
          </VStack>

          {/* Right side - Navigation Links */}
          <HStack 
            align="flex-start" 
            gap={8} 
            wrap="wrap"
            direction={{ base: 'column', md: 'row' }}
          >
            <ChakraLink 
              as={Link}
              href="/about"
              color="gray.300" 
              _hover={{ 
                color: 'brand.300',
                textDecoration: 'underline'
              }}
              fontSize="md"
              transition="all 0.2s"
            >
              About
            </ChakraLink>
            <ChakraLink 
              as={Link}
              href="/careers"
              color="gray.300" 
              _hover={{ 
                color: 'secondary.300',
                textDecoration: 'underline'
              }}
              fontSize="md"
              transition="all 0.2s"
            >
              Careers
            </ChakraLink>
            <ChakraLink 
              as={Link}
              href="/privacy"
              color="gray.300" 
              _hover={{ 
                color: 'accent.300',
                textDecoration: 'underline'
              }}
              fontSize="md"
              transition="all 0.2s"
            >
              Privacy Policy
            </ChakraLink>
            <ChakraLink 
              as={Link}
              href="/terms"
              color="gray.300" 
              _hover={{ 
                color: 'highlight.300',
                textDecoration: 'underline'
              }}
              fontSize="md"
              transition="all 0.2s"
            >
              Terms of Service
            </ChakraLink>
            <ChakraLink 
              as={Link}
              href="/support"
              color="gray.300" 
              _hover={{ 
                color: 'premium.300',
                textDecoration: 'underline'
              }}
              fontSize="md"
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