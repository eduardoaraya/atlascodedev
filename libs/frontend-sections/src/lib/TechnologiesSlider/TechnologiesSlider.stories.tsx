import { Story, Meta } from '@storybook/react';
import {
  TechnologiesSlider,
  TechnologiesSliderProps,
} from './TechnologiesSlider';
import TechnologySliderSection, {
  TechnologySliderSectionProps,
} from './TechnologySliderSection';

export default {
  component: TechnologySliderSection,
  title: 'TechnologiesSlider',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<TechnologySliderSectionProps> = (args) => (
  <TechnologySliderSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
