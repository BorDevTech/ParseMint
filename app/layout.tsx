
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Grid, GridItem } from "@chakra-ui/react";

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
              <Grid 
                h="100vh" 
                templateRows="5vh 85vh 10vh"
                templateAreas={`"navbar" "main" "footer"`}
                className="main-background"
                fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                overflow="hidden"
              >
                <GridItem area="navbar">
                  <Navbar />
                </GridItem>
                <GridItem 
                  area="main"
                  className="main-background"
                  overflow="auto"
                >
                  {children}
                </GridItem>
                <GridItem area="footer">
                  <Footer />
                </GridItem>
              </Grid>
            </AuthProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
