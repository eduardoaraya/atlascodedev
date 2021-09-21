import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { TechnologiesSlider } from '@atlascode/frontend-sections';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TechnologySliderSectionProps extends BoxProps {}

const TechnologySliderSection = ({
  sx,
  ...rest
}: TechnologySliderSectionProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-TechnologySliderSection-root">
        <Typography className="AtlasCode-TechnologySliderSection-title">
          Tecnologias que utilizamos
        </Typography>

        <Box className="AtlasCode-TechnologySliderSection-slider-container">
          <TechnologiesSlider />
        </Box>
      </Box>
    </Box>
  );
};

export default TechnologySliderSection;

const defaultStyles = () => {
  return {
    '.AtlasCode-TechnologySliderSection-root': {
      bgcolor: (theme) => theme.palette.secondary.main,
      width: '100%',
      fontSize: '10px',

      '.AtlasCode-TechnologySliderSection-title': {
        fontSize: { xs: '2.4em', lg: '3.8em' },
        textAlign: 'center',
        color: (theme) => theme.palette.secondary.contrastText,
        fontWeight: 900,
        py: { xs: 5 },
      },

      '.AtlasCode-TechnologySliderSection-slider-container': {
        pb: { xs: 10 },
      },
    },
  } as SxProps<Theme>;
};
