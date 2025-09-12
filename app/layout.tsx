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
              <Box minH="100vh" display="flex" flexDirection="column">
                <Navbar />
                <Box flex="1">
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
