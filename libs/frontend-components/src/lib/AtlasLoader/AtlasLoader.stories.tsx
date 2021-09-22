import { Story, Meta } from '@storybook/react';
import { AtlasLoader, AtlasLoaderProps } from './AtlasLoader';

export default {
  component: AtlasLoader,
  title: 'AtlasLoader',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AtlasLoaderProps> = (args) => <AtlasLoader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
