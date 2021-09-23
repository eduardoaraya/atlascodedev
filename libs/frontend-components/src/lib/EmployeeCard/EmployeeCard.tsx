import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

/* eslint-disable-next-line */
export interface EmployeeCardProps extends BoxProps {
  src: string;
  job: string;
  alt?: string;
}

export function EmployeeCard({
  sx,
  src,
  alt,
  job,
  ...rest
}: EmployeeCardProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-EmployeeCard-root">
        <Box
          src={src}
          alt={alt}
          component="img"
          className="AtlasCode-EmployeeCard-img"
        />

        <Box className="AtlasCode-EmployeeCard-jobTag-container">
          <Typography
            variant="caption"
            className="AtlasCode-EmployeeCard-jobTag"
          >
            {job}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EmployeeCard;

const defaultStyles = () => {
  return {
    '.AtlasCode-EmployeeCard-root': {
      fontSize: '10px',
      width: { xs: '15em', lg: '24em' },
      height: { xs: '14em', lg: '24em' },
      borderRadius: '6px',
      position: 'relative',
      boxShadow: (theme) => theme.shadows[3],

      ':hover': {
        '.AtlasCode-EmployeeCard-img': {
          filter: 'grayscale(0)',
        },

        '.AtlasCode-EmployeeCard-jobTag-container': {
          opacity: 0.8,
        },
      },

      '.AtlasCode-EmployeeCard-jobTag-container': {
        transition: 'all 0.4s ease',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        backdropFilter: 'blur(5px)',
        bgcolor: (theme) => theme.palette.secondary.main,
        p: 2,
        borderRadius: '0em 0em 6px 6px',
      },

      '.AtlasCode-EmployeeCard-jobTag': {
        fontSize: { xs: '1.4em', lg: '1.6em' },
        color: (theme) => theme.palette.secondary.contrastText,
        fontWeight: 800,
      },

      '.AtlasCode-EmployeeCard-img': {
        transition: 'all 0.4s ease',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '6px',
        filter: 'grayscale(1)',
      },
    },
  } as SxProps<Theme>;
};
