import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
/* eslint-disable-next-line */
export interface ProjectItemProps extends BoxProps {}

export function ProjectItem({ sx, ...rest }: ProjectItemProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return <Box sx={defaultStylesMemo} {...rest}></Box>;
}

export default ProjectItem;

const defaultStyles = () => {
  return {} as SxProps<Theme>;
};
