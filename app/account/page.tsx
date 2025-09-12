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

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
}

interface PreferencesData {
  colorTheme: string;
  notifications: boolean;
}

export default function AccountPage() {
  const { isAuthenticated, currentUser, updateUserData, loading, sessionTimeout, setSessionTimeout } = useAuth();
  const { colorTheme, setColorTheme } = useTheme();
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: '',
    email: '',
    phone: '',
  });
  const [preferences, setPreferences] = useState<PreferencesData>({
    colorTheme: 'teal-blue',
    notifications: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreferencesSubmitting, setIsPreferencesSubmitting] = useState(false);
  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [previewTheme, setPreviewTheme] = useState<string | null>(null);
  const [originalTheme, setOriginalTheme] = useState<string>('');

  const showToast = (title: string, description: string, _status: 'success' | 'error') => {
    // Simple alert for now, can be replaced with proper toast later
    alert(`${title}: ${description}`);
  };

  // Load user data when component mounts or currentUser changes
  useEffect(() => {
    if (currentUser) {
      setProfileData({
        fullName: currentUser.fullName || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
      });
    }
  }, [currentUser]);

  // Initialize preferences with current theme
  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      colorTheme: colorTheme,
    }));
    setOriginalTheme(colorTheme);
  }, [colorTheme]);

  useEffect(() => {
    // Only redirect if not loading and not authenticated
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  const handleProfileChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePreferencesChange = (field: keyof PreferencesData, value: string | boolean) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Update user data in context and session storage
    updateUserData({
      fullName: profileData.fullName,
      email: profileData.email,
      phone: profileData.phone,
    });

    // Simulate save process
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Profile updated", "Your profile information has been saved successfully.", "success");
    }, 1000);
  };

  const handlePreferencesSubmit = async () => {
    setIsPreferencesSubmitting(true);

    // Apply the theme to the application through context
    setColorTheme(preferences.colorTheme as 'teal-blue' | 'green-blue' | 'blue-purple' | 'green-teal');

    setTimeout(() => {
      setIsPreferencesSubmitting(false);
      setOriginalTheme(preferences.colorTheme);
      showToast("Preferences updated", "Your color theme and preferences have been saved.", "success");
    }, 1000);
  };

  const handlePasswordSubmit = async () => {
    if (newPassword !== confirmPassword) {
      showToast("Error", "New passwords do not match.", "error");
      return;
    }

    if (newPassword.length < 6) {
      showToast("Error", "Password must be at least 6 characters long.", "error");
      return;
    }

    setIsPasswordSubmitting(true);

    // Simulate password update
    setTimeout(() => {
      setIsPasswordSubmitting(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      showToast("Password updated", "Your password has been updated successfully.", "success");
    }, 1000);
  };

  const scrollToSave = () => {
    const element = document.getElementById('save-buttons-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const applyThemePreview = (theme: string) => {
    // Apply theme to the root element
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('theme-teal-blue', 'theme-green-blue', 'theme-blue-purple', 'theme-green-teal');
    
    // Add new theme class
    root.classList.add(`theme-${theme}`);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value;
    handlePreferencesChange('colorTheme', newTheme);
  };

  const handleThemeHover = (theme: string) => {
    if (!previewTheme) {
      setPreviewTheme(theme);
      applyThemePreview(theme);
    }
  };

  const handleThemeLeave = () => {
    if (previewTheme) {
      // Revert to current saved theme
      applyThemePreview(originalTheme);
      setPreviewTheme(null);
    }
  };

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
    <Box minH="100vh" bg="gray.50" position="relative">
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
          onClick={scrollToSave}
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
                    onChange={(e) => handleProfileChange('fullName', e.target.value)}
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
                    onChange={(e) => handleProfileChange('email', e.target.value)}
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
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
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
                        onMouseEnter={() => handleThemeHover('teal-blue')}
                      >
                        Teal & Blue (Default)
                      </option>
                      <option 
                        value="green-blue"
                        onMouseEnter={() => handleThemeHover('green-blue')}
                      >
                        Lime Green & Blue
                      </option>
                      <option 
                        value="blue-purple"
                        onMouseEnter={() => handleThemeHover('blue-purple')}
                      >
                        Blue & Purple
                      </option>
                      <option 
                        value="green-teal"
                        onMouseEnter={() => handleThemeHover('green-teal')}
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
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
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
                  onChange={(e) => setNewPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
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