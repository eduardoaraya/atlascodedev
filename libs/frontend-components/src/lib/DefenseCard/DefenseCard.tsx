import { Box, BoxProps } from '@mui/material';
import { MoneyIcon } from '@atlascode/frontend-svgs';

/* eslint-disable-next-line */
export interface DefenseCardProps extends BoxProps {}

export function DefenseCard(props: DefenseCardProps) {
  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.secondary.main }}>
      <MoneyIcon sx={{ width: '50px', height: 'auto' }} />
    </Box>
  );
}

export default DefenseCard;
