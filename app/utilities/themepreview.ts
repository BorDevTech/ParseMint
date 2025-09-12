export default function ThemePreview(theme: string) {
    // Apply theme to the root element
    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove('theme-teal-blue', 'theme-green-blue', 'theme-blue-purple', 'theme-green-teal');

    // Add new theme class
    root.classList.add(`theme-${theme}`);
} 