import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
/* eslint-disable-next-line */
export interface AboutUsHeroProps extends BoxProps {}

export function AboutUsHero({ sx, ...rest }: AboutUsHeroProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-AboutUsHero-root"></Box>
    </Box>
  );
}

export default AboutUsHero;

const defaultStyles = () => {
  return {
    '.AtlasCode-AboutUsHero-root': {},
  } as SxProps<Theme>;
};
