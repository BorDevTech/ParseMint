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
  IconButton,
  NativeSelectRoot,
  NativeSelectField,
} from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useAuth, SessionTimeout } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useRouter } from 'next/navigation';
import { UserResultData } from '../types/user-result';
import ScrollTo from '../utilities/scrollto';
import ThemePreview from '../utilities/themepreview';


// For profile editing, pick only the fields you need:
type ProfileData = Pick<
  UserResultData,
  'firstName'
  |
  'lastName'
  |
  'email'
  |
  'phone'
  |
  'theme_selection'
  |
  'avatar_url'
  |
  'auto_logout_duration'
>;


export default function AccountPage() {


  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    auto_logout_duration: 5, // default value, adjust as needed
    theme_selection: 'teal-blue', // default value, adjust as needed
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };


  const handlePasswordSubmit = async () => {
    // if (newPassword !== confirmPassword) {
    //   showToast("Error", "New passwords do not match.", "error");
    //   return;
    // }

    // if (newPassword.length < 6) {
    //   showToast("Error", "Password must be at least 6 characters long.", "error");
    //   return;
    // } 
  };

  const loading = false;
  const isAuthenticated = true;
  const previewTheme = true;
  // Show loading state while authentication is being determined
  if (loading) {
    return (
      <Box
        minH="100vh"
        bg="gray.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack gap={4}>
          <Box
            w="12"
            h="12"
            border="4px solid"
            borderColor="teal.200"
            borderTopColor="teal.500"
            borderRadius="full"
            animation="spin 1s linear infinite"
          />
          <Text color="gray.600">Loading...</Text>
        </VStack>
      </Box>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Box minH="100vh" bg={"blue.500"} position="relative">
      {/* Sticky Skip to Save Button */}
      <Box
        position="fixed"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1000}
        title="Skip to Save Buttons"
      >
        <IconButton
          aria-label="Skip to save buttons"
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          shadow="lg"
          onClick={() => ScrollTo('save-buttons-section')}
        >
          <FaArrowDown />
        </IconButton>
      </Box>

      <Container maxW="container.md" py={8}>
        <VStack gap={8} align="stretch">
          {/* Header */}
          <Box>
            <Heading size="xl" color="gray.700" mb={2}>
              Account Settings
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Manage your profile and preferences.
            </Text>
          </Box>

          {/* Profile Section */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <form onSubmit={handleSubmit}>
              <VStack gap={6} align="stretch">
                <Heading size="md" color="gray.700">
                  Profile Information
                </Heading>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Full Name
                  </Text>
                  <Input
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) => { null }}
                    bg="white"
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => { null }}
                    bg="white"
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="gray.700">
                    Phone Number
                  </Text>
                  <Input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => { null }}
                    bg="white"
                  />
                </Box>
              </VStack>
            </form>
          </Box>

          {/* Preferences Section */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="md" color="gray.700">
                Color Theme & Preferences
              </Heading>

              <Box>
                <Text fontWeight="medium" mb={2} color="gray.700">
                  Color Theme
                </Text>
                <Box position="relative">
                  <NativeSelectRoot>
                    <NativeSelectField
                      value={preferences.colorTheme}
                      onChange={handleThemeChange}
                      onMouseLeave={handleThemeLeave}
                      bg="white"
                      borderColor="gray.200"
                      _hover={{ borderColor: "gray.300" }}
                      _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)" }}
                    >
                      <option
                        value="teal-blue"
                        onMouseEnter={() => { null }}
                      >
                        Teal & Blue (Default)
                      </option>
                      <option
                        value="green-blue"
                        onMouseEnter={() => { null }}
                      >
                        Lime Green & Blue
                      </option>
                      <option
                        value="blue-purple"
                        onMouseEnter={() => { null }}
                      >
                        Blue & Purple
                      </option>
                      <option
                        value="green-teal"
                        onMouseEnter={() => { null }}
                      >
                        Green & Teal
                      </option>
                    </NativeSelectField>
                  </NativeSelectRoot>
                  {previewTheme && (
                    <Box
                      position="absolute"
                      top="-2px"
                      left="-2px"
                      right="-2px"
                      bottom="-2px"
                      border="2px solid"
                      borderColor="blue.400"
                      borderRadius="md"
                      pointerEvents="none"
                      zIndex={1}
                    />
                  )}
                </Box>
                <Text fontSize="sm" color="gray.500" mt={1}>
                  Choose your preferred color scheme for the interface. Hover over options to preview.
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Security Section */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="md" color="gray.700">
                Security Settings
              </Heading>

              {/* Session Timeout Settings */}
              <Box>
                <Text fontWeight="medium" mb={2} color="gray.700">
                  Auto-Logout After Inactivity
                </Text>
                <NativeSelectRoot>
                  <NativeSelectField
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value as SessionTimeout)}
                    bg="white"
                    borderColor="gray.200"
                    _hover={{ borderColor: "gray.300" }}
                    _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)" }}
                  >
                    <option value="3min">3 minutes</option>
                    <option value="5min">5 minutes (Default)</option>
                    <option value="10min">10 minutes</option>
                    <option value="never">Never</option>
                  </NativeSelectField>
                </NativeSelectRoot>
                <Text fontSize="sm" color="gray.500" mt={1}>
                  Automatically log out after the specified period of inactivity. This includes tab switching and background activity.
                </Text>
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="gray.700">
                  Current Password
                </Text>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  onChange={(e) => { null }}
                  bg="white"
                />
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="gray.700">
                  New Password
                </Text>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => { null }}
                  bg="white"
                />
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="gray.700">
                  Confirm New Password
                </Text>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => { null }}
                  bg="white"
                />
              </Box>
            </VStack>
          </Box>

          {/* Save Buttons Section */}
          <Box
            id="save-buttons-section"
            bg="white"
            p={8}
            borderRadius="lg"
            shadow="md"
            borderTop="4px solid"
            borderTopColor="teal.500"
          >
            <VStack gap={6} align="stretch">
              <Heading size="md" color="gray.700" textAlign="center">
                Save Changes
              </Heading>

              <HStack justify="space-between" wrap="wrap" gap={4}>
                <Button
                  colorScheme="teal"
                  size="lg"
                  loading={isSubmitting}
                  loadingText="Saving Profile..."
                  onClick={handleSubmit}
                  flex="1"
                  minW="200px"
                >
                  Save Profile
                </Button>

                <Button
                  colorScheme="blue"
                  size="lg"
                  loading={isPreferencesSubmitting}
                  loadingText="Saving Preferences..."
                  onClick={handlePreferencesSubmit}
                  flex="1"
                  minW="200px"
                >
                  Save Preferences
                </Button>

                <Button
                  colorScheme="purple"
                  size="lg"
                  loading={isPasswordSubmitting}
                  loadingText="Updating Password..."
                  onClick={handlePasswordSubmit}
                  flex="1"
                  minW="200px"
                  disabled={!currentPassword || !newPassword || !confirmPassword}
                >
                  Update Password
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}