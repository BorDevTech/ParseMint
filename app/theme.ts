'use client';

import { createSystem, defaultConfig } from '@chakra-ui/react';

// Enhanced color palette using standard Chakra UI color extensions
const customConfig = {
  theme: {
    tokens: {
      colors: {
        // Enhanced teal palette (brand)
        brand: {
          50: { value: '#e6fffa' },
          100: { value: '#b2f5ea' },
          200: { value: '#81e6d9' },
          300: { value: '#4fd1c7' },
          400: { value: '#38b2ac' },
          500: { value: '#319795' },
          600: { value: '#2c7a7b' },
          700: { value: '#285e61' },
          800: { value: '#234e52' },
          900: { value: '#1d4044' },
        },
        // Blue palette (secondary)
        secondary: {
          50: { value: '#e6f3ff' },
          100: { value: '#bae6fd' },
          200: { value: '#7dd3fc' },
          300: { value: '#38bdf8' },
          400: { value: '#0ea5e9' },
          500: { value: '#0284c7' },
          600: { value: '#0369a1' },
          700: { value: '#075985' },
          800: { value: '#0c4a6e' },
          900: { value: '#0f172a' },
        },
        // Orange palette (accent)
        accent: {
          50: { value: '#fff7ed' },
          100: { value: '#ffedd5' },
          200: { value: '#fed7aa' },
          300: { value: '#fdba74' },
          400: { value: '#fb923c' },
          500: { value: '#f97316' },
          600: { value: '#ea580c' },
          700: { value: '#c2410c' },
          800: { value: '#9a3412' },
          900: { value: '#7c2d12' },
        },
        // Gold/Yellow palette (highlight)
        highlight: {
          50: { value: '#fefce8' },
          100: { value: '#fef9c3' },
          200: { value: '#fef08a' },
          300: { value: '#fde047' },
          400: { value: '#facc15' },
          500: { value: '#eab308' },
          600: { value: '#ca8a04' },
          700: { value: '#a16207' },
          800: { value: '#854d0e' },
          900: { value: '#713f12' },
        },
        // Purple palette (premium)
        premium: {
          50: { value: '#faf5ff' },
          100: { value: '#f3e8ff' },
          200: { value: '#e9d5ff' },
          300: { value: '#d8b4fe' },
          400: { value: '#c084fc' },
          500: { value: '#a855f7' },
          600: { value: '#9333ea' },
          700: { value: '#7c3aed' },
          800: { value: '#6b21a8' },
          900: { value: '#581c87' },
        },
      },
    },
  },
};

export const system = createSystem(defaultConfig, customConfig);