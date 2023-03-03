import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../api/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
