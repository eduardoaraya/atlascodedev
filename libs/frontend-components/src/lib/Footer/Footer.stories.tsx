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
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sx: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
};
