import { Story, Meta } from '@storybook/react';
import { WhatsAppButton, WhatsAppButtonProps } from './WhatsAppButton';

export default {
  component: WhatsAppButton,
  title: 'WhatsAppButton',
} as Meta;

const Template: Story<WhatsAppButtonProps> = (args) => (
  <WhatsAppButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
