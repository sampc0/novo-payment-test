"use client";

import { Box, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const year = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        bgcolor: theme.palette.primary.main,
        color: 'aliceblue',
        mt: 'auto'
      }}
    >
      <Typography color="inherit">Desarrollado por [Sam Padilla]</Typography>
      <Typography color="inherit">{year}</Typography>
    </Box>
  );
};
