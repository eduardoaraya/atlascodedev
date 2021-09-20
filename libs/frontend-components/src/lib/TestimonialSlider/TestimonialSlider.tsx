import { CircleIconButton } from '@atlascode/frontend-components';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
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
        <Box className="backwards">
          <CircleIconButton
            fontSize={{ xs: '1.25em' }}
            inverted
            icon={ArrowBack}
          />
        </Box>

        <Box className="forward">
          <CircleIconButton
            fontSize={{ xs: '1.25em' }}
            inverted
            icon={ArrowForward}
          />
        </Box>

        <Box className="grid">
          <Box className="picture-container">
            <Box component="img" src={logo} className="picture" />
          </Box>

          <Box className="text-container">
            <Typography variant="subtitle1" className="testimonial">
              {testimonial}
            </Typography>
            <Box className="testimonial-personal-info-container">
              <Typography
                className="testimonial-personal-name"
                variant="subtitle1"
              >
                {testimonialName}
              </Typography>
              <Typography
                className="testimonial-personal-company"
                variant="subtitle2"
              >
                {testimonialCompany}
              </Typography>
            </Box>
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
      position: 'relative',

      '.forward': {
        position: 'absolute',
        top: { xs: '25%', lg: '50%' },
        transform: {
          xs: 'translateY(-25%) translateX(25px)',
          lg: 'translateY(-50%) translateX(25px)',
        },
        right: 0,
        zIndex: 5,
      },

      '.backwards': {
        position: 'absolute',
        top: { xs: '25%', lg: '50%' },
        left: 0,
        transform: 'translateY(-25%) translateX(-25px) ',
        zIndex: 5,
      },

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
        borderTopLeftRadius: { xs: '20px', lg: '20px' },
        borderBottomLeftRadius: { xs: 0, lg: '20px' },
        borderTopRightRadius: { xs: '20px', lg: 0 },
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
        px: { xs: '3em', lg: '5em' },
        flexDirection: 'column',
        gap: { xs: 3, lg: 5 },
      },

      '.testimonial': {
        fontSize: { xs: '1.6em', lg: '1.8em' },
        color: (theme) => theme.palette.grey[700],
      },

      '.testimonial-personal-info-container': {
        display: 'flex',
        flexDirection: 'column',
        color: (theme) => theme.palette.secondary.main,
        borderTop: (theme) => `1px solid ${theme.palette.grey[400]}`,
        py: { xs: 2 },
      },

      '.testimonial-personal-name': {
        fontSize: { xs: '1.8em' },
        fontWeight: 900,
      },

      '.testimonial-personal-company': {
        fontSize: { xs: '1.4em', lg: '1.6em' },
      },
    },
  } as SxProps<Theme>;
};
