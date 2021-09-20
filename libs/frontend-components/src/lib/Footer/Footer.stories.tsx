import { Story, Meta } from '@storybook/react';
import { Footer, FooterProps } from './Footer';
import { Box } from '@mui/material';

export default {
  component: Footer,
  title: 'Footer',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box>
        <Box sx={{ width: '100%', height: '150vh' }} />
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sx: {},
};
