import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../api/client";
import { AccountProvider } from "../providers/AccountProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AccountProvider account={null}>
            <Component {...pageProps} />
          </AccountProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
