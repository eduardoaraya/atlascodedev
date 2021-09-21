import { Box } from '@mui/system';
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ m: { lg: 5 } }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
