import { Story, Meta } from '@storybook/react';
import { AnimatedBurguerMenu, KotaBurguerProps } from './AnimatedBurguerMenu';

export default {
  component: AnimatedBurguerMenu,
  title: 'Unstable/Burguer - Kota',
  decorators: [
    (Story) => (
      <div
        style={{
          fontSize: '22px',
          margin: '25px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<KotaBurguerProps> = (args) => (
  <AnimatedBurguerMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  colorClosed: '#002946',
  colorOpen: '#F5B63B',
};
