import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface CodeIconProps extends BoxProps<'svg'> {}

export function CodeIcon(props: CodeIconProps) {
  return (
    <Box
      width="53"
      height="31"
      viewBox="0 0 53 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      component="svg"
    >
      <path
        d="M19.61 27.3833L7.42 15.5L19.61 3.61667L15.9 0L0 15.5L15.9 31L19.61 27.3833ZM33.39 27.3833L45.58 15.5L33.39 3.61667L37.1 0L53 15.5L37.1 31L33.39 27.3833Z"
        fill="white"
      />
    </Box>
  );
}

export default CodeIcon;
