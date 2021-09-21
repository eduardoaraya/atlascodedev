import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps, Container, Typography } from '@mui/material';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
/* eslint-disable-next-line */
export interface ContactSectionProps extends BoxProps {}

export function ContactSection({ sx, ...rest }: ContactSectionProps) {
  return (
    <Box sx={{ ...sx, ...styles }} {...rest}>
      <Container maxWidth="lg" sx={styles.root}>
        <Box sx={styles.grid}>
          <Box sx={styles.infoContainer}>
            <ContactInfo />
          </Box>
          <Box sx={styles.formContainer}>
            <Typography sx={styles.title} variant="h2">
              Entre em contato
            </Typography>

            <ContactForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  grid: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
    gridAutoFlow: 'row',
    rowGap: { xs: 10 },
  },

  title: {
    fontSize: { xs: '2.6em' },
    color: (theme) => theme.palette.secondary.main,
    fontWeight: 900,
    pb: { xs: '1em' },
    mt: { xs: '1.5em' },
  },

  formContainer: {
    px: { xs: 3 },
    order: { xs: 0, lg: 1 },
  },

  infoContainer: {
    order: { xs: 1, lg: 0 },
    px: { xs: 3 },
    overflow: 'hidden',
  },
});
