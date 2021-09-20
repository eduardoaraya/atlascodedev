import { Components, Theme } from '@mui/material';
import buttonOverride, { buttonBaseOverride } from './button';

const components = (theme: Theme): Components => {
  return {
    MuiButton: buttonOverride(theme),
    MuiButtonBase: buttonBaseOverride(theme),
  };
};

export default components;
