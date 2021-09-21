import { Box } from '@mui/system';
import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './Header';

export default {
  component: Header,
  title: 'Header',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  menuItems: [
    { action: () => console.log('clicked'), label: 'Sobre nós' },
    { action: () => console.log('clicked'), label: 'Serviços' },
    { action: () => console.log('clicked'), label: 'Projetos' },
    { action: () => console.log('clicked'), label: 'Blog' },
    { action: () => console.log('clicked'), label: 'Contato' },
  ],
  callToActionButton: {
    action: () => console.log('cta click'),
    label: 'Faça seu orçamento',
  },
};
