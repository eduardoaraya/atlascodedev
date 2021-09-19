import { SxProps } from '@mui/system';
import { Box, BoxProps, Button, Paper, Theme } from '@mui/material';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { AtlasLogo } from '@atlascode/frontend-icons';

/* eslint-disable-next-line */
export interface HeaderProps extends BoxProps<typeof Paper> {}

export function Header({ sx, elevation = 1, ...rest }: HeaderProps) {
  const defaultStylesMemoized = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box
      {...rest}
      elevation={elevation}
      component={Paper}
      sx={defaultStylesMemoized}
    >
      <Box className="grid-container">
        <Box className="logo-container">
          <AtlasLogo className="logo" />
        </Box>

        <Box className="menu-items-container"></Box>

        <Box className="cta-container">
          <Button className="cta-button" variant="outlined" color="primary">
            Faça seu orçamento
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const defaultStyles = () => {
  return {
    fontSize: '10px',
    height: '9em',
    width: '100%',

    '.grid-container': {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: '70% 30%',
      gridTemplateRows: '1fr',
      py: 1.5,

      '@media(min-width: 1024px)': {
        gridTemplateColumns: '22.5% 55% 22.5%',
      },
    },

    '.logo-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      px: 1,
    },

    '.logo': {
      width: '19em',
      height: 'auto',
    },

    '.menu-items-container': {
      display: 'flex',
    },

    '.cta-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '.cta-button': {
      fontSize: '1.5em',
    },
  } as SxProps<Theme>;
};
