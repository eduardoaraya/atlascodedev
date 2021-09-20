import { Story, Meta } from '@storybook/react';
import {
  AnimatedBurguerMenu,
  AnimatedBurguerMenuProps,
} from './AnimatedBurguerMenu';

export default {
  component: AnimatedBurguerMenu,
  title: 'AnimatedBurguerMenu',
} as Meta;

const Template: Story<AnimatedBurguerMenuProps> = (args) => (
  <AnimatedBurguerMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
