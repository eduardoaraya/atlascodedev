import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { BoxProps, Theme, Box } from '@mui/material';
import { SxProps } from '@mui/system';

/* eslint-disable-next-line */
export interface FooterProps extends BoxProps {}

export function Footer({ sx, ...rest }: FooterProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return <Box sx={defaultStylesMemo} {...rest}></Box>;
}

export default Footer;

const defaultStyles = () => {
  return {
    width: '100%',
    bgcolor: (theme) => theme.palette.secondary.main,
    borderRadius: '100px 100px 0px 0px',
    height: '250px',
  } as SxProps<Theme>;
};
