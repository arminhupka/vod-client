import "../styles/globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { deleteCookie, getCookie } from "cookies-next";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import NextNProgress from "nextjs-progressbar";
import { QueryClientProvider } from "react-query";

import { GetMeResponsesDto } from "../api/api-types";
import { client, queryClient } from "../api/client";
import { AccountProvider } from "../providers/AccountProvider";
import { CartProvider } from "../providers/CartProvider";
import { theme } from "../theme/theme";

type TAppProps = AppProps & {
  account: null | GetMeResponsesDto;
  watched: string[];
};

function MyApp({ Component, pageProps, account, watched }: TAppProps) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AccountProvider account={account} watched={watched}>
            <CartProvider>
              <NextNProgress
                color='#fff'
                startPosition={0.3}
                stopDelayMs={200}
                height={16}
                showOnShallow={true}
              />
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
  const watched = [];

  if (token) {
    try {
      const { data } = await client.get("/auth/me", {
        headers: {
          Cookie: `token=${token}`,
        },
      });
      const { data: watchedLessons } = await client.get<string[]>(
        "/user/watched",
        {
          headers: {
            Cookie: `token=${token}`,
          },
        },
      );

      account = data || null;
      watched.push(...watchedLessons);
    } catch {
      deleteCookie("token", { res: context.ctx.res, req: context.ctx.req });
    }
  }

  return {
    ...ctx,
    account,
    watched,
  };
};

export default MyApp;
