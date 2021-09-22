import { Box, BoxProps, Container } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

/* eslint-disable-next-line */
export interface OurServicesDesktopProps extends BoxProps {}

export function OurServicesDesktop({ sx, ...rest }: OurServicesDesktopProps) {
  return (
    <Box sx={styles.root}>
      <Container sx={styles.container} maxWidth="lg"></Container>
    </Box>
  );
}

export default OurServicesDesktop;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: '100%',
    bgcolor: (theme) => theme.palette.secondary.main,
  },

  container: {},

  title: {
    fontSize: { xs: '3.8em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.contrastText,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '50% 50%' },
  },
});
