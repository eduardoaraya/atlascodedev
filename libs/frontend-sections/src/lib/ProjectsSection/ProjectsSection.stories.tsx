import { Story, Meta } from '@storybook/react';
import { ProjectsSection, ProjectsSectionProps } from './ProjectsSection';

export default {
  component: ProjectsSection,
  title: 'ProjectsSection',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<ProjectsSectionProps> = (args) => (
  <ProjectsSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  projects: [
    {
      tags: ['Desenvolvimento', 'Rebranding', 'UI', 'UX'],
      techList: ['figma', 'react', 'next', 'node'],
      title: 'Website de cartas contempladas com automação de funções.',
      websiteURL: 'https://atlascode.dev',
    },
    {
      tags: ['Desenvolvimento', 'UI', 'UX'],
      title: 'Projeto de mapeamento Cultural de Taquara',
      techList: ['figma', 'react', 'next', 'node'],
      websiteURL: 'https://atlascode.dev',
    },
    {
      tags: ['Desenvolvimento', 'UI', 'UX'],
      title: 'Website de cursos de pós-graduação e extensão em Medicina',
      techList: ['figma', 'react', 'next', 'node'],
      websiteURL: 'https://atlascode.dev',
    },
    {
      tags: ['Desenvolvimento', 'UI', 'UX'],
      title: 'Landing Page para assessoria integral em projetos culturais',
      techList: ['figma', 'react', 'gatsby', 'node'],
      websiteURL: 'https://atlascode.dev',
    },
    {
      tags: ['Desenvolvimento', 'Branding', 'UI', 'UX'],
      title: 'Landing Page de serralheria e prestação de serviço',
      techList: ['figma', 'react', 'gatsby', 'node'],
      websiteURL: 'https://atlascode.dev',
    },
  ],
};
