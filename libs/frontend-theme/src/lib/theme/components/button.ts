import { Theme, Components } from '@mui/material';

const buttonOverride = (theme: Theme): Components['MuiButton'] => {
  return {
    styleOverrides: {
      root: {
        fontSize: '10px',
        borderRadius: '50px',
        padding: '0.8em 2.8em',
        textTransform: 'inherit',

        '&.MuiButton-outlined': {
          border: `2.5px solid ${theme.palette.primary.main}`,
          fontWeight: 500,
        },
      },
    },
  };
};

export default buttonOverride;
