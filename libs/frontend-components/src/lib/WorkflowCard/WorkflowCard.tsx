import { Box, BoxProps, Chip, Typography } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

/* eslint-disable-next-line */
export interface WorkflowCardProps extends BoxProps {
  number: number;
  title: string;
  description: string;
  tags: string[];
}

export function WorkflowCard({
  sx,
  number = 1,
  title = 'Conversa',
  description = 'Para transformar nossas ideias em realidade.',
  tags = [
    'Entender o produto',
    'Definição do problema',
    'Análise competitiva',
    'R$56,00 por dia, barato.',
  ],
  ...rest
}: WorkflowCardProps) {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.titleContainer}>
          <Typography
            variant="h2"
            sx={styles.titleNumber}
          >{`${number}.`}</Typography>
          <Typography variant="h2" sx={styles.title}>
            {title}
          </Typography>
        </Box>
        <Box sx={styles.descriptionContainer}>
          <Typography variant="caption" sx={styles.description}>
            {description}
          </Typography>
        </Box>
        <Box sx={styles.tagContainer}>
          {tags.map((value, index) => {
            return (
              <Chip
                label={value}
                key={index}
                color="secondary"
                sx={styles.tag}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default WorkflowCard;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: { xs: '23.2em', lg: '35.6em' },
    height: { xs: 'auto', lg: '45.2em' },
    borderRadius: '10px',
    border: (theme) => `3px solid ${theme.palette.secondary.main}`,
    p: { xs: '1.5em 2em', lg: '3.8em 3.8em' },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    gap: { xs: 2, lg: 0 },
  },
  titleContainer: {
    display: 'flex',
    alignItems: { xs: 'flex-end', lg: 'center' },
    gap: { xs: 1 },
  },

  title: {
    fontSize: { xs: '2em', lg: '3.2em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.light,
  },
  titleNumber: {
    fontSize: { xs: '2.3em', lg: '3.6em' },
    color: (theme) => theme.palette.primary.main,
    fontWeight: 900,
  },

  descriptionContainer: {},

  description: {
    fontSize: { xs: '1.4em', lg: '1.8em' },
    fontWeight: 600,
    color: (theme) => theme.palette.secondary.light,
  },

  tagContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 2 },
  },
  tag: {
    width: 'fit-content',
    fontSize: '1.1em',
    bgcolor: (theme) => theme.palette.secondary.light,
  },
});
