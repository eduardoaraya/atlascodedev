import { Story, Meta } from '@storybook/react';
import { ScrollBackTop, ScrollBackTopProps } from './ScrollBackTop';

export default {
  component: ScrollBackTop,
  title: 'ScrollBackTop',
} as Meta;

const Template: Story<ScrollBackTopProps> = (args) => (
  <ScrollBackTop {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
