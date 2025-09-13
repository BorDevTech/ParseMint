'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useRef } from 'react';
// Update the import path to match the actual location of user-signup.ts
import type { UserSignupData } from '../types/user-signup';

export type SessionTimeout = 'never' | '3min' | '5min' | '10min';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: UserSignupData | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  updateUserData: (userData: Partial<UserSignupData>) => void;
  sessionTimeout: SessionTimeout;
  setSessionTimeout: (timeout: SessionTimeout) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Session storage keys
const SESSION_KEYS = {
  IS_AUTHENTICATED: 'parsemint_is_authenticated',
  CURRENT_USER: 'parsemint_current_user',
  SESSION_TIMEOUT: 'parsemint_session_timeout',
  LAST_ACTIVITY: 'parsemint_last_activity',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserSignupData | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionTimeout, setSessionTimeoutState] = useState<SessionTimeout>('5min');

  // Activity tracking refs
  const activityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef<number>(Date.now());

  // Get timeout duration in milliseconds
  const getTimeoutDuration = (timeout: SessionTimeout): number => {
    switch (timeout) {
      case '3min': return 3 * 60 * 1000;
      case '5min': return 5 * 60 * 1000;
      case '10min': return 10 * 60 * 1000;
      case 'never': return 0;
      default: return 5 * 60 * 1000;
    }
  };

  // Track user activity
  const trackActivity = useCallback(() => {
    lastActivityRef.current = Date.now();
    try {
      sessionStorage.setItem(SESSION_KEYS.LAST_ACTIVITY, lastActivityRef.current.toString());
    } catch (error) {
      console.error('Error updating last activity:', error);
    }
  }, []);

  // Save to session storage whenever auth state changes
  const saveToSession = useCallback((authenticated: boolean, user: UserSignupData | null) => {
    try {
      if (authenticated && user) {
        sessionStorage.setItem(SESSION_KEYS.IS_AUTHENTICATED, 'true');
        sessionStorage.setItem(SESSION_KEYS.CURRENT_USER, JSON.stringify(user));
        sessionStorage.setItem(SESSION_KEYS.SESSION_TIMEOUT, sessionTimeout);
        trackActivity();
      } else {
        sessionStorage.removeItem(SESSION_KEYS.IS_AUTHENTICATED);
        sessionStorage.removeItem(SESSION_KEYS.CURRENT_USER);
        sessionStorage.removeItem(SESSION_KEYS.SESSION_TIMEOUT);
        sessionStorage.removeItem(SESSION_KEYS.LAST_ACTIVITY);
      }
    } catch (error) {
      console.error('Error saving session data:', error);
    }
  }, [sessionTimeout, trackActivity]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    if (activityTimeoutRef.current) {
      clearTimeout(activityTimeoutRef.current);
      activityTimeoutRef.current = null;
    }
    saveToSession(false, null);
  }, [saveToSession]);

  // Reset activity timeout
  const resetActivityTimeout = useCallback(() => {
    if (activityTimeoutRef.current) {
      clearTimeout(activityTimeoutRef.current);
    }

    const timeoutDuration = getTimeoutDuration(sessionTimeout);
    if (timeoutDuration > 0 && isAuthenticated) {
      activityTimeoutRef.current = setTimeout(() => {
        console.log('Session timed out due to inactivity');
        logout();
      }, timeoutDuration);
    }
  }, [sessionTimeout, isAuthenticated, logout]);

  // Activity event listeners
  useEffect(() => {
    if (!isAuthenticated || sessionTimeout === 'never') return;

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

    const handleActivity = () => {
      trackActivity();
      resetActivityTimeout();
    };

    // Add event listeners
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    // Handle tab focus/blur
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab became inactive, keep tracking last activity but don't reset timeout
        trackActivity();
      } else {
        // Tab became active, reset timeout
        resetActivityTimeout();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Set initial timeout
    resetActivityTimeout();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (activityTimeoutRef.current) {
        clearTimeout(activityTimeoutRef.current);
      }
    };
  }, [isAuthenticated, sessionTimeout, trackActivity, resetActivityTimeout]);

  // Check for session expiry on mount
  const checkSessionExpiry = useCallback(() => {
    try {
      const lastActivity = sessionStorage.getItem(SESSION_KEYS.LAST_ACTIVITY);
      const storedTimeout = sessionStorage.getItem(SESSION_KEYS.SESSION_TIMEOUT) as SessionTimeout;

      if (lastActivity && storedTimeout && storedTimeout !== 'never') {
        const lastActivityTime = parseInt(lastActivity);
        const timeoutDuration = getTimeoutDuration(storedTimeout);
        const timeSinceLastActivity = Date.now() - lastActivityTime;

        if (timeSinceLastActivity > timeoutDuration) {
          console.log('Session expired due to inactivity');
          return false; // Session expired
        }
      }
      return true; // Session still valid
    } catch (error) {
      console.error('Error checking session expiry:', error);
      return false;
    }
  }, []);

  // Load session data on mount
  useEffect(() => {
    const loadSession = async () => {
      try {
        const storedAuth = sessionStorage.getItem(SESSION_KEYS.IS_AUTHENTICATED);
        const storedUser = sessionStorage.getItem(SESSION_KEYS.CURRENT_USER);
        const storedTimeout = sessionStorage.getItem(SESSION_KEYS.SESSION_TIMEOUT) as SessionTimeout;

        if (storedAuth === 'true' && storedUser) {
          // Check if session has expired
          if (checkSessionExpiry()) {
            setCurrentUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
            if (storedTimeout) {
              setSessionTimeoutState(storedTimeout);
            }
            trackActivity(); // Update last activity time
          } else {
            // Clear expired session
            sessionStorage.removeItem(SESSION_KEYS.IS_AUTHENTICATED);
            sessionStorage.removeItem(SESSION_KEYS.CURRENT_USER);
            sessionStorage.removeItem(SESSION_KEYS.LAST_ACTIVITY);
          }
        }
      } catch (error) {
        console.error('Error loading session data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, [checkSessionExpiry, trackActivity]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // For now, we'll use simple client-side authentication
      // In production, this should be done server-side with proper security

      // Check for test users first (fallback for development)
      type TestUser = UserSignupData & { password: string };

      const testUsers: TestUser[] = [
        {
          id: "test-user-1",
          firstName: "Test",
          lastName: "User",
          email: "test@parsemint.com",
          phone: "+1 (555) 123-4567",
          hearAboutUs: "Friend or Family",
          account_created_at: new Date().toISOString(),
          hearAboutUsOther: "",
          referralCode: "",
          password: "test123",
        },
        {
          id: "test-user-2",
          firstName: "Demo",
          lastName: "User",
          email: "demo@parsemint.com",
          phone: "+1 (555) 987-6543",
          hearAboutUs: "Social Media",
          account_created_at: new Date().toISOString(),
          hearAboutUsOther: "",
          referralCode: "",
          password: "demo123",
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
      // TODO: Implement proper authentication for blob storage users
      // Currently UserSignupData doesn't include password field for security reasons
      // try {
      //   const user = await UserFetchByEmail(email);
      //   if (user && user.password === password) {
      //     setCurrentUser(user);
      //     setIsAuthenticated(true);
      //     saveToSession(true, user);
      //     setLoading(false);
      //     return true;
      //   }
      // } catch (blobError) {
      //   console.log('Blob storage not available, using test users only', blobError);
      // }

      setLoading(false);
      return false;
    } catch (loginError) {
      console.error('Login error:', loginError);
      setLoading(false);
      return false;
    }
  };

  const updateUserData = useCallback((userData: Partial<UserSignupData>) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, ...userData };
      setCurrentUser(updatedUser);
      saveToSession(true, updatedUser);
    }
  }, [currentUser, saveToSession]);

  const setSessionTimeout = useCallback((timeout: SessionTimeout) => {
    setSessionTimeoutState(timeout);
    try {
      sessionStorage.setItem(SESSION_KEYS.SESSION_TIMEOUT, timeout);
    } catch (error) {
      console.error('Error saving session timeout:', error);
    }
    // Reset activity timeout with new duration
    if (isAuthenticated) {
      resetActivityTimeout();
    }
  }, [isAuthenticated, resetActivityTimeout]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      currentUser,
      login,
      logout,
      loading,
      updateUserData,
      sessionTimeout,
      setSessionTimeout
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