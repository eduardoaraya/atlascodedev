import { Story, Meta } from '@storybook/react';
import { AppLayout, AppLayoutProps } from './AppLayout';

export default {
  component: AppLayout,
  title: 'AppLayout',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AppLayoutProps> = (args) => <AppLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
