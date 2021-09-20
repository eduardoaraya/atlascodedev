import React from 'react';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';

export const enum TechEnum {
  'FIGMA' = 'Figma',
}

export type Tech = 'figma' | 'react' | 'next' | 'node' | 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProjectItemTechProps extends BoxProps {
  tech: Tech;
}

const ProjectItemTech = ({
  sx,
  tech = 'react',
  ...rest
}: ProjectItemTechProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      <Box className="AtlasCode-ProjectItemTech-root"></Box>
    </Box>
  );
};

export default ProjectItemTech;

const defaultStyles = () => {
  return {
    '.AtlasCode-ProjectItemTech-root': {},
  } as SxProps<Theme>;
};
