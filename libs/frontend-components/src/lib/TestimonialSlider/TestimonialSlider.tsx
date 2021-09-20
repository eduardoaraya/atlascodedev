import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { Property } from 'csstype';

/* eslint-disable-next-line */
export interface TestimonialSliderProps extends BoxProps {
  bgcolor: Property.BackgroundColor;
  logo: string;
  testimonial: string;
  testimonialName: string;
  testimonialCompany: string;
}

export function TestimonialSlider({
  sx,
  bgcolor,
  logo,
  testimonial,
  testimonialName,
  testimonialCompany,
  ...rest
}: TestimonialSliderProps) {
  const defaultStylesMemo = useMemoizedMergedObject(
    defaultStyles(bgcolor),
    sx,
    [bgcolor]
  );

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      <Box className="AtlasCode-TestimonialSlider-root">
        <Box className="grid">
          <Box className="picture-container">
            <Box component="img" src={logo} className="picture" />
          </Box>

          <Box className="text-container">
            <Typography variant="subtitle1" className="testimonial">
              {testimonial}
            </Typography>
            <Box className="testimonial-personal"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialSlider;

const defaultStyles = (bgcolor: Property.BackgroundColor) => {
  return {
    '.AtlasCode-TestimonialSlider-root': {
      fontSize: '10px',
      width: { xs: '27.9em', lg: '90.6em' },
      height: { xs: '61.9em', lg: '40.6em' },
      border: (theme) => `0.5px solid ${theme.palette.grey[400]}`,
      borderRadius: '20px',

      '.grid': {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '30% 70%' },
        gridTemplateRows: { xs: '45% 55%', lg: '1fr' },
        height: '100%',
        width: '100%',
      },

      '.picture-container': {
        width: '100%',
        height: '100%',
        display: 'flex',
        bgcolor: bgcolor,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        position: 'relative',
      },

      '.picture': {
        maxHeight: { xs: '12.5em' },
        width: 'auto',
        py: { xs: 2 },
      },

      '.text-container': {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        px: { lg: '5em' },
      },

      '.testimonial': {
        fontSize: { xs: '1.6em', lg: '1.8em' },
        color: (theme) => theme.palette.grey[700],
      },

      '.testimonial-personal-info-container': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  } as SxProps<Theme>;
};
