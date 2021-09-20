import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { GraphIcon } from '@atlascode/frontend-svgs';
import { SxProps } from '@mui/system';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';

/* eslint-disable-next-line */
export interface DefenseCardProps extends BoxProps {
  icon: React.FC<unknown>;
  title: string;
  text: string;
}

export function DefenseCard({
  sx,
  icon: Icon,
  title,
  text,
  ...rest
}: DefenseCardProps) {
  const defaultStylesMemoized = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemoized}>
      <Box className="AtlasCode-DefenseCard-grid">
        <Box className="icon-container">
          <Box className="icon" component={Icon} />
        </Box>
        <Box className="text-container">
          <Typography className="title" variant="subtitle1">
            {title}
          </Typography>
          <Typography className="text" variant="subtitle2">
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default DefenseCard;

const defaultStyles = () => {
  return {
    fontSize: '10px',
    borderRadius: '20px',
    width: { xs: '27em', lg: '36.4em' },
    height: { xs: '11.67em', lg: '15.18em' },
    bgcolor: (theme) => theme.palette.secondary.light,
    color: (theme) => theme.palette.secondary.contrastText,
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    p: 2,

    ':hover': {
      bgcolor: (theme) => theme.palette.secondary.main,
    },

    '.AtlasCode-DefenseCard-grid': {
      display: 'grid',
      gridTemplateColumns: { xs: '20% 80%' },
      gridTemplateRows: '1fr',
      gap: { xs: '1.8em' },
    },

    '.text-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: 1.2,
    },

    '.title': {
      fontSize: { xs: '1.4em', lg: '1.6em' },
      fontWeight: 'bold',
    },

    '.text': {
      fontSize: { xs: '1.6em', lg: '2em' },
    },

    '.icon-container': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '.icon': {
      maxHeight: '6em',
      width: 'auto',
    },
  } as SxProps<Theme>;
};
