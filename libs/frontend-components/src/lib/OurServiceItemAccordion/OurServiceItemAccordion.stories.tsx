import { Box } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import {
  OurServiceItemAccordion,
  OurServiceItemAccordionProps,
} from './OurServiceItemAccordion';

export default {
  component: OurServiceItemAccordion,
  title: 'OurServiceItemAccordion',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 3, bgcolor: (theme) => theme.palette.secondary.main }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<OurServiceItemAccordionProps> = (args) => (
  <OurServiceItemAccordion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: false,
};
