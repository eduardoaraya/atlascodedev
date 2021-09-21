import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps } from '@mui/material';
import ContactForm from './ContactForm';
/* eslint-disable-next-line */
export interface ContactSectionProps extends BoxProps {}

export function ContactSection({ sx, ...rest }: ContactSectionProps) {
  return (
    <Box sx={{ ...sx, ...styles }} {...rest}>
      <Box sx={styles.root}>
        <Box sx={styles.grid}>
          <Box sx={styles.infoContainer}></Box>
          <Box sx={styles.formContainer}>
            <ContactForm />
          </Box>
        </Box>
      </Box>
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
  },

  formContainer: {
    px: { xs: 3 },
  },

  infoContainer: {},
});
