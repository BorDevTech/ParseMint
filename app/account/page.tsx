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
import { FaArrowDown, FaPalette } from 'react-icons/fa';
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

  const { colorTheme, setColorTheme } = useTheme();
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    auto_logout_duration: 5, // default value, adjust as needed
    theme_selection: colorTheme, // use theme from context
  });

  const [previewTheme, setPreviewTheme] = useState<string | null>(null);
  const [sessionTimeout, setSessionTimeout] = useState('5min');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as 'teal-blue' | 'green-blue' | 'blue-purple' | 'green-teal';
    setColorTheme(newTheme);
    setProfileData(prev => ({ ...prev, theme_selection: newTheme }));
    setPreviewTheme(null); // Clear preview when theme is selected
  };

  const handleThemePreview = (themeName: string) => {
    if (themeName !== colorTheme) {
      setPreviewTheme(themeName);
      // Temporarily apply the theme for preview
      const root = document.documentElement;
      root.classList.remove('theme-teal-blue', 'theme-green-blue', 'theme-blue-purple', 'theme-green-teal');
      root.classList.add(`theme-${themeName}`);
    }
  };

  const handleThemeLeave = () => {
    if (previewTheme) {
      setPreviewTheme(null);
      // Restore the current theme
      const root = document.documentElement;
      root.classList.remove('theme-teal-blue', 'theme-green-blue', 'theme-blue-purple', 'theme-green-teal');
      root.classList.add(`theme-${colorTheme}`);
    }
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

  // Theme information for user guidance
  const themeInfo = {
    'teal-blue': { name: 'Teal & Blue', description: 'Calm and professional with teal and blue tones' },
    'green-blue': { name: 'Lime Green & Blue', description: 'Fresh and vibrant with lime green accents' },
    'blue-purple': { name: 'Blue & Purple', description: 'Modern and creative with blue and purple hues' },
    'green-teal': { name: 'Green & Teal', description: 'Natural and balanced with green and teal colors' }
  };

  const loading = false;
  const isAuthenticated = true;
  
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
    <Box minH="100vh" className="main-background" position="relative">
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
          bg="primary.600"
          color="white"
          _hover={{ bg: "primary.700" }}
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
            <Heading size="xl" color="secondary.900" mb={2}>
              Account Settings
            </Heading>
            <Text color="secondary.600" fontSize="lg">
              Manage your profile and preferences.
            </Text>
          </Box>

          {/* Profile Section */}
          <Box className="card-background" p={8} borderRadius="lg" shadow="md">
            <form onSubmit={handleSubmit}>
              <VStack gap={6} align="stretch">
                <Heading size="md" color="secondary.900">
                  Profile Information
                </Heading>

                <Box>
                  <Text fontWeight="medium" mb={2} color="secondary.900">
                    Full Name
                  </Text>
                  <Input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => { null }}
                    bg="white"
                    borderColor="neutral.300"
                    _hover={{ borderColor: "primary.400" }}
                    _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 1px var(--primary-500)" }}
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="secondary.900">
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => { null }}
                    bg="white"
                    borderColor="neutral.300"
                    _hover={{ borderColor: "primary.400" }}
                    _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 1px var(--primary-500)" }}
                  />
                </Box>

                <Box>
                  <Text fontWeight="medium" mb={2} color="secondary.900">
                    Phone Number
                  </Text>
                  <Input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => { null }}
                    bg="white"
                    borderColor="neutral.300"
                    _hover={{ borderColor: "primary.400" }}
                    _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 1px var(--primary-500)" }}
                  />
                </Box>
              </VStack>
            </form>
          </Box>

          {/* Preferences Section */}
          <Box 
            className={`card-background ${previewTheme ? 'theme-preview-highlight' : ''}`} 
            p={8} 
            borderRadius="lg" 
            shadow="md"
          >
            <VStack gap={6} align="stretch">
              <HStack>
                <FaPalette color="var(--primary-500)" />
                <Heading size="md" color="secondary.900">
                  Color Theme & Preferences
                </Heading>
              </HStack>

              <Box>
                <Text fontWeight="medium" mb={2} color="secondary.900">
                  Color Theme
                </Text>
                <Box position="relative" className="theme-preview-container">
                  <NativeSelectRoot>
                    <NativeSelectField
                      value={colorTheme}
                      onChange={handleThemeChange}
                      onMouseLeave={handleThemeLeave}
                      className="theme-select"
                      bg="white"
                      color="neutral.900"
                      borderColor="neutral.300"
                      fontSize="md"
                      fontWeight="500"
                      _hover={{ borderColor: "primary.400" }}
                      _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 3px rgba(var(--primary-500), 0.1)" }}
                    >
                      <option
                        value="teal-blue"
                        onMouseEnter={() => handleThemePreview('teal-blue')}
                        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                      >
                        {themeInfo['teal-blue'].name} (Default)
                      </option>
                      <option
                        value="green-blue"
                        onMouseEnter={() => handleThemePreview('green-blue')}
                        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                      >
                        {themeInfo['green-blue'].name}
                      </option>
                      <option
                        value="blue-purple"
                        onMouseEnter={() => handleThemePreview('blue-purple')}
                        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                      >
                        {themeInfo['blue-purple'].name}
                      </option>
                      <option
                        value="green-teal"
                        onMouseEnter={() => handleThemePreview('green-teal')}
                        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                      >
                        {themeInfo['green-teal'].name}
                      </option>
                    </NativeSelectField>
                  </NativeSelectRoot>
                  {previewTheme && (
                    <Box
                      position="absolute"
                      top="-3px"
                      left="-3px"
                      right="-3px"
                      bottom="-3px"
                      border="3px solid"
                      borderColor="accent.400"
                      borderRadius="lg"
                      pointerEvents="none"
                      zIndex={1}
                      boxShadow="0 0 20px rgba(var(--accent-400), 0.3)"
                    />
                  )}
                </Box>
                <Text fontSize="sm" color="secondary.500" mt={2}>
                  {themeInfo[colorTheme as keyof typeof themeInfo]?.description || 'Choose your preferred color scheme for the interface.'} 
                  <br />
                  <Text as="span" color="primary.600" fontWeight="medium">
                    Hover over options to preview them instantly.
                  </Text>
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Security Section */}
          <Box className="card-background" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="md" color="secondary.900">
                Security Settings
              </Heading>

              {/* Session Timeout Settings */}
              <Box>
                <Text fontWeight="medium" mb={2} color="secondary.900">
                  Auto-Logout After Inactivity
                </Text>
                <NativeSelectRoot>
                  <NativeSelectField
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                    className="theme-select"
                    bg="white"
                    color="neutral.900"
                    borderColor="neutral.300"
                    _hover={{ borderColor: "primary.400" }}
                    _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 3px rgba(var(--primary-500), 0.1)" }}
                  >
                    <option value="3min">3 minutes</option>
                    <option value="5min">5 minutes (Default)</option>
                    <option value="10min">10 minutes</option>
                    <option value="never">Never</option>
                  </NativeSelectField>
                </NativeSelectRoot>
                <Text fontSize="sm" color="secondary.500" mt={1}>
                  Automatically log out after the specified period of inactivity. This includes tab switching and background activity.
                </Text>
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="secondary.900">
                  Current Password
                </Text>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  onChange={(e) => { null }}
                  bg="white"
                  borderColor="neutral.300"
                  _hover={{ borderColor: "primary.400" }}
                  _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 1px var(--primary-500)" }}
                />
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="secondary.900">
                  New Password
                </Text>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  value={""
                    // newPassword
                  }
                  onChange={(e) => { null }}
                  bg="white"
                  borderColor="neutral.300"
                  _hover={{ borderColor: "primary.400" }}
                  _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 1px var(--primary-500)" }}
                />
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="secondary.900">
                  Confirm New Password
                </Text>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  value={""
                    // confirmPassword
                  }
                  onChange={(e) => { null }}
                  bg="white"
                  borderColor="neutral.300"
                  _hover={{ borderColor: "primary.400" }}
                  _focus={{ borderColor: "primary.500", boxShadow: "0 0 0 1px var(--primary-500)" }}
                />
              </Box>
            </VStack>
          </Box>

          {/* Save Buttons Section */}
          <Box
            id="save-buttons-section"
            className="card-background"
            p={8}
            borderRadius="lg"
            shadow="md"
            borderTop="4px solid"
            borderTopColor="primary.500"
          >
            <VStack gap={6} align="stretch">
              <Heading size="md" color="secondary.900" textAlign="center">
                Save Changes
              </Heading>

              <HStack justify="space-between" wrap="wrap" gap={4}>
                <Button
                  className="primary-button"
                  size="lg"
                  loading={false
                    // isSubmitting
                  }
                  loadingText="Saving Profile..."
                  onClick={handleSubmit}
                  flex="1"
                  minW="200px"
                >
                  Save Profile
                </Button>

                <Button
                  className="primary-button"
                  size="lg"
                  loading={false
                    // isPreferencesSubmitting
                  }
                  loadingText="Saving Preferences..."
                  onClick={() => { }
                    // handlePreferencesSubmit
                  }
                  flex="1"
                  minW="200px"
                >
                  Save Preferences
                </Button>

                <Button
                  className="accent-button"
                  size="lg"
                  loading={false
                    // isPasswordSubmitting
                  }
                  loadingText="Updating Password..."
                  onClick={() => { }
                    // handlePasswordSubmit
                  }
                  flex="1"
                  minW="200px"
                // disabled={""!currentPassword || !newPassword || !confirmPassword}
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