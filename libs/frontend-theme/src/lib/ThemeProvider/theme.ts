import { createTheme, responsiveFontSizes } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

const titleStyle = (size: string): TypographyStyleOptions => ({
  fontSize: size,
  fontFamily: 'Nunito Sans, sans-serif',
  fontStyle: 'normal',
  color: '#323232',
});

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 300,
      sm: 640,
      md: 1024,
      lg: 1170,
      xl: 1400,
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: titleStyle('33px'),
    h2: titleStyle('26px'),
    h3: titleStyle('22px'),
    h4: titleStyle('18px'),
    h5: titleStyle('16px'),
    h6: titleStyle('12px'),
    body1: {
      color: '#757575',
    },
  },

  palette: {
    primary: {
      main: '#FF793F',
    },
    secondary: {
      main: '#283047',
    },
  },
});

export default responsiveFontSizes(theme);
