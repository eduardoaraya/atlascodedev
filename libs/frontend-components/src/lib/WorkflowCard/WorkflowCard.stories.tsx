import { Box } from '@mui/system';
import { Story, Meta } from '@storybook/react';
import { WorkflowCard, WorkflowCardProps } from './WorkflowCard';

export default {
  component: WorkflowCard,
  title: 'WorkflowCard',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ m: 3 }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<WorkflowCardProps> = (args) => <WorkflowCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
