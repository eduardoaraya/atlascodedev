import { Box, BoxProps } from '@mui/material';
/* eslint-disable-next-line */
export interface CloudIconProps extends BoxProps<'svg'> {}

export function CloudIcon(props: CloudIconProps) {
  return (
    <Box
      width="55"
      height="37"
      viewBox="0 0 55 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      component={'svg'}
    >
      <path
        d="M44.062 13.7537C42.5136 5.89771 35.614 0 27.3253 0C20.7445 0 15.0289 3.73446 12.1825 9.19952C5.32843 9.92819 0 15.7348 0 22.7711C0 30.3083 6.12542 36.4337 13.6627 36.4337H43.2651C49.5499 36.4337 54.6506 31.333 54.6506 25.0482C54.6506 19.0366 49.9825 14.1636 44.062 13.7537Z"
        fill="white"
      />
    </Box>
  );
}

export default CloudIcon;
