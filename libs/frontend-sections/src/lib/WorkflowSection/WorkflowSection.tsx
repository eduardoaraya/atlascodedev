import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps, Container, Typography } from '@mui/material';
import {
  WorkflowCard,
  WorkflowCardProps,
} from '@atlascode/frontend-components';

/* eslint-disable-next-line */
export interface WorkflowSectionProps extends BoxProps {}

const WORKFLOW_INFO: WorkflowCardProps[] = [
  {
    number: 1,
    description:
      'Para descobrir seu problema por meio de pesquisas e aprendizados.',
    tags: [
      'Entender o produto',
      'Definição do problema',
      'Análise competitiva',
    ],
    title: 'Conversa',
  },
  {
    number: 2,
    title: 'Mapeamento',
    description:
      'Para estruturar o processo e solucionar seu problema de forma efetiva.',
    tags: ['Requisitos de projeto', 'Idealização', 'Estratégia', 'Wireframe'],
  },
  {
    number: 3,
    title: 'Execução',
    description: 'Para transformar nossas ideias em realidade.',
    tags: ['Processo criativo', 'Prototipagem', 'Testes', 'Desenvolvimento'],
  },
];

export function WorkflowSection({ sx, ...rest }: WorkflowSectionProps) {
  return (
    <Box sx={{ ...sx, ...styles.root }} fontSize="10px" {...rest}>
      <Container sx={styles.container} maxWidth="lg">
        <Box sx={styles.titleContainer}>
          <Typography variant="h2" sx={styles.title}>
            Nosso jeito de trabalhar.
          </Typography>

          <Typography variant="h4" sx={styles.aux}>
            Cuidamos de cada projeto com um método padronizado, proporcionando
            um processo claro desde o início até a entrega do serviço.
          </Typography>
        </Box>

        <Box sx={styles.cardContainer}>
          {WORKFLOW_INFO.map((value, index) => {
            return <WorkflowCard {...value} key={index} />;
          })}

          <Box sx={styles.dottedLine} />
        </Box>
      </Container>
    </Box>
  );
}

export default WorkflowSection;

const styles = AtlasStylesheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: { xs: 8, lg: 10 },
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: { xs: 2 },
  },

  title: {
    fontSize: { xs: '2.4em', lg: '3.8em' },
    color: (theme) => theme.palette.secondary.light,
    fontWeight: 900,
  },

  aux: {
    fontSize: { xs: '1.6em', lg: '2.2em' },
    color: (theme) => theme.palette.secondary.light,
    fontWeight: 400,
    maxWidth: { lg: '55ch' },
  },

  cardContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    position: 'relative',
    justifyContent: { lg: 'center' },
    alignItems: { xs: 'center', lg: 'initial' },
    gap: { xs: '3em', lg: '5em' },
  },

  dottedLine: {
    width: { xs: '2px', lg: '100%' },
    height: { xs: '100%', lg: '2px' },
    position: 'absolute',
    borderTop: (theme) => `4px dashed ${theme.palette.primary.main}`,
    borderLeft: (theme) => `4px dashed ${theme.palette.primary.main}`,
    zIndex: -1,
    top: { xs: 0, lg: '50%' },
    left: { xs: '50%', lg: 0 },
    transform: { xs: 'translateX(-50%)', lg: 'translateY(-50%)' },

    '@media (min-width: 1024px)': {
      borderLeft: 'none',
    },
  },
});
