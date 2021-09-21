import { Theme, Components } from '@mui/material';

export const inputOutlinedOverride = (
  theme: Theme
): Components['MuiOutlinedInput'] => {
  return {
    styleOverrides: {
      root: {
        borderRadius: '7px',
        fontsize: '10px',
        '&.Mui-focused': {
          // border: '2px solid #FF793F',
        },
      },
    },
  };
};
