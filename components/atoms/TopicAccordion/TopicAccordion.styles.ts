import { Accordion, styled } from "@mui/material";

export const StyledAccordion = styled(Accordion)(() => ({
  borderRadius: 0,
  overflow: "none",
  ".MuiPaper-root": {
    marginBottom: 0,
  },
}));
