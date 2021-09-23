import { EmployeeCard } from '@atlascode/frontend-components';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Container, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

/* eslint-disable-next-line */
export interface AssociatesSectionProps extends BoxProps {
  employee1: { role: string; img: string };
  employee2: { role: string; img: string };
  employee3: { role: string; img: string };
}

export function AssociatesSection({
  sx,
  employee1,
  employee2,
  employee3,
  ...rest
}: AssociatesSectionProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Container maxWidth="lg" className="AtlasCode-AssociatesSection-root">
        <Box className="AtlasCode-AssociatesSection-grid">
          <Box className="AtlasCode-AssociatesSection-text-container">
            <Typography
              variant="h2"
              className="AtlasCode-AssociatesSection-text-title"
            >
              Desenvolvemos projetos sob demanda.
            </Typography>

            <Typography
              variant="h4"
              className="AtlasCode-AssociatesSection-text-aux"
            >
              Nós projetamos e criamos experiências digitais envolventes e
              memoráveis, criando soluções que melhoram o dia a dia dos
              usuários, de forma personalizada e criativa.
            </Typography>
          </Box>

          <Box className="AtlasCode-AssociatesSection-photos-container">
            <EmployeeCard
              className="AtlasCode-AssociatesSection-associate-one"
              job={employee1.role}
              src={employee1.img}
            />
            <EmployeeCard
              className="AtlasCode-AssociatesSection-associate-two"
              job={employee2.role}
              src={employee2.img}
            />
            <EmployeeCard
              className="AtlasCode-AssociatesSection-associate-three"
              job={employee3.role}
              src={employee3.img}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AssociatesSection;

const defaultStyles = () => {
  return {
    '.AtlasCode-AssociatesSection-root': {
      fontSize: '10px',

      // '.AtlasCode-AssociatesSection-associate-one': {
      //   transform: { lg: 'translate(40px, 75px)' },
      // },

      // '.AtlasCode-AssociatesSection-associate-two': {
      //   zIndex: 5,
      //   transform: { lg: 'translate(-15px, -10px)' },
      // },

      // '.AtlasCode-AssociatesSection-associate-three': {
      //   transform: { lg: 'translate(-50px, -20px)' },
      // },

      '.AtlasCode-AssociatesSection-grid': {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
        width: '100%',
        height: '100%',
        rowGap: { xs: 5 },
        columnGap: { lg: 3 },
      },

      '.AtlasCode-AssociatesSection-photos-container': {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: {
          xs: '50% 50%',
          sm: '33.333% 33.333% 33.333%',
          lg: '50% 50%',
        },
        gridAutoFlow: 'row',
        rowGap: { xs: 3 },
        justifyItems: 'center',
      },

      '.AtlasCode-AssociatesSection-text-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 3.5 },
        justifyContent: { lg: 'center' },
        textAlign: { sm: 'center', lg: 'initial' },
      },

      '.AtlasCode-AssociatesSection-text-title': {
        fontSize: { xs: '2.4em', lg: '3.8em' },
        fontWeight: 900,
        color: (theme) => theme.palette.secondary.light,
      },

      '.AtlasCode-AssociatesSection-text-aux': {
        fontSize: { xs: '1.6em', lg: '2.2em' },
        color: (theme) => theme.palette.secondary.light,
      },
    },
  } as SxProps<Theme>;
};
