import { Box, BoxProps, Button, styled, Typography } from "@mui/material";

export const StyledWrapper = styled(Box)(() => ({}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontFamily: "Playfair Display",
  fontSize: theme.typography.h5.fontSize,
}));

export const StyledDescription = styled(Typography)(() => ({
  lineHeight: "170%",
}));

interface IStyledDescriptionWrapper extends BoxProps {
  showFull?: boolean;
}

export const StyledDescriptionWrapper = styled(Box)<IStyledDescriptionWrapper>(
  ({ showFull }) => ({
    position: "relative",
    maxHeight: 250,
    overflow: "hidden",
    "&::after": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "50%",
      display: "block",
      background: "linear-gradient(to bottom, transparent, white)",
      content: '""',
    },
    ...(showFull && {
      maxHeight: "auto",
      overflow: "none",
      "&::after": {
        visible: "none",
      },
    }),
  }),
);

export const StyledShowMoreButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(4),
  left: "50%",
  background: theme.palette.common.white,
  zIndex: 1,
  transform: `translateX(-50%)`,
  "&:hover": {
    background: theme.palette.common.white,
  },
}));

StyledShowMoreButton.defaultProps = {
  variant: "outlined",
};
