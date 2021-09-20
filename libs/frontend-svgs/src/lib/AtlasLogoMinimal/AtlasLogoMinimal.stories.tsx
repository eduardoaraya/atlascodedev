import { Story, Meta } from '@storybook/react';
import { AtlasLogoMinimal, AtlasLogoMinimalProps } from './AtlasLogoMinimal';

export default {
  component: AtlasLogoMinimal,
  title: 'AtlasLogoMinimal',
} as Meta;

const Template: Story<AtlasLogoMinimalProps> = (args) => (
  <AtlasLogoMinimal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
