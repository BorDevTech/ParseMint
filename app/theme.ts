'use client';

import { createSystem, defaultConfig } from '@chakra-ui/react';

// Enhanced color palette using standard Chakra UI color extensions
const customConfig = {
  theme: {
    tokens: {
      colors: {
        // Custom blue palette (brand)
        brand: {
          50: { value: '#c4d3e0' },
          100: { value: '#5dd3e9' },
          200: { value: '#0194fe' },
          300: { value: '#012b7e' },
          400: { value: '#011149' },
        },
        // Accent palette (deep blue)
        accent: {
          50: { value: '#c4d3e0' },
          100: { value: '#5dd3e9' },
          200: { value: '#0194fe' },
          300: { value: '#012b7e' },
          400: { value: '#011149' },
        },
        // Secondary palette (light blue)
        secondary: {
          50: { value: '#c4d3e0' },
          100: { value: '#5dd3e9' },
          200: { value: '#0194fe' },
          300: { value: '#012b7e' },
          400: { value: '#011149' },
        },
        // Keep highlight and premium as fallback for now
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