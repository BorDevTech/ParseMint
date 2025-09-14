
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Box } from "@chakra-ui/react";
// Fallback font configuration for sandboxed environments
const ubuntu = { variable: '--font-ubuntu' };

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
                h="100vh" 
                display="grid"
                gridTemplateRows="10vh 80vh 10vh"
                gridTemplateAreas={`"navbar" "main" "footer"`}
                bgGradient="linear(to-br, brand.25, secondary.25, accent.25, premium.25)"
                fontSize={{ base: "14px", sm: "16px" }}
                overflow="hidden"
              >
                <Box gridArea="navbar">
                  <Navbar />
                </Box>
                <Box 
                  gridArea="main"
                  bgGradient="linear(to-br, white, brand.50, secondary.50)"
                  overflow="auto"
                >
                  {children}
                </Box>
                <Box gridArea="footer">
                  <Footer />
                </Box>
              </Box>
            </AuthProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
