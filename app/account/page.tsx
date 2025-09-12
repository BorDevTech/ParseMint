'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
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
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  });
  const [preferences, setPreferences] = useState<PreferencesData>({
    colorTheme: 'teal-blue',
    notifications: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

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

    // Simulate save process
    setTimeout(() => {
      setIsSubmitting(false);
      // Show success message (could add toast here)
    }, 1000);
  };

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <Box minH="100vh" bg="gray.50">
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

                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  loading={isSubmitting}
                  loadingText="Saving..."
                >
                  Save Profile
                </Button>
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
                <select
                  value={preferences.colorTheme}
                  onChange={(e) => handlePreferencesChange('colorTheme', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    fontSize: '16px',
                  }}
                >
                  <option value="teal-blue">Teal & Blue (Default)</option>
                  <option value="green-blue">Lime Green & Blue</option>
                  <option value="blue-purple">Blue & Purple</option>
                  <option value="green-teal">Green & Teal</option>
                </select>
                <Text fontSize="sm" color="gray.500" mt={1}>
                  Choose your preferred color scheme for the interface.
                </Text>
              </Box>

              <Button
                colorScheme="teal"
                size="lg"
                loading={isSubmitting}
                loadingText="Saving..."
                onClick={() => {
                  setIsSubmitting(true);
                  setTimeout(() => setIsSubmitting(false), 1000);
                }}
              >
                Save Preferences
              </Button>
            </VStack>
          </Box>

          {/* Security Section */}
          <Box bg="white" p={8} borderRadius="lg" shadow="md">
            <VStack gap={6} align="stretch">
              <Heading size="md" color="gray.700">
                Security Settings
              </Heading>

              <Box>
                <Text fontWeight="medium" mb={2} color="gray.700">
                  Current Password
                </Text>
                <Input
                  type="password"
                  placeholder="Enter current password"
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
                  bg="white"
                />
              </Box>

              <Button
                colorScheme="teal"
                size="lg"
              >
                Update Password
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}