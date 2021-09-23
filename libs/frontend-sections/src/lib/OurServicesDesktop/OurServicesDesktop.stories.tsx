import { Story, Meta } from '@storybook/react';
import {
  OurServicesDesktop,
  OurServicesDesktopProps,
} from './OurServicesDesktop';

export default {
  component: OurServicesDesktop,
  title: 'OurServicesDesktop',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<OurServicesDesktopProps> = (args) => (
  <OurServicesDesktop {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
