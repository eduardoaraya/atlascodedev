import { Box, BoxProps } from '@mui/material';
import { CodeIcon, CogIcon, MoneyIcon } from '@atlascode/frontend-svgs';
import PathIcon from '../PathIcon/PathIcon';
import CloudIcon from '../CloudIcon/CloudIcon';

/* eslint-disable-next-line */
export interface DefenseCardProps extends BoxProps {}

export function DefenseCard(props: DefenseCardProps) {
  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.secondary.main }}>
      <CogIcon sx={{ width: '50px', height: 'auto' }} />
    </Box>
  );
}

export default DefenseCard;
