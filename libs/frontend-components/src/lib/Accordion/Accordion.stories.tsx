import { Box } from '@mui/system';
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ m: { lg: 5 } }}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Placeholder item lorem ipsum dolum',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, in sit maiores veritatis dignissimos facere dolores soluta quidem, laborum ex nobis amet aliquid delectus minima hic reprehenderit? Neque culpa illo nesciunt alias, dolorum veniam, molestias vitae sunt, aut labore repellat nisi sed error eius quidem quibusdam quod quos quae! Id cum aliquid veritatis optio pariatur, saepe ipsam numquam, quo quisquam harum quae officiis sit distinctio repellendus dolorum repellat provident eum modi facilis! Beatae, doloremque corporis. Voluptatum eius vitae iusto similique incidunt unde doloremque molestiae numquam quod eaque esse totam nihil quibusdam dolore itaque veritatis facilis, magnam fugit! Libero provident aut aliquid dicta ad fugit qui earum reiciendis quasi, ullam quidem consectetur odio quo rerum ex nemo hic beatae commodi illo ab, velit dolorum aperiam, consequatur explicabo. Voluptatibus, blanditiis ullam. Expedita accusantium doloremque illo quasi blanditiis amet temporibus quos, recusandae rerum nam illum facilis? Ex laborum cumque vero reprehenderit asperiores in!',
};
