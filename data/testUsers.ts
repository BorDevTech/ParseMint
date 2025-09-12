// Test user data for development
export const TEST_USERS = [
  {
    id: "test-user-1",
    email: "test@parsemint.com",
    password: "password123", // In production, this should be hashed
    fullName: "Test User",
    phone: "+1 (555) 123-4567",
    createdAt: new Date().toISOString(),
  },
  {
    id: "test-user-2", 
    email: "demo@parsemint.com",
    password: "demo123",
    fullName: "Demo User",
    phone: "+1 (555) 987-6543",
    createdAt: new Date().toISOString(),
  }
];