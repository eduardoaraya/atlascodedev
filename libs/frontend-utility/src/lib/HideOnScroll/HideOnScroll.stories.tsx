import { Story, Meta } from '@storybook/react';
import { HideOnScroll, HideOnScrollProps } from './HideOnScroll';

export default {
  component: HideOnScroll,
  title: 'HideOnScroll',
} as Meta;

const Template: Story<HideOnScrollProps> = (args) => <HideOnScroll {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
