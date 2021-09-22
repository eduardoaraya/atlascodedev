import React from 'react';
import { useScrollTrigger, Zoom, Fab, Box } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

export interface ScrollTopProps {
  children?: React.ReactNode;
}

export const ScrollTop = (props: ScrollTopProps) => {
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined') {
      const anchor = document.querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <Zoom in={trigger}>
      <Box sx={styles.root} onClick={handleClick} role="presentation">
        {props.children}
      </Box>
    </Zoom>
  );
};

/* eslint-disable-next-line */
export interface ScrollBackTopProps extends ScrollTopProps {}

export function ScrollBackTop(props: ScrollBackTopProps) {
  return (
    <ScrollTop {...props}>
      <Fab color="secondary" size="small" aria-label="Scrollar para o top">
        <KeyboardArrowUp />
      </Fab>
    </ScrollTop>
  );
}

export default ScrollBackTop;

const styles = AtlasStylesheet.create({
  root: {
    position: 'fixed',
    bottom: (theme) => theme.spacing(2),
    right: (theme) => theme.spacing(2),
  },
});