import { Box, BoxProps, Typography } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import {
  HomeHero,
  DefenseSection,
  DefenseSectionAux,
  OurServicesDesktop,
  OurServicesMobile,
  CloudPitchSection,
  ProjectsSection,
  FAQ as FAQSection,
  FAQItem,
} from '@atlascode/frontend-sections';

import {
  ProjectItemProps,
  TestimonialSlider,
  TestimonialSliderItem,
} from '@atlascode/frontend-components';

/* eslint-disable-next-line */
export interface HomePageProps {}

const projects: ProjectItemProps[] = [
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
];

const testimonials: TestimonialSliderItem[] = [
  {
    bgcolor: '#181D26',
    logo: './images/hightech.png',
    testimonial:
      'Só tenho a agradecer ao atendimento prestado pelo Atlas Code. Foram atenciosos do começo ao fim do projeto e me auxiliaram em diversas dúvida sobre negócios digitais. ',
    testimonialName: 'Enir Menezes',
    testimonialCompany: 'Serralheria High Tech',
  },
  {
    bgcolor: '#1C3664',
    logo: './images/procidadania.png',
    testimonial:
      'Só tenho a agradecer ao atendim3232323ento prestado pelo Atlas Code. Foram atenciosos do começo ao fim do projeto e me auxiliaram em diversas dúvida sobre negócios digitais. ',
    testimonialName: 'Vanessa Sanchez',
    testimonialCompany: 'Pro Cidadania Org',
  },
];

const QUESTIONS: FAQItem[] = [
  {
    question: 'Quanto custa um website em média?',
    answer:
      'Vai depender muito das funcionalidades integradas ao seu projeto, mas uma landing page simples pode variar entre R$ 1.500 a R$ 3.000. Geralmente é cobrado por tempo de desenvolvimento.',
  },
  {
    question: 'Existe algum valor de manutenção?',
    answer:
      'Não. A ideia é dar autonomia aos nossos clientes, oferecendo a facilidade de utilizar nosso painel administrativo para gerenciar seções do próprio website, fazendo modificações com facilidade em tempo real.',
  },
  {
    question: 'Quanto tempo leva pra criar um website?',
    answer:
      'Depende das funcionalidades que terão em seu website, mas pode variar entre 15 a 60 dias.',
  },
  {
    question: 'Qual o valor de um domínio?',
    answer:
      'Em média os valores são de R$ 40,00 a R$ 60,00 por ano. Domínios com nomes pequenos ou muito específicos tendem a ter um valor bem mais alto por causa da facilidade de acesso.',
  },
  {
    question: 'Todos os sites precisam de hospedagem?',
    answer:
      'Todo projeto precisa estar hospedado em algum local, mas isso não precisa ter um custo fixo. Podemos hospedar seu projeto em nuvem de forma gratuita. Você só começa a pagar alguns centavos caso tenha uma média maior do que 30 mil acessos por dia.',
  },
  {
    question: 'Como funciona o serviço em nuvem?',
    answer:
      'É uma tecnologia que permite guardar dados na internet através de um servidor online que está sempre funcionado. Nele, o usuário pode armazenar arquivos, informações e documentos sem precisar de um HD físico.',
  },
  {
    question: 'Como faço pra colocar meu site no Google?',
    answer:
      'É questão de tempo após colocar o seu website no ar para que ele comece a ser indexado pelos bots do Google. Isso pode ser acelerado utilizando ferramentas como o Google Search Console. A partir disso, você precisa trabalhar com boas práticas em SEO para subir no ranking de pesquisas de forma orgânica, ou investir em anúncios.',
  },
];

export function HomePage(props: HomePageProps) {
  return (
    <div>
      <Box sx={styles.heroSection}>
        <HomeHero ctaAction={() => console.log('hello')} />
      </Box>

      <Box sx={styles.defenseSection}>
        <DefenseSection />
      </Box>

      <Box sx={styles.defenseSectionAux}>
        <DefenseSectionAux />
      </Box>

      <Box sx={styles.serviceRoot}>
        <Box sx={styles.serviceSection}>
          <OurServicesDesktop sx={styles.servicesDesktop} />
          <OurServicesMobile sx={styles.servicesMobile} />
        </Box>

        <Box sx={styles.cloudSection}>
          <CloudPitchSection sx={styles.cloudSectionInner} />
        </Box>
      </Box>

      <Box sx={styles.projectsSection}>
        <ProjectsSection sx={styles.projectsInner} projects={projects} />
      </Box>

      <Box sx={styles.testimonialsSection}>
        <Typography variant="h2" sx={styles.testimonialsSectionTitle}>
          O que dizem do nosso trabalho{' '}
        </Typography>
        <TestimonialSlider testimonials={testimonials} />
      </Box>

      <Box sx={styles.faqSection}>
        <FAQSection questions={QUESTIONS} />
      </Box>
    </div>
  );
}

export default HomePage;

const styles = AtlasStylesheet.create({
  serviceRoot: {
    bgcolor: (theme) => theme.palette.secondary.main,
  },

  faqSection: {
    py: { xs: 8 },
  },

  defenseSection: {
    py: { xs: 8 },
  },
  defenseSectionAux: {
    py: { xs: 8 },
  },

  heroSection: {},
  serviceSection: {},

  servicesDesktop: {
    py: { xs: 8 },
    pb: { xs: 0 },
  },

  servicesMobile: {},

  cloudSection: {},

  cloudSectionInner: {
    py: { xs: 6 },
  },
  projectsSection: {},

  projectsInner: {
    py: { xs: 8 },
  },

  testimonialsSection: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    py: { xs: 8 },
    fontSize: '10px',
    flexDirection: 'column',
    gap: { xs: 4.75 },
  },

  testimonialsSectionTitle: {
    fontSize: { xs: '2.4em', lg: '3.2em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.light,
  },
});
