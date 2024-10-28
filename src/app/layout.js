"use client";
import theme from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
