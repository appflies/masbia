import "@/assets/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme, inter } from "@/constants";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
