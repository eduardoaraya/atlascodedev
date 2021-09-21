import React from 'react';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TechnologyCardProps extends BoxProps {
  icon: React.FC<unknown>;
  text: string;
}

const TechnologyCard = ({
  sx,
  icon: Icon,
  text,
  ...rest
}: TechnologyCardProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-TechnologyCard-root">
        <Box className="AtlasCode-TechnologyCard-container">
          <Box className="AtlasCode-TechnologyCard-icon" component={Icon} />
          <Typography
            variant="caption"
            className="AtlasCode-TechnologyCard-text"
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TechnologyCard;

const defaultStyles = () => {
  return {
    '.AtlasCode-TechnologyCard-root': {
      fontSize: '10px',
      width: '23em',
      height: '14.8em',
      bgcolor: (theme) => theme.palette.background.paper,
      borderRadius: '0.4em',
      boxShadow: (theme) => theme.shadows[2],

      '.AtlasCode-TechnologyCard-container': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
      },

      '.AtlasCode-TechnologyCard-icon': {
        maxHeight: '8em',
        width: 'auto',
      },

      '.AtlasCode-TechnologyCard-text': {
        fontSize: { xs: '1.4em' },
      },
    },
  } as SxProps<Theme>;
};
