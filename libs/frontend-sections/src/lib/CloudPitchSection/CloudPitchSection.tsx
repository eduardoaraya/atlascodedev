import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps, Container, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface CloudPitchSectionProps extends BoxProps {}

export function CloudPitchSection({ sx, ...rest }: CloudPitchSectionProps) {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Container sx={styles.grid} maxWidth="lg">
        <Box sx={styles.textContainer}>
          <Typography variant="h2" sx={styles.title}>
            Métodos mais inteligentes. Melhores resultados.
          </Typography>

          <Typography variant="h4" sx={styles.aux}>
            Seu negócio precisa crescer, mas os custos não. Receba milhares de
            acessos sem ter problemas com servidores ou gastos desnecessários.
          </Typography>
        </Box>

        <Box sx={styles.cloudLogoContainer}>
          <Box sx={styles.cloudLogo} />

          <Box sx={styles.cloudLogo} />
        </Box>
        <Box sx={styles.illustrationContainer}>
          <Box sx={styles.illustration} />
        </Box>
      </Container>
    </Box>
  );
}

export default CloudPitchSection;

const styles = AtlasStylesheet.create({
  root: {
    width: '100%',
    bgcolor: (theme) => theme.palette.secondary.main,
    fontSize: '10px',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
    gridTemplateRows: { xs: '1fr' },
    gridAutoFlow: 'row',
    width: '100%',
    height: '100%',
  },

  textContainer: {},

  title: {
    fontSize: { xs: '2.2em', lg: '3.8em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.contrastText,
  },

  aux: {
    fontSize: { xs: '1.6em', lg: '2em' },
    fontWeight: 600,
    color: (theme) => theme.palette.secondary.contrastText,
  },

  cloudLogoContainer: {},

  cloudLogo: {},

  illustrationContainer: {},

  illustration: {},
});
