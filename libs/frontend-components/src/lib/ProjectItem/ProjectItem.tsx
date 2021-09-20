import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import ProjectItemTags from './ProjectItemTags';
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
        <ProjectItemTags tags={['Desenvolvimento', 'Rebranding', 'UI', 'UX']} />
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
