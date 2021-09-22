import { Box } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import { OurServicesItem, OurServicesItemProps } from './OurServicesItem';

export default {
  component: OurServicesItem,
  title: 'OurServicesItem',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          p: 5,
          width: '100%',
          height: '500px',
          bgcolor: (theme) => theme.palette.secondary.main,
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<OurServicesItemProps> = (args) => (
  <OurServicesItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onFillTimeEnd: () => alert('Fill time has ended'),
  fillTime: 5,
  active: false,
};
