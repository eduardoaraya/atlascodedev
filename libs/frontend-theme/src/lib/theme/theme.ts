import { createTheme, responsiveFontSizes } from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';

export const palette = createTheme({
  palette: {
    primary: {
      main: '#FF793F',
    },
    secondary: {
      main: '#283047',
    },
  },
});

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '10px',
          borderRadius: '50px',
          padding: '0.8em 2.8em',
          textTransform: 'inherit',

          '&.MuiButton-outlined': {
            border: `2.5px solid ${palette.palette.primary.main}`,
            fontWeight: 500,
          },
        },
      },
    },
  },

  breakpoints: breakpoints,
  typography: typography,

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
