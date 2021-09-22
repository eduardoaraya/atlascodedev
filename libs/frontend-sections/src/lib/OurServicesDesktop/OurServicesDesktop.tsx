import { Box, BoxProps, Container, Typography } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

/* eslint-disable-next-line */
export interface OurServicesDesktopProps extends BoxProps {}

export function OurServicesDesktop({ sx, ...rest }: OurServicesDesktopProps) {
  return (
    <Box sx={styles.root} {...rest}>
      <Container sx={styles.container} maxWidth="lg">
        <Typography variant="h1" sx={styles.title}>
          Nossos serviços
        </Typography>

        <Box sx={styles.grid}>
          <Box sx={styles.timeItemContainer}></Box>
          <Box sx={styles.contentContainer}></Box>
        </Box>
      </Container>
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

  timeItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 2 },
  },

  contentContainer: {},

  container: {
    display: 'flex',
    flexDirection: 'column',
  },

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
