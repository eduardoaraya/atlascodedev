import React from 'react';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { BoxProps, InputBase, Box } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactFormInputProps extends BoxProps<typeof InputBase> {}

const ContactFormInput = ({
  sx,
  component = InputBase,
  ...rest
}: ContactFormInputProps) => {
  return <Box component={InputBase} sx={styles.root} {...rest} />;
};

export default ContactFormInput;

const styles = AtlasStylesheet.create({
  root: {
    borderRadius: '6px',
    fontSize: { xs: '14px' },
    border: (theme) => `1px solid ${theme.palette.secondary.light}`,
    minHeight: '55px',
    transition: 'all 0.3s ease',
    position: 'relative',

    ':before': {
      position: 'absolute',
      height: '100%',
      width: '100%',
      border: (theme) => `3px solid ${theme.palette.primary.main}`,
      top: 0,
      left: 0,
      content: `""`,
      bgcolor: 'transparent',
      borderRadius: '6px',
      opacity: 0,
      transition: 'all 0.3s ease',
    },

    ':active': {
      borderColor: 'transparent',
    },

    ':focus-within': {
      borderColor: 'transparent',
    },

    ':active:before': {
      opacity: 1,
    },

    ':focus-within:before': {
      opacity: 1,
    },

    '& input': {
      px: { xs: 1.5 },
    },

    '& textarea': {
      px: { xs: 1.5 },
      py: { xs: 1 },
    },
  },
});
