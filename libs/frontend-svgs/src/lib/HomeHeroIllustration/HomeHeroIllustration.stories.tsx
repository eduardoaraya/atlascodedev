import { Story, Meta } from '@storybook/react';
import {
  HomeHeroIllustration,
  HomeHeroIllustrationProps,
} from './HomeHeroIllustration';

export default {
  component: HomeHeroIllustration,
  title: 'HomeHeroIllustration',
} as Meta;

const Template: Story<HomeHeroIllustrationProps> = (args) => (
  <HomeHeroIllustration {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
