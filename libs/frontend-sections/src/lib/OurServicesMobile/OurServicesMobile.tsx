import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface OurServicesMobileProps extends BoxProps {}

export function OurServicesMobile({ sx, ...rest }: OurServicesMobileProps) {
  return <Box sx={{ ...sx, ...styles.root }} {...rest}></Box>;
}

export default OurServicesMobile;

const styles = AtlasStylesheet.create({
  root: {},
});
