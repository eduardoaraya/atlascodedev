import { Story, Meta } from '@storybook/react';
import { DefenseCard, DefenseCardProps } from './DefenseCard';

export default {
  component: DefenseCard,
  title: 'DefenseCard',
} as Meta;

const Template: Story<DefenseCardProps> = (args) => <DefenseCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
