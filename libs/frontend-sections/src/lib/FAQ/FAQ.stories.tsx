import { Story, Meta } from '@storybook/react';
import { FAQ, FAQProps } from './FAQ';

export default {
  component: FAQ,
  title: 'FAQ',
} as Meta;

const Template: Story<FAQProps> = (args) => <FAQ {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
