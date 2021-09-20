import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { BoxProps, Theme, Box } from '@mui/material';
import { SxProps } from '@mui/system';

/* eslint-disable-next-line */
export interface FooterProps extends BoxProps {}

export function Footer({ sx, ...rest }: FooterProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="grid"></Box>
      <Box className="footer-logo"></Box>
    </Box>
  );
}

export default Footer;

const defaultStyles = () => {
  return {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: (theme) => theme.palette.secondary.main,
    borderRadius: '100px 100px 0px 0px',
    height: '250px',

    '.footer-logo': {},

    '.grid': {
      borderRadius: 'inherit',
      display: 'grid',
      gridTemplateRows: 'auto',
      gridTemplateColumns: '1fr',
      gridAutoFlow: 'row',
      width: '100%',
      height: '100%',

      '@media (min-width: 1024px)': {
        gridTemplateColumns: '33.333% 33.333% 33.333%',
        gridTemplateRows: '1fr',
      },
    },
  } as SxProps<Theme>;
};
