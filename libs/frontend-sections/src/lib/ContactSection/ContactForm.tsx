import { BoxProps, Theme, Box } from '@mui/material';
import React from 'react';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactFormProps extends BoxProps {}

const ContactForm = ({ ...rest }: ContactFormProps) => {
  return <Box sx={styles.root} {...rest}></Box>;
};

export default ContactForm;

const styles = AtlasStylesheet.create({
  root: {
    color: (theme) => theme.palette.primary.main,
  },
});
