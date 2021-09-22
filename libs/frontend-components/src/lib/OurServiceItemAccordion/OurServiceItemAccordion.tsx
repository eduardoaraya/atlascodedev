import { Box, BoxProps } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import {
  OurServicesItem,
  OurServicesItemProps,
} from '@atlascode/frontend-components';
import { MotionBox } from '@atlascode/frontend-utility';

/* eslint-disable-next-line */
export interface OurServiceItemAccordionProps extends OurServicesItemProps {
  content?: string;
}

export function OurServiceItemAccordion({
  sx,
  active,
  fillTime,
  onFillTimeEnd,
  withChevron = true,
  icon,
  title,
  content = 'Lorem ipsum',
  ...rest
}: OurServiceItemAccordionProps) {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.container}>
        <OurServicesItem
          active={active}
          fillTime={fillTime}
          onFillTimeEnd={onFillTimeEnd}
          withChevron={withChevron}
          icon={icon}
          title={title}
        />
        <MotionBox
          sx={styles.content}
          initial="closed"
          animate={active ? 'open' : 'closed'}
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
      </Box>
    </Box>
  );
}

export default OurServiceItemAccordion;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    width: '100%',
    color: (theme) => theme.palette.secondary.contrastText,
    fontSize: { xs: '1.6em' },
    maxWidth: { xs: '32em', sm: '35ch' },
  },
});
