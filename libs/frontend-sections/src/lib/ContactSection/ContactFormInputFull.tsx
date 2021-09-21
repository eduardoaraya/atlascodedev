import React from 'react';
import {
  FormControl,
  Input,
  inputAdornmentClasses,
  InputLabel,
} from '@mui/material';
import ContactFormInput, { ContactFormInputProps } from './ContactFormInput';
import { Box } from '@mui/system';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactFormInputFull extends ContactFormInputProps {
  label?: string;
}

const ContactFormInputFull = ({
  label = 'Placeholder label',
  ...rest
}: ContactFormInputFull) => {
  const labelId = React.useRef(
    `label-id-${Date.now() + Math.floor(Math.random() + 1 * 1000)}`
  );

  return (
    <FormControl sx={styles.formControl} variant="standard">
      <Box sx={styles.label} component="label" htmlFor={labelId.current}>
        {label}
      </Box>
      <ContactFormInput {...rest} sx={styles.input} id={labelId.current} />
    </FormControl>
  );
};

export default ContactFormInputFull;

const styles = AtlasStylesheet.create({
  formControl: {
    transition: 'all 0.3s ease',
    color: (theme) => theme.palette.secondary.light,
    fontSize: '10px',
    ':focus-within': {
      color: (theme) => theme.palette.primary.main,
    },
    gap: { xs: 1 },
  },
  label: {
    fontSize: '1.6em',
    fontWeight: 700,
  },
  input: {},
});
