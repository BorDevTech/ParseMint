'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Input,
  VStack,
  NativeSelectRoot,
  NativeSelectField,
} from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import { hearAboutUsOption, UserSignupData } from '../types/user-signup';
import UserCreate from '@/data/controls/users/userCreate';
import { nanoid } from 'nanoid';
import UserCheck from '@/data/controls/users/userCheck';



export default function SignUpPage() {
  const [formData, setFormData] = useState<UserSignupData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hearAboutUs: 'Select an option',
    hearAboutUsOther: '',
    account_created_at: '', // Will be set on submission
    id: '', // Will be set on submission
    referralCode: '',// Optional
  });



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);



  const handleUserSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate a unique ID for the user
    const GenerateUserId = nanoid(8);  // Example: "v1stgxr8" 
    //reform to uppercase and add PM- prefix
    const userId = `PM-${GenerateUserId.toUpperCase()}`; // Example: "PM-V1STGXR8"
    const existingUser = await UserCheck(userId);
    // Check if user ID already exists (extremely unlikely with nanoid, but just in case)
    if (existingUser) {
      console.error("User ID already exists:", userId);
      setIsSubmitting(false);
      return;
    }
    // Prepare user data with the generated ID
    const userData: UserSignupData = {
      ...formData,
      id: userId,
      account_created_at: new Date().toISOString(),
    };

    try {
      await UserCreate(userData);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="md">
        <VStack gap={6} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Link href="/">
              <Heading
                as="h1"
                size="xl"
                bgGradient="linear(to-r, teal.400, blue.500)"
                bgClip="text"
                mb={2}
                cursor="pointer"
              >
                ParseMint
              </Heading>
            </Link>
            <Text color="gray.600" fontSize="lg">
              Join the Early Access Program
            </Text>
          </Box>

          {/* Success Message */}
          {showSuccess && (
            <Box bg="green.50" border="1px" borderColor="green.200" borderRadius="md" p={4}>
              <Text fontWeight="bold" color="green.800">Successfully signed up!</Text>
              <Text fontSize="sm" color="green.700">Welcome to ParseMint! We&apos;ll be in touch soon.</Text>
            </Box>
          )}

          {/* Form Card */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <form onSubmit={handleUserSignup}>
              <VStack gap={6} align="stretch">
                <Heading size="lg" textAlign="center" color="gray.700">
                  Sign up for early access
                </Heading>

                <Text color="gray.600" textAlign="center">
                  Be among the first to experience ParseMint and turn your receipts into rewards!
                </Text>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    First Name <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter your first name"
                    bg="white"
                    required
                  />
                </Box>
                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Last Name <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter your last name"
                    bg="white"
                    required
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Email Address <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    bg="white"
                    required
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Phone Number (Optional)
                  </Text>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    bg="white"
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    How did you hear about us? <Text as="span" color="red.500">*</Text>
                  </Text>
                  <NativeSelectRoot>
                    <NativeSelectField
                      value={formData.hearAboutUs}
                      onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value as hearAboutUsOption })}

                    >
                      <option value="Select an option" disabled>Select an option</option>
                      <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend or Family">Friend or Family</option>
                      <option value="Advertisement">Online Advertisement</option>
                      <option value="News Article or Blog">News Article or Blog</option>
                      <option value="Other">Other</option>
                    </NativeSelectField>
                  </NativeSelectRoot>
                </Box>
                {formData.hearAboutUs === "Other" && (<Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    What other ways?  (max 200 characters) <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    value={formData.hearAboutUsOther}
                    onChange={(e) => setFormData({ ...formData, hearAboutUsOther: e.target.value })}
                    placeholder="Enter other ways you heard about us"
                    bg="white"
                    max={200}
                    required
                  />
                </Box>)}

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Referral Code (Optional)
                  </Text>
                  <Input
                    type="text"
                    value={formData.referralCode}
                    onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                    placeholder="Enter your referral code"
                    bg="white"
                  />
                </Box>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  loading={isSubmitting}
                  loadingText="Signing up..."
                >
                  Sign Up for Early Access
                </Button>

                <Text fontSize="sm" color="gray.500" textAlign="center">
                  By signing up, you agree to receive updates about ParseMint.
                  We respect your privacy and won&apos;t spam you.
                </Text>
              </VStack>
            </form>
          </Box>

          {/* Back to Home */}
          <Box textAlign="center">
            <Link href="/">
              <Button variant="ghost" colorScheme="teal">
                ← Back to Home
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}