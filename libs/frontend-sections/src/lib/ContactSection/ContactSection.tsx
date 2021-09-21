import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import ContactForm from './ContactForm';
/* eslint-disable-next-line */
export interface ContactSectionProps extends BoxProps {}

export function ContactSection({ sx, ...rest }: ContactSectionProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-ContactSection-root">
        <Box className="AtlasCode-ContactSection-grid">
          <Box className="AtlasCode-ContactSection-info-container"></Box>
          <Box className="AtlasCode-ContactSection-form-contaner">
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;

const defaultStyles = () => {
  return {
    '.AtlasCode-ContactSection-root': {
      fontSize: '10px',

      '.AtlasCode-ContactSection-form-container': {},

      '.AtlasCode-ContactSection-info-container': {
        '.title': {
          fontSize: { xs: '2.6' },
          fontWeight: 900,
          color: (theme) => theme.palette.secondary.light,
        },
        '.aux': {
          fontSize: { xs: '2em' },
          color: (theme) => theme.palette.primary.light,
        },
        '.email': {
          fontSize: { xs: '2.2em' },
          fontWeight: 900,
          color: (theme) => theme.palette.primary.main,
        },
        'socials-container': {
          display: 'flex',
        },
      },

      '.AtlasCode-ContactSection-grid': {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
        gridAutoFlow: 'row',
      },
    },
  } as SxProps<Theme>;
};
