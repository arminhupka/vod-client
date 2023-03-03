import { Grid } from "@mui/material";
import { ReactNode } from "react";

import AccountSidebar from "../../organism/AccountSidebar/AccountSidebar";
import { StyledWrapper } from "./AccountLayout.styles";

interface IProps {
  children: ReactNode;
}

const AccountLayout = ({ children }: IProps) => (
  <StyledWrapper>
    <Grid container spacing={5}>
      <Grid item xs={3}>
        <AccountSidebar />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  </StyledWrapper>
);

export default AccountLayout;
