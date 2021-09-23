import { Story, Meta } from '@storybook/react';
import { AboutUsHero, AboutUsHeroProps } from './AboutUsHero';

export default {
  component: AboutUsHero,
  title: 'AboutUsHero',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AboutUsHeroProps> = (args) => <AboutUsHero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
