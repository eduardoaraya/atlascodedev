import { Components, Theme } from '@mui/material';
import buttonOverride from './button';

const components = (theme: Theme): Components => {
  return {
    MuiButton: buttonOverride(theme),
  };
};

export default components;
