import { Story, Meta } from '@storybook/react';
import { DefenseSection, DefenseSectionProps } from './DefenseSection';

export default {
  component: DefenseSection,
  title: 'DefenseSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<DefenseSectionProps> = (args) => (
  <DefenseSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
