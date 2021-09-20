import { Story, Meta } from '@storybook/react';
import { DefenseSectionAux, DefenseSectionAuxProps } from './DefenseSectionAux';

export default {
  component: DefenseSectionAux,
  title: 'DefenseSectionAux',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<DefenseSectionAuxProps> = (args) => (
  <DefenseSectionAux {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
