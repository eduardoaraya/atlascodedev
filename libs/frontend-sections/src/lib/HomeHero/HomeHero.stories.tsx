import { Story, Meta } from '@storybook/react';
import { HomeHero, HomeHeroProps } from './HomeHero';
import { Box } from '@mui/material';

export default {
  component: HomeHero,
  title: 'HomeHero',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', height: '105vh' }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<HomeHeroProps> = (args) => <HomeHero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
