import { Box, Typography } from "@mui/material";
import Head from "next/head";

import MainLayout from "../components/layouts/MainLayout";

const NotFoundPage = () => (
  <>
    <Head>
      <title>404 | {process.env.NEXT_PUBLIC_APP_NAME}</title>
    </Head>
    <MainLayout center>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'>
        <Typography
          fontWeight={700}
          fontFamily='Playfair Display'
          fontSize={84}
          color='primary'>
          404
        </Typography>
        <Typography
          fontWeight={700}
          fontFamily='Playfair Display'
          fontSize={48}>
          Strona nie znaleziona
        </Typography>
      </Box>
    </MainLayout>
  </>
);

export default NotFoundPage;
