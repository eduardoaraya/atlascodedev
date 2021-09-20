import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Container, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import {
  CloudIcon,
  DefenseCard,
  DefenseCardProps,
  PathIcon,
} from '@atlascode/frontend-components';
import {
  CodeIcon,
  CogIcon,
  GraphIcon,
  MoneyIcon,
} from '@atlascode/frontend-svgs';

/* eslint-disable-next-line */
export interface DefenseSectionProps extends BoxProps {}

const DEFENSE_CARD: DefenseCardProps[] = [
  {
    icon: MoneyIcon,
    title: 'Preços acessíveis',
    text: 'Sem sustos na hora do orçamento.',
  },
  {
    icon: PathIcon,
    title: 'Tudo personalizado',
    text: 'Aposte na originalidade do seu negócio.',
  },
  {
    icon: CloudIcon,
    title: 'Serviços em nuvem',
    text: 'Escale o seu negócio sem custos com servidores.',
  },
  {
    icon: CodeIcon,
    title: 'Desenvolvimento nativo',
    text: 'Ganhe mais tempo automatizando funções.',
  },
  {
    icon: CogIcon,
    title: 'Controle total',
    text: 'Administre seu negócio através do nosso painel',
  },
  {
    icon: GraphIcon,
    title: 'Foco na experiência',
    text: 'Aumenta a conversão de seus produtos e serviços.',
  },
];

export function DefenseSection({ sx, ...rest }: DefenseSectionProps) {
  const defaultStylesMemoized = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box {...rest} sx={defaultStylesMemoized}>
      <Container maxWidth="lg">
        <Box className="AtlasCode-DefenseCardSection-grid">
          {DEFENSE_CARD.map((value, index) => {
            return <DefenseCard {...value} key={index} />;
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default DefenseSection;

const defaultStyles = () => {
  return {
    '.AtlasCode-DefenseCardSection-grid': {
      display: 'grid',
      rowGap: { xs: 5, lg: 7 },
      columnGap: { xs: 2, lg: 2 },
      justifyItems: { xs: 'center', lg: 'initial' },
      gridTemplateColumns: { xs: '1fr', lg: '33.333% 33.333% 33.333%' },
      gridAutoFlow: 'row',
    },
  } as SxProps<Theme>;
};
