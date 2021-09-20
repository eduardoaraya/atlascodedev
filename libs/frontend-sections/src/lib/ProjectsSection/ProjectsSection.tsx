import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { ProjectItem, ProjectItemProps } from '@atlascode/frontend-components';

/* eslint-disable-next-line */
export interface ProjectsSectionProps extends BoxProps {
  projects: ProjectItemProps[];
}

export function ProjectsSection({
  sx,
  projects = [],
  ...rest
}: ProjectsSectionProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      <Box className="AtlasCode-ProjectsSection-root">
        <Box className="container">
          <Typography className="title" variant="h2"></Typography>

          <Box className="projects-list">
            {projects.map(
              (
                { tags, techList, title, websiteURL, inverted, ...rest },
                index
              ) => {
                return (
                  <ProjectItem
                    tags={tags}
                    techList={techList}
                    title={title}
                    websiteURL={websiteURL}
                    inverted={index % 2 === 0}
                    {...rest}
                    key={index}
                  />
                );
              }
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectsSection;

const defaultStyles = () => {
  return {
    '.AtlasCode-ProjectsSection-root': {
      fontSize: '10px',

      '.container': {
        display: 'flex',
        flexDirection: 'column',
      },

      '.title': {
        fontSize: { xs: '2.4em', lg: '3.8em' },
        fontWeight: 900,
        py: { xs: 5 },
      },

      '.projects-list': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  } as SxProps<Theme>;
};
