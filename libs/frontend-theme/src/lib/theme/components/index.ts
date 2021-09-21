import { Components, Theme } from '@mui/material';
import buttonOverride, { buttonBaseOverride } from './button';
import { inputOutlinedOverride } from './input';

const components = (theme: Theme): Components => {
  return {
    MuiButton: buttonOverride(theme),
    MuiButtonBase: buttonBaseOverride(theme),
    MuiOutlinedInput: inputOutlinedOverride(theme),
  };
};

export default components;
