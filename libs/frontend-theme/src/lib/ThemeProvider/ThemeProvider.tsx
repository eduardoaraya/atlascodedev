import {
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from '@mui/material';
import GlobalStyles from '../GlobalStyles/Global';
import defaultTheme from '../theme/theme';

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MaterialThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
}

export default ThemeProvider;
