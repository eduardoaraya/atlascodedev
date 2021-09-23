import { Story, Meta } from '@storybook/react';
import { CloudPitchSection, CloudPitchSectionProps } from './CloudPitchSection';

export default {
  component: CloudPitchSection,
  title: 'CloudPitchSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<CloudPitchSectionProps> = (args) => (
  <CloudPitchSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
