import { SxProps } from '@mui/system';
import { Box, BoxProps, Paper, PaperProps, Theme } from '@mui/material';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';

/* eslint-disable-next-line */
export interface HeaderProps extends BoxProps<typeof Paper> {}

export function Header({ sx, elevation = 0, ...rest }: HeaderProps) {
  const defaultStylesMemoized = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box
      {...rest}
      elevation={elevation}
      component={Paper}
      sx={defaultStylesMemoized}
    >
      
    </Box>
  );
}

export default Header;

const defaultStyles = () => {
  return {
    fontSize: '10px',
    height: '8em',
    width: '100%',

    '.grid-container': {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: '70% 30%',
      gridTemplateRows: '1fr',

      '@media(min-width: 1024px)': {
        gridTemplateColumns: '30% 40% 30%',
      },
    },
  } as SxProps<Theme>;
};
