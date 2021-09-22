import { Story, Meta } from '@storybook/react';
import { OurServicesMobile, OurServicesMobileProps } from './OurServicesMobile';

export default {
  component: OurServicesMobile,
  title: 'OurServicesMobile',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilPhone1',
    },
  },
} as Meta;

const Template: Story<OurServicesMobileProps> = (args) => (
  <OurServicesMobile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
