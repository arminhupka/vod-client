import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { ReactElement } from "react";

import { useCartContext } from "../../../providers/CartProvider";
import CartTotal from "../../atoms/CartTotal/CartTotal";

const CreateOrderForm = (): ReactElement => {
  const { cart } = useCartContext();

  return (
    <Box mt={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant='h2'
                fontSize={24}
                fontFamily='Playfair Display'>
                Twoje dane
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label='Imię' />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label='Nazwisko' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Adres' />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label='Kod pocztowy' />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label='Miasto' />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label='Kraj' />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant='h2'
                fontSize={24}
                fontFamily='Playfair Display'>
                Dane do faktury
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Nazwa firmy' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Numer NIP' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Adres' />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label='Kod pocztowy' />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label='Miasto' />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label='Kraj' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <CartTotal cartItems={cart} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateOrderForm;
