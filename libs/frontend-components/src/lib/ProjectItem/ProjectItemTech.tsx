import React from 'react';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import {
  FigmaLogo,
  GatsbyLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
} from '@atlascode/frontend-svgs';

export const Tech = {
  figma: {
    name: 'Figma',
    logo: FigmaLogo,
  },
  react: {
    name: 'ReactJS',
    logo: ReactLogo,
  },
  next: {
    name: 'NextJS',
    logo: NextLogo,
  },
  node: {
    name: 'NodeJS',
    logo: NodeLogo,
  },
  gatsby: {
    name: 'GatsbyJS',
    logo: GatsbyLogo,
  },
} as const;

export type TechType = keyof typeof Tech;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProjectItemTechProps extends BoxProps {
  tech: TechType;
}

const ProjectItemTech = ({
  sx,
  tech = 'react',
  ...rest
}: ProjectItemTechProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      <Box className="AtlasCode-ProjectItemTech-root">
        <Box className="AtlasCode-ProjectItemTech-container">
          <Box className="icon" component={Tech[tech].logo} />
          <Typography
            variant="caption"
            className="AtlasCode-ProjectItemTech-title"
          >
            {Tech[tech].name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectItemTech;

const defaultStyles = () => {
  return {
    '.AtlasCode-ProjectItemTech-root': {
      fontSize: '10px',

      '.AtlasCode-ProjectItemTech-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.2,
      },

      '.icon': {
        height: { xs: '3.3em', lg: '4.4em' },
        width: 'auto',
      },

      '.AtlasCode-ProjectItemTech-title': {
        fontSize: { xs: '1.1em', lg: '1.52em' },
        color: (theme) => theme.palette.secondary.light,
        fontWeight: 900,
      },
    },
  } as SxProps<Theme>;
};
