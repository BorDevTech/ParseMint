'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../data/controls/users/userCreate';
import UserFetchByEmail from '../data/controls/users/userFetchByEmail';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  updateUserData: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Session storage keys
const SESSION_KEYS = {
  IS_AUTHENTICATED: 'parsemint_is_authenticated',
  CURRENT_USER: 'parsemint_current_user',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load session data on mount
  useEffect(() => {
    try {
      const storedAuth = sessionStorage.getItem(SESSION_KEYS.IS_AUTHENTICATED);
      const storedUser = sessionStorage.getItem(SESSION_KEYS.CURRENT_USER);
      
      if (storedAuth === 'true' && storedUser) {
        setIsAuthenticated(true);
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error loading session data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save to session storage whenever auth state changes
  const saveToSession = (authenticated: boolean, user: User | null) => {
    try {
      if (authenticated && user) {
        sessionStorage.setItem(SESSION_KEYS.IS_AUTHENTICATED, 'true');
        sessionStorage.setItem(SESSION_KEYS.CURRENT_USER, JSON.stringify(user));
      } else {
        sessionStorage.removeItem(SESSION_KEYS.IS_AUTHENTICATED);
        sessionStorage.removeItem(SESSION_KEYS.CURRENT_USER);
      }
    } catch (error) {
      console.error('Error saving session data:', error);
    }
  };

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
        saveToSession(true, testUser);
        setLoading(false);
        return true;
      }
      
      // Try to fetch user from blob storage (when BLOB_READ_WRITE_TOKEN is available)
      try {
        const user = await UserFetchByEmail(email);
        if (user && user.password === password) {
          setCurrentUser(user);
          setIsAuthenticated(true);
          saveToSession(true, user);
          setLoading(false);
          return true;
        }
      } catch (blobError) {
        console.log('Blob storage not available, using test users only', blobError);
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
    saveToSession(false, null);
  };

  const updateUserData = (userData: Partial<User>) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, ...userData };
      setCurrentUser(updatedUser);
      saveToSession(true, updatedUser);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      currentUser, 
      login, 
      logout, 
      loading, 
      updateUserData 
    }}>
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