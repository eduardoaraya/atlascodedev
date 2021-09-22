import { Story, Meta } from '@storybook/react';
import { OurServicesMobile, OurServicesMobileProps } from './OurServicesMobile';

export default {
  component: OurServicesMobile,
  title: 'OurServicesMobile',
} as Meta;

const Template: Story<OurServicesMobileProps> = (args) => (
  <OurServicesMobile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
