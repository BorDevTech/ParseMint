'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Input,
  VStack,
  HStack,
  NativeSelectRoot,
  NativeSelectField,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import { hearAboutUsOption, UserSignupData } from '../types/user-signup';
import UserCreate from '@/data/controls/users/userCreate';
import { nanoid } from 'nanoid';
import UserCheck from '@/data/controls/users/userCheck';



export default function SignUpPage() {
  const [formData, setFormData] = useState<UserSignupData>({
    fullname: '', // Will be set on submission
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


  // Utility function to generate a unique user ID 
  // Ensures it doesn't already exist (extremely unlikely with nanoid, but just in case) 
  async function UUIDGen(checkID: (id: string) => Promise<boolean>): Promise<string> {
    let userId: string;
    let exists = true;
    do {
      userId = `PM-${nanoid(8).toUpperCase()}`; // Example: "PM-V1STGXR8"
      exists = await checkID(userId);
    } while (exists);
    return userId;
  }



  const handleUserSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId = await UUIDGen(UserCheck)


    // Prepare user data with the generated ID
    const userData: UserSignupData = {
      ...formData,
      fullname: `${formData.firstName} ${formData.lastName}`,
      id: userId,
      account_created_at: new Date().toISOString(),
    };
    if (userId) {
      console.log("Form Data Submitted:", userData);
    }
    try {
      await UserCreate(userData);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error during signup process: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <Grid h="100%" templateRows="1fr auto" className="main-background" overflow="auto">
      <GridItem>
        <Container maxW="2xl" py={4} display="flex" alignItems="center" justifyContent="center">
          <VStack gap={3} align="stretch" w="100%" maxW="xl">
            {/* Header */}
            <Box textAlign="center">
              <Link href="/">
                <Heading
                  as="h1"
                  size="md"
                  color="primary.700"
                  mb={1}
                  cursor="pointer"
                >
                  ParseMint
                </Heading>
              </Link>
              <Text color="secondary.600" fontSize="md">
                Join the Early Access Program
              </Text>
            </Box>

            {/* Success Message */}
            {showSuccess && (
              <Box bg="green.50" border="1px" borderColor="green.200" borderRadius="md" p={2}>
                <Text fontWeight="bold" color="green.800" fontSize="sm">Successfully signed up!</Text>
                <Text fontSize="xs" color="green.700">Welcome to ParseMint! We&apos;ll be in touch soon.</Text>
              </Box>
            )}

            {/* Form Card */}
            <Box className="card-background" p={4} borderRadius="lg" w="100%">
              <form onSubmit={handleUserSignup}>
                <VStack gap={3} align="stretch">
                  <Heading size="md" textAlign="center" color="secondary.800">
                    Sign up for early access
                  </Heading>

                  <Text color="secondary.600" textAlign="center" fontSize="sm">
                    Be among the first to experience ParseMint and turn your receipts into rewards!
                  </Text>

                  {/* First and Last Name on same line */}
                  <HStack gap={3}>
                    <Box flex="1">
                      <Text fontWeight="medium" mb={1} color="secondary.700" fontSize="sm">
                        First Name <Text as="span" color="red.500">*</Text>
                      </Text>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Enter your first name"
                        bg="white"
                        borderColor="secondary.300"
                        size="sm"
                        _focus={{ 
                          borderColor: 'primary.400',
                          boxShadow: '0 0 0 1px var(--primary-400)'
                        }}
                        required
                      />
                    </Box>
                    <Box flex="1">
                      <Text fontWeight="medium" mb={1} color="secondary.700" fontSize="sm">
                        Last Name <Text as="span" color="red.500">*</Text>
                      </Text>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Enter your last name"
                        bg="white"
                        borderColor="secondary.300"
                        size="sm"
                        _focus={{ 
                          borderColor: 'primary.400',
                          boxShadow: '0 0 0 1px var(--primary-400)'
                        }}
                        required
                      />
                    </Box>
                  </HStack>

                  <Box>
                    <Text fontWeight="medium" mb={1} color="secondary.700" fontSize="sm">
                      Email Address <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      bg="white"
                      size="sm"
                      required
                    />
                  </Box>

                  <Box>
                    <Text fontWeight="medium" mb={1} color="gray.700" fontSize="sm">
                      Phone Number (Optional)
                    </Text>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      bg="white"
                      size="sm"
                    />
                  </Box>

                  <Box>
                    <Text fontWeight="medium" mb={1} color="gray.700" fontSize="sm">
                      How did you hear about us? <Text as="span" color="red.500">*</Text>
                    </Text>
                    <NativeSelectRoot size="sm">
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
                    <Text fontWeight="medium" mb={1} color="gray.700" fontSize="xs">
                      What other ways?  (max 200 characters) <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Input
                      type="text"
                      value={formData.hearAboutUsOther}
                      onChange={(e) => setFormData({ ...formData, hearAboutUsOther: e.target.value })}
                      placeholder="Enter other ways you heard about us"
                      bg="white"
                      size="sm"
                      max={200}
                      required
                    />
                  </Box>)}

                  <Box>
                    <Text fontWeight="medium" mb={1} color="gray.700" fontSize="xs">
                      Referral Code (Optional)
                    </Text>
                    <Input
                      type="text"
                      value={formData.referralCode}
                      onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                      placeholder="Enter your referral code"
                      bg="white"
                      size="sm"
                    />
                  </Box>
                  <Button
                    type="submit"
                    className="primary-button"
                    size="sm"
                    loading={isSubmitting}
                    loadingText="Signing up..."
                  >
                    Sign Up for Early Access
                  </Button>

                  <Text fontSize="xs" color="secondary.500" textAlign="center">
                    By signing up, you agree to receive updates about ParseMint.
                    We respect your privacy and won&apos;t spam you.
                  </Text>
                </VStack>
              </form>
            </Box>

            {/* Back to Home */}
            <Box textAlign="center">
              <Link href="/">
                <Button className="secondary-button" size="xs">
                  ← Back to Home
                </Button>
              </Link>
            </Box>
          </VStack>
        </Container>
      </GridItem>
    </Grid>
  );
}