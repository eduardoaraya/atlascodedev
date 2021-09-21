import { BoxProps, Box, Button, ButtonProps } from '@mui/material';
import React from 'react';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import ContactFormInput, { ContactFormInputProps } from './ContactFormInput';
import ContactFormInputFull from './ContactFormInputFull';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactFormProps extends BoxProps {
  NameInputProps?: ContactFormInputProps;
  PhoneInputProps?: ContactFormInputProps;
  EmailInputProps?: ContactFormInputProps;
  MessageInputProps?: ContactFormInputProps;
  ButtonProps?: ButtonProps;
}

const ContactForm = ({
  sx,
  NameInputProps,
  PhoneInputProps,
  EmailInputProps,
  MessageInputProps,
  ButtonProps,
  ...rest
}: ContactFormProps) => {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.container}>
        <ContactFormInputFull {...NameInputProps} sx={styles.nameField} />
        <ContactFormInputFull {...PhoneInputProps} sx={styles.phoneField} />
        <ContactFormInputFull {...EmailInputProps} sx={styles.emailField} />
        <ContactFormInputFull
          {...MessageInputProps}
          sx={styles.messageField}
          rows={6}
          multiline
        />
        <Button
          {...ButtonProps}
          sx={styles.submitButton}
          size="small"
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
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
    gridColumn: { lg: '1/3' },
  },
  messageField: {
    gridColumn: { lg: '1/3' },
  },
  submitButton: {},
});
