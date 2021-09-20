import { Story, Meta } from '@storybook/react';
import { ProjectItem, ProjectItemProps } from './ProjectItem';

export default {
  component: ProjectItem,
  title: 'ProjectItem',
} as Meta;

const Template: Story<ProjectItemProps> = (args) => <ProjectItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
