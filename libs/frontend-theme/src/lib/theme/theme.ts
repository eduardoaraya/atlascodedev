import { createTheme, responsiveFontSizes } from '@mui/material';
import breakpoints from './breakpoints';
import components from './components';
import palette from './palette';
import typography from './typography';

export const paletteLocal = createTheme({
  palette: {
    primary: {
      main: '#FF793F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#283047',
    },
  },
});

export const theme = createTheme({
  components: components(paletteLocal),
  breakpoints: breakpoints,
  typography: typography,
  palette: palette,
});

export default responsiveFontSizes(theme);
