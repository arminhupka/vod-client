import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { UpdateUserDto } from "../../../api/api-types";
import { useAccountContext } from "../../../providers/AccountProvider";
import { useCartContext } from "../../../providers/CartProvider";
import CartTotal from "../../atoms/CartTotal/CartTotal";

const CreateOrderForm = (): ReactElement => {
  const [isCompany, setIsCompany] = useState<boolean>(false);

  const { cart } = useCartContext();
  const { user } = useAccountContext();

  const formMethods = useForm<UpdateUserDto>();

  const handleSelectIsCompany = () => setIsCompany(!isCompany);

  useEffect(() => {
    if (user) {
      formMethods.setValue("firstName", user.billing.firstName);
      formMethods.setValue("lastName", user.billing.lastName);
      formMethods.setValue("street", user.billing.street);
      formMethods.setValue("postCode", user.billing.postCode);
      formMethods.setValue("city", user.billing.city);
      formMethods.setValue("country", user.billing.country);
      formMethods.setValue("companyName", user.billing.companyName);
      formMethods.setValue("vatNumber", user.billing.vatNumber);
      formMethods.setValue("companyStreet", user.billing.companyStreet);
      formMethods.setValue("companyPostCode", user.billing.companyPostCode);
      formMethods.setValue("companyCity", user.billing.companyCity);
      formMethods.setValue("companyCountry", user.billing.companyCountry);
    }
  }, []);

  return (
    <FormProvider {...formMethods}>
      <Box mt={2}>
        <form>
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
                  <TextField
                    fullWidth
                    label='Imię'
                    {...formMethods.register("firstName")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Nazwisko'
                    {...formMethods.register("lastName")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Adres'
                    {...formMethods.register("street")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label='Kod pocztowy'
                    {...formMethods.register("postCode")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label='Miasto'
                    {...formMethods.register("city")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label='Kraj'
                    {...formMethods.register("country")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    onChange={handleSelectIsCompany}
                    label='Zamówienie na firmę'
                  />
                </Grid>
                {isCompany && (
                  <>
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
                      <TextField
                        fullWidth
                        label='Nazwa firmy'
                        {...formMethods.register("companyName")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label='Numer NIP'
                        {...formMethods.register("vatNumber")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label='Adres'
                        {...formMethods.register("companyStreet")}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label='Kod pocztowy'
                        {...formMethods.register("companyPostCode")}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label='Miasto'
                        {...formMethods.register("companyCity")}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label='Kraj'
                        {...formMethods.register("companyCountry")}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <CartTotal cartItems={cart} />
            </Grid>
          </Grid>
        </form>
      </Box>
    </FormProvider>
  );
};

export default CreateOrderForm;
