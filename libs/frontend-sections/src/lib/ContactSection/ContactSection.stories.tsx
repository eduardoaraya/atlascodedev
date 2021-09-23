import { Story, Meta } from '@storybook/react';
import { ContactSection, ContactSectionProps } from './ContactSection';

export default {
  component: ContactSection,
  title: 'ContactSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<ContactSectionProps> = (args) => (
  <ContactSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
