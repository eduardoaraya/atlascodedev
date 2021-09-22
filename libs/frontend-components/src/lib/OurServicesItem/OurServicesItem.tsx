import { Box, BoxProps, Typography, useTheme } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { CodeIcon } from '@atlascode/frontend-svgs';
import React from 'react';
import _ from 'lodash';

/* eslint-disable-next-line */
export interface OurServicesItemProps extends BoxProps {
  active?: boolean;
  fillTime?: number;
  onFillTimeEnd?: (...args: unknown[]) => void;
}

export function OurServicesItem({
  sx,
  active = false,
  fillTime = 0.5,
  onFillTimeEnd = () => _.noop(),
  ...rest
}: OurServicesItemProps) {
  const theme = useTheme();
  const styles = React.useMemo(
    () => stylesFn(active, fillTime),
    [active, fillTime]
  );

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (active) {
      timeoutId = setTimeout(() => {
        onFillTimeEnd();
      }, fillTime * 1000 + 250);
    } else {
      _.noop();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [fillTime, onFillTimeEnd, active]);

  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.titleContainer}>
        <Box
          sx={styles.icon}
          fill={
            active
              ? theme.palette.primary.main
              : theme.palette.primary.contrastText
          }
          component={CodeIcon}
        />
        <Typography variant="caption" sx={styles.title}>
          Desenvolvimento nativo
        </Typography>
      </Box>

      <Box sx={styles.bar} />
    </Box>
  );
}

export default OurServicesItem;

const stylesFn = (active: boolean, fillTime = 0.5) =>
  AtlasStylesheet.create({
    root: {
      fontSize: '10px',
      width: { xs: '32em', lg: '41em' },
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 2 },
    },

    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: { xs: 3 },
    },
    title: {
      ...(active
        ? { color: (theme) => theme.palette.primary.main }
        : { color: (theme) => theme.palette.primary.contrastText }),
      fontWeight: 900,
      fontSize: { xs: '1.8em', lg: '2em' },
      transition: 'all 0.5s ease',
    },
    icon: {
      width: { xs: '2.8em', lg: '4em' },
      height: { xs: '1.6em', lg: '2.4em' },
      transition: 'all 0.5s ease',
    },
    bar: {
      width: '100%',
      position: 'relative',
      height: '4px',
      borderRadius: '6px',
      bgcolor: '#CEEBF7',

      ':after': {
        width: '0%',
        content: `""`,
        height: '4px',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        bgcolor: (theme) => theme.palette.primary.main,
        transition: `opacity 0.5s ease, width 0.5s ease`,
        ...(active && {
          width: '100%',
          opacity: 1,
          transition: `width ${fillTime}s linear, opacity 0.25s ease`,
        }),
      },
    },
  });
