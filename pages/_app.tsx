import "../styles/globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { getCookie } from "cookies-next";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { QueryClientProvider } from "react-query";

import { GetMeResponsesDto } from "../api/api-types";
import { client, queryClient } from "../api/client";
import { AccountProvider } from "../providers/AccountProvider";
import { CartProvider } from "../providers/CartProvider";
import { theme } from "../theme/theme";

type TAppProps = AppProps & {
  account: null | GetMeResponsesDto;
};

function MyApp({ Component, pageProps, account }: TAppProps) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AccountProvider account={account}>
            <CartProvider>
              <Component {...pageProps} />
            </CartProvider>
          </AccountProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  const token = getCookie("token", {
    res: context.ctx.res,
    req: context.ctx.req,
  });

  let account: null | GetMeResponsesDto = null;

  if (token) {
    const { data } = await client.get("/auth/me", {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    account = data || null;
  }

  return {
    ...ctx,
    account,
  };
};

export default MyApp;
