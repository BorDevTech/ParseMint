'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../data/controls/users/userCreate';
import UserFetchByEmail from '../data/controls/users/userFetchByEmail';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // For now, we'll use simple client-side authentication
      // In production, this should be done server-side with proper security
      
      // Check for test users first (fallback for development)
      const testUsers = [
        {
          id: "test-user-1",
          email: "test@parsemint.com",
          password: "password123",
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
      
      const testUser = testUsers.find(user => user.email === email && user.password === password);
      if (testUser) {
        setCurrentUser(testUser);
        setIsAuthenticated(true);
        setLoading(false);
        return true;
      }
      
      // Try to fetch user from blob storage (when BLOB_READ_WRITE_TOKEN is available)
      try {
        const user = await UserFetchByEmail(email);
        if (user && user.password === password) {
          setCurrentUser(user);
          setIsAuthenticated(true);
          setLoading(false);
          return true;
        }
      } catch (blobError) {
        console.log('Blob storage not available, using test users only');
      }
      
      setLoading(false);
      return false;
    } catch (loginError) {
      console.error('Login error:', loginError);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}