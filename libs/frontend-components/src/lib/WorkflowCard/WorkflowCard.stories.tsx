import { Story, Meta } from '@storybook/react';
import { WorkflowCard, WorkflowCardProps } from './WorkflowCard';

export default {
  component: WorkflowCard,
  title: 'WorkflowCard',
} as Meta;

const Template: Story<WorkflowCardProps> = (args) => <WorkflowCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
