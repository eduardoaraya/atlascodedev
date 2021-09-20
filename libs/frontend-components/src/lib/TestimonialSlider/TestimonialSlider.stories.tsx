import { Box } from '@mui/system';
import { Story, Meta } from '@storybook/react';
import { TestimonialSlider, TestimonialSliderProps } from './TestimonialSlider';

export default {
  component: TestimonialSlider,
  title: 'TestimonialSlider',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{ m: { xs: 1, lg: 5 }, display: 'flex', justifyContent: 'center' }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<TestimonialSliderProps> = (args) => (
  <TestimonialSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  bgcolor: '#181D26',
  logo: 'images/hightech.png',
  testimonial:
    'Só tenho a agradecer ao atendimento prestado pelo Atlas Code. Foram atenciosos do começo ao fim do projeto e me auxiliaram em diversas dúvida sobre negócios digitais. ',
  testimonialName: 'Enir Menezes',
  testimonialCompany: 'Serralheria High Tech',
};
