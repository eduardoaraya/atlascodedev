import { Story, Meta } from '@storybook/react';
import { WorkflowSection, WorkflowSectionProps } from './WorkflowSection';

export default {
  component: WorkflowSection,
  title: 'WorkflowSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<WorkflowSectionProps> = (args) => (
  <WorkflowSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
