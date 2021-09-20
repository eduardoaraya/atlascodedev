import { Story, Meta } from '@storybook/react';
import { ProjectsSection, ProjectsSectionProps } from './ProjectsSection';

export default {
  component: ProjectsSection,
  title: 'ProjectsSection',
} as Meta;

const Template: Story<ProjectsSectionProps> = (args) => (
  <ProjectsSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
