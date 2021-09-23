import { BoxProps, Box } from '@mui/material';
import { Property } from 'csstype';

/* eslint-disable-next-line */
export interface AtlasLogoMinimalProps extends BoxProps<'svg'> {
  fill?: Property.Fill;
}

export function AtlasLogoMinimal({
  fill = '#FF793F',
  ...props
}: AtlasLogoMinimalProps) {
  return (
    <Box
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      component="svg"
    >
      <path d="M0 37.223L18.8893 0V25.9498L0 37.223Z" fill={fill} />
      <path
        d="M37.2231 37.223L18.698 0C16.8933 9.35893 16.5748 18.1329 18.698 25.8966L37.2231 37.223Z"
        fill={fill}
      />
    </Box>
  );
}

export default AtlasLogoMinimal;
