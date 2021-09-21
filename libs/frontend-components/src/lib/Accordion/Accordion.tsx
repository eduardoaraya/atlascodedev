import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { MotionBox } from '@atlascode/frontend-utility';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import AccordionChevron from './AccordionChevron';

/* eslint-disable-next-line */
export interface AccordionProps extends BoxProps {
  open: boolean;
  title: string;
  content: string;
}

export function Accordion({
  sx,
  open = false,
  content,
  title,
  ...rest
}: AccordionProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <MotionBox className="AtlasCode-Accordion-root">
        <Box className="header">
          <Typography variant="caption" className="title">
            {title}
          </Typography>

          <Box className="chevron">
            <AccordionChevron open={open} />
          </Box>
        </Box>

        <MotionBox
          initial="closed"
          animate={open ? 'open' : 'closed'}
          className="content"
          variants={{
            closed: {
              maxHeight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              opacity: 0,
            },
            open: {
              maxHeight: 1500,
              paddingTop: 50,
              paddingBottom: 50,
              opacity: 1,
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

      '.header': {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        py: { xs: 1.2 },
      },

      '.title': {
        fontSize: { xs: '1.6em' },
        fontWeight: 800,
        color: (theme) => theme.palette.secondary.main,
        flexGrow: 1,
      },

      '.chevron': {},

      '.content': {
        width: '100%',
        fontSize: { xs: '1.8em' },
        fontWeight: 700,
      },
    },
  } as SxProps<Theme>;
};
