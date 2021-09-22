import { Footer, Header, WhatsAppButton } from '@atlascode/frontend-components';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box } from '@mui/material';
import { polkaPattern } from '@atlascode/frontend-jss-mixins';
import { HideOnScroll, ScrollBackTop } from '@atlascode/frontend-utility';
/* eslint-disable-next-line */
export interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  return (
    <Box>
      <HideOnScroll>
        <div>
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
        </div>
      </HideOnScroll>
      <ScrollBackTop />

      <Box sx={{ height: '150vh' }} />
      {props.children}
      <Box sx={styles.bgPattern} />
      <WhatsAppButton color="secondary" />
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
