import { Story, Meta } from '@storybook/react';
import {
  TechnologiesSlider,
  TechnologiesSliderProps,
} from './TechnologiesSlider';

export default {
  component: TechnologiesSlider,
  title: 'TechnologiesSlider',
} as Meta;

const Template: Story<TechnologiesSliderProps> = (args) => (
  <TechnologiesSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
