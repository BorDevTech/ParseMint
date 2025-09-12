'use client';

import { Button, Icon } from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      _hover={{
        bg: theme === 'light' ? 'gray.100' : 'gray.700',
      }}
    >
      <Icon 
        as={theme === 'light' ? MdDarkMode : MdLightMode} 
        boxSize={5}
        color={theme === 'light' ? 'gray.600' : 'gray.300'}
      />
    </Button>
  );
}