"use client";

import { createTheme } from "@mui/material/styles";
import { inter } from "@/constants";

const mode: any = "light";

export const theme = createTheme({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#101a34",
          },
          secondary: {
            main: "#101a34",
          },
        }
      : {
          primary: {
            main: "#101a34",
          },
          secondary: {
            main: "#101a34",
          },
        }),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
