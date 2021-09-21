import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { MotionBox } from '@atlascode/frontend-utility';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import AccordionChevron from './AccordionChevron';
import React from 'react';

/* eslint-disable-next-line */
export interface AccordionProps extends BoxProps {
  title: string;
  content: string;
}

export function Accordion({ sx, content, title, ...rest }: AccordionProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  const [accordionOpen, setAccordionOpen] = React.useState<boolean>(false);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <MotionBox className="AtlasCode-Accordion-root">
        <Box className="AtlasCode-Accordion-header">
          <Typography variant="caption" className="AtlasCode-Accordion-title">
            {title}
          </Typography>

          <Box className="AtlasCode-Accordion-chevron">
            <AccordionChevron
              onClick={() => setAccordionOpen((prevState) => !prevState)}
              open={accordionOpen}
            />
          </Box>
        </Box>

        <MotionBox
          initial="closed"
          animate={accordionOpen ? 'open' : 'closed'}
          className="content"
          variants={{
            closed: {
              maxHeight: 0,
              paddingTop: '0px',
              paddingBottom: '0px',
              opacity: 0,
              overflow: 'hidden',
            },
            open: {
              maxHeight: 500,
              paddingTop: '50px',
              paddingBottom: '50px',
              opacity: 1,
              overflow: 'visible',
            },
          }}
        >
          {content}
        </MotionBox>
      </MotionBox>
    </Box>
  );
}

export default Accordion;

const defaultStyles = () => {
  return {
    '.AtlasCode-Accordion-root': {
      fontSize: '10px',
      width: '100%',
      borderRadius: '4px',
      border: (theme) => `1px solid ${theme.palette.secondary.dark}`,
      display: 'flex',
      px: { lg: 5 },
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',

      '.AtlasCode-Accordion-header': {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        py: { xs: 1.2 },
        px: { xs: 1 },
      },

      '.AtlasCode-Accordion-title': {
        fontSize: { xs: '1.6em' },
        fontWeight: 800,
        color: (theme) => theme.palette.secondary.main,
        flexGrow: 1,
      },

      '.AtlasCode-Accordion-chevron': {},

      '.content': {
        width: '100%',
        fontSize: { xs: '1.8em' },
        fontWeight: 700,
        px: { xs: 2 },
      },
    },
  } as SxProps<Theme>;
};
