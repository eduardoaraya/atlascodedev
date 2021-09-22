import { Footer, Header } from '@atlascode/frontend-components';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box } from '@mui/material';
import { polkaPattern } from '@atlascode/frontend-jss-mixins';
/* eslint-disable-next-line */
export interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  return (
    <Box>
      <Header
        callToActionButton={{
          action: () => console.log('hello world'),
          label: 'Faça seu orçamento',
        }}
        menuItems={[
          { action: () => console.log('clicked'), label: 'Sobre nós' },
          { action: () => console.log('clicked'), label: 'Serviços' },
          { action: () => console.log('clicked'), label: 'Projetos' },
          { action: () => console.log('clicked'), label: 'Blog' },
          { action: () => console.log('clicked'), label: 'Contato' },
        ]}
      />
      <Box sx={{ height: '100vh' }} />

      <Box sx={styles.bgPattern} />
      <Footer />
    </Box>
  );
}

export default AppLayout;

const styles = AtlasStylesheet.create({
  bgPattern: {
    position: 'absolute',
    width: '100%',
    height: '150vh',
    top: 0,
    left: 0,
    zIndex: -1,
    ...(polkaPattern('#fff', 0.35, 50, '#333') as Record<string, unknown>),
  },
});
