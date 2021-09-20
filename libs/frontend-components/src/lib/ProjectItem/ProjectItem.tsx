import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import ProjectItemTech from './ProjectItemTech';
/* eslint-disable-next-line */
export interface ProjectItemProps extends BoxProps {
  inverted?: boolean;
}

export function ProjectItem({
  sx,
  inverted = false,
  ...rest
}: ProjectItemProps) {
  const defaultStylesMemo = useMemoizedMergedObject(
    defaultStyles(inverted),
    sx,
    [inverted]
  );

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-ProjectItem-root">
        <ProjectItemTech tech="node" />
      </Box>
    </Box>
  );
}

export default ProjectItem;

const defaultStyles = (inverted = false) => {
  return {
    '.AtlasCode-ProjectItem-root': {},
  } as SxProps<Theme>;
};
