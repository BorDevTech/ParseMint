import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "ParseMint",
  description: "Digital rewards platform that accepts receipts and provides monetary value points to users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <ThemeProvider>
            <AuthProvider>
              <Box 
                minH="100vh" 
                display="flex" 
                flexDirection="column"
                bgGradient="linear(to-br, brand.25, secondary.25, accent.25, premium.25)"
              >
                <Navbar />
                <Box 
                  flex="1"
                  bgGradient="linear(to-br, white, brand.50, secondary.50)"
                  minH="calc(100vh - 140px)"
                >
                  {children}
                </Box>
                <Footer />
              </Box>
            </AuthProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
