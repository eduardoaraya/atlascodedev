import { Story, Meta } from '@storybook/react';
import { UseReferenceSize, UseReferenceSizeProps } from './UseReferenceSize';

export default {
  component: UseReferenceSize,
  title: 'UseReferenceSize',
} as Meta;

const Template: Story<UseReferenceSizeProps> = (args) => (
  <UseReferenceSize {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
