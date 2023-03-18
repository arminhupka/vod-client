import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h5.fontSize,
}));

export const StyledSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.primary.main,
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const StyledDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const StyledTopicName = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h6.fontSize,
}));
