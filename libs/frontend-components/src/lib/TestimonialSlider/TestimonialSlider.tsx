import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

/* eslint-disable-next-line */
export interface TestimonialSliderProps extends BoxProps {}

export function TestimonialSlider({ sx, ...rest }: TestimonialSliderProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      <Box className="AtlasCode-TestimonialSlider-root"></Box>
    </Box>
  );
}

export default TestimonialSlider;

const defaultStyles = () => {
  return {
    '.AtlasCode-TestimonialSlider-root': {},
  } as SxProps<Theme>;
};
