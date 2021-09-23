import { Footer, Header, WhatsAppButton } from '@atlascode/frontend-components';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box } from '@mui/material';
import { polkaPattern } from '@atlascode/frontend-jss-mixins';
import { HideOnScroll, ScrollBackTop } from '@atlascode/frontend-utility';
import {
  RenderSmoothScrollOffset,
  ThemeSmoothScrollLayout,
} from '@atlascode/frontend-smoothscroll';
import React from 'react';
/* eslint-disable-next-line */
export interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  return (
    <React.Fragment>
      <div
        id="back-to-top-anchor"
        style={{ position: 'absolute', top: 0, left: 0 }}
      ></div>
      <HideOnScroll>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
          <Header
            callToActionButton={{
              action: () => console.log('hello world'),
              label: 'Faça seu orçamento',
            }}
            menuItems={[
              {
                action: () => console.log('clicked'),
                label: 'Sobre nós',
              },
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
    </React.Fragment>
  );
}
export default AppLayout;

const styles = AtlasStylesheet.create({
  bgPattern: {
    position: 'fixed',
    width: '100%',
    height: '150vh',
    top: 0,
    left: 0,
    zIndex: -1,
    ...(polkaPattern('#fff', 0.35, 50, '#333') as Record<string, unknown>),
  },
});
