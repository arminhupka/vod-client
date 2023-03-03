import { StyledWrapper } from "./AccountLayout.styles";
import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AccountLayout = ({ children }: IProps) => (
  <StyledWrapper>
    <Grid container spacing={5}>
      <Grid item xs={3}>
        <h1>Hello</h1>
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  </StyledWrapper>
);

export default AccountLayout;
