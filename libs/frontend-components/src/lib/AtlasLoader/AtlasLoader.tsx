import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps } from '@mui/material';
import { AtlasLogoMinimal } from '@atlascode/frontend-svgs';

/* eslint-disable-next-line */
export interface AtlasLoaderProps extends BoxProps {}

export function AtlasLoader({ sx, ...rest }: AtlasLoaderProps) {
  return (
    <Box sx={styles.root}>
      <AtlasLogoMinimal fill={'#fff'} sx={styles.logo} />
      <Box sx={styles.loader}></Box>
    </Box>
  );
}

export default AtlasLoader;

const styles = AtlasStylesheet.create({
  root: {
    width: '100%',
    height: '100.5vh',
    bgcolor: (theme) => theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: { xs: '5px', sm: '7px', md: '8.5px', lg: '10px' },
    overflow: 'hidden',
  },

  logo: {
    position: 'absolute',
    top: '50%',
    color: '#fff',
    fill: '#fff',
    width: { xs: '20em' },
    height: { xs: '20em' },
    transform: 'translateY(-50%)',
    zIndex: 1,
  },

  loader: {
    fontSize: '5em',
    margin: '50px auto',
    textIndent: '-9999em',
    width: '11em',
    height: '11em',
    borderRadius: '50%',
    // background: '#ffffff',
    background:
      'linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%)',
    position: 'absolute',
    animation: 'load3 1.4s infinite linear',
    transform: 'translateZ(0)',

    ':before': {
      width: '50%',
      height: '50%',
      background: '#ffffff',
      borderRadius: '100% 0 0 0',
      position: 'absolute',
      top: 0,
      left: 0,
      content: `""`,
    },

    ':after': {
      background: (theme) => theme.palette.primary.main,
      width: '95%',
      height: '95%',
      borderRadius: '50%',
      content: `""`,
      margin: 'auto',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },

    '@keyframes load3': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
});
