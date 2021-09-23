import { Box } from '@mui/system';
import { Story, Meta } from '@storybook/react';
import { EmployeeCard, EmployeeCardProps } from './EmployeeCard';

export default {
  component: EmployeeCard,
  title: 'EmployeeCard',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ m: 5, display: 'flex', justifyContent: 'center' }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<EmployeeCardProps> = (args) => <EmployeeCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'images/alex.png',
  job: 'UI/UX Designer',
};
