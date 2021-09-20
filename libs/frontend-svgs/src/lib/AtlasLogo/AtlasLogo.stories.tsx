import { Story, Meta } from '@storybook/react';
import { AtlasLogo, AtlasLogoProps } from './AtlasLogo';

export default {
  component: AtlasLogo,
  title: 'AtlasLogo',
} as Meta;

const Template: Story<AtlasLogoProps> = (args) => <AtlasLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
