import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

/* eslint-disable-next-line */
export interface DefenseSectionProps extends BoxProps {}

export function DefenseSection({ sx, ...rest }: DefenseSectionProps) {
  const defaultStylesMemoized = useMemoizedMergedObject(defaultStyles(), sx);

  return <Box {...rest} sx={defaultStylesMemoized}></Box>;
}

export default DefenseSection;

const defaultStyles = () => {
  return {} as SxProps<Theme>;
};
