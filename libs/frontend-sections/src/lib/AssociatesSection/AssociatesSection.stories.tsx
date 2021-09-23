import { Story, Meta } from '@storybook/react';
import { AssociatesSection, AssociatesSectionProps } from './AssociatesSection';

export default {
  component: AssociatesSection,
  title: 'AssociatesSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<AssociatesSectionProps> = (args) => (
  <AssociatesSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  employee3: {
    role: 'Desenvolvedor Full Stack',
    img: 'images/aleks.png',
  },
  employee2: {
    role: 'UI/UX Designer',
    img: 'images/alex.png',
  },
  employee1: {
    role: 'Desenvolvedor Full Stack',
    img: 'images/kadu.png',
  },
};
