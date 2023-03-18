import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ListItem,
  ListItemText,
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
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.primary.main,
  },
  "& .MuiAccordionSummary-content": {
    margin: `${theme.spacing(1.5)} 0`,
    marginRight: theme.spacing(2),
  },
}));

export const StyledDetails = styled(AccordionDetails)(() => ({
  // padding: theme.spacing(2),
  padding: 0,
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const StyledTopicName = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(0.5),
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h6.fontSize,
}));

export const StyledSummaryWrapper = styled(Box)(() => ({}));

export const StyledSummaryText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.grey["700"],
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderBottom: "1px solid",
  borderColor: theme.palette.grey[300],
  "&:last-of-type": {
    border: "none",
  },
  "&:hover": {
    background: theme.palette.grey[50],
  },
}));

StyledListItem.defaultProps = {};

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  span: {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 500,
  },
}));
