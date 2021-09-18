import { Story, Meta } from '@storybook/react';
import {
  PlaceholderComponent,
  PlaceholderComponentProps,
} from './PlaceholderComponent';

export default {
  component: PlaceholderComponent,
  title: 'PlaceholderComponent',
} as Meta;

const Template: Story<PlaceholderComponentProps> = (args) => (
  <PlaceholderComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
