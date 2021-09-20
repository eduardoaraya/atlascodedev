import { Box, BoxProps } from '@mui/material';
import { HomeHeroIllustration } from '@atlascode/frontend-svgs';
/* eslint-disable-next-line */
export interface HomeHeroProps {}

export function HomeHero(props: HomeHeroProps) {
  return (
    <Box>
      <HomeHeroIllustration sx={{ width: '250px', height: 'auto' }} />
    </Box>
  );
}

export default HomeHero;
