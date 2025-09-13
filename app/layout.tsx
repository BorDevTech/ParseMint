
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Ubuntu } from 'next/font/google';
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-ubuntu' });

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
  <body className={ubuntu.variable + " antialiased"}>
        <Providers>
          <ThemeProvider>
            <AuthProvider>
              <Box 
                minH="100vh" 
                display="flex" 
                flexDirection="column"
                bgGradient="linear(to-br, brand.25, secondary.25, accent.25, premium.25)"
                fontSize={{ base: "14px", sm: "16px" }}
              >
                <Navbar />
                <Box 
                  flex="1"
                  bgGradient="linear(to-br, white, brand.50, secondary.50)"
                  minH={{ base: "calc(100vh - 120px)", md: "calc(100vh - 140px)" }}
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
