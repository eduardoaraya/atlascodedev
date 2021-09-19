import { Story, Meta } from '@storybook/react';
import {
  UseFormikContactForm,
  UseFormikContactFormProps,
} from './UseFormikContactForm';

export default {
  component: UseFormikContactForm,
  title: 'UseFormikContactForm',
} as Meta;

const Template: Story<UseFormikContactFormProps> = (args) => (
  <UseFormikContactForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
