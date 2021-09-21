import { BoxProps, Box, TextField } from '@mui/material';
import React from 'react';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import ContactFormInput from './ContactFormInput';
import ContactFormInputFull from './ContactFormInputFull';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactFormProps extends BoxProps {}

const ContactForm = ({ sx, ...rest }: ContactFormProps) => {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.container}>
        <ContactFormInputFull sx={styles.nameField} placeholder="Hello world" />
        <ContactFormInputFull
          sx={styles.phoneField}
          placeholder="Aloha hermanos"
        />
        <ContactFormInputFull sx={styles.emailField} />
        <ContactFormInputFull sx={styles.messageField} rows={6} multiline />
      </Box>
    </Box>
  );
};

export default ContactForm;

const styles = AtlasStylesheet.create({
  root: {
    color: (theme) => theme.palette.primary.main,
  },

  container: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
    gridAutoFlow: 'row',
    gridTemplateRows: { xs: '1fr' },
    rowGap: { xs: 5 },
    columnGap: { xs: 1 },
  },

  nameField: {},
  phoneField: {},
  emailField: {
    gridColumn: '1/3',
  },
  messageField: {
    gridColumn: '1/3',
  },
  submitButton: {},
});
