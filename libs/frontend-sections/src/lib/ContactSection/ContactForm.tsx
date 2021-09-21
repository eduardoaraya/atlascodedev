import { BoxProps, Box, TextField } from '@mui/material';
import React from 'react';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import ContactFormInput from './ContactFormInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactFormProps extends BoxProps {}

const ContactForm = ({ sx, ...rest }: ContactFormProps) => {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.container}>
        {/* <TextField
          variant="outlined"
          sx={styles.nameField}
          label="placeholder"
          placeholder="placeholder"
        /> */}
        <ContactFormInput />

        <TextField
          variant="outlined"
          sx={styles.phoneField}
          label="placeholder"
          placeholder="placeholder"
        />

        <TextField
          variant="outlined"
          sx={styles.emailField}
          label="placeholder"
          placeholder="placeholder"
        />

        <TextField
          variant="outlined"
          sx={styles.messageField}
          label="placeholder"
          placeholder="placeholder"
        />
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
  emailField: {},
  messageField: {},
  submitButton: {},
});
