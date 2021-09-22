import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps, useMediaQuery } from '@mui/material';
import { OurServiceItemAccordion } from '@atlascode/frontend-components';
import React from 'react';

/* eslint-disable-next-line */
export interface OurServicesMobileProps extends BoxProps {}

const CONTENT_LIST: string[] = [
  'Apresente seu negócio através de uma plataforma totalmente personalizada e gerencie as seções do seu website em tempo real com o nosso painel administrativo. Precisando de mais tempo? Nós podemos automatizar funções para facilitar ainda mais o funcionamento da sua empresa.',

  'Encante os clientes que visitarem a sua página com estratégias pensadas para o seu negócio. Passe mais credibilidade e conquiste a sua audiência através de conteúdos de qualidade, fortalecendo cada vez mais a imagem da sua marca e criando um vínculo com seus consumidores.',

  'Alcance todo o potencial do seu negócio com uma identidade visual pensada e alinhada ao seu própósito e objetivo estratégico. Cada vez que a sua marca aparece é uma oportunidade para reforçar o seu posicionamento e fortalecer ainda mais a sua imagem no mercado.',

  'Cause grande impacto com campanhas segmentadas para seu público-alvo nas redes sociais, ou até mesmo deixe que o seus clientes encontrem você através de pesquisas específicas no Google. O investimento em mídias pagas é de grande importância para alavancar ainda mais as suas vendas no mundo digital.',
];

const STATE_KEY = {
  dev: 'dev',
  social: 'social',
  visual: 'visual',
  ads: 'ads',
} as const;

export function OurServicesMobile({ sx, ...rest }: OurServicesMobileProps) {
  const [accordionState, setAccordionState] = React.useState({
    dev: false,
    social: false,
    visual: false,
    ads: false,
  });

  const handleClick = (key: keyof typeof STATE_KEY) => {
    setAccordionState((prevState) => {
      return { ...prevState, [key]: !prevState[key] };
    });
  };

  const isDesktop = useMediaQuery('@media(min-width: 1024px)');

  return (
    <Box>
      {!isDesktop && (
        <Box sx={{ ...sx, ...styles.root }} {...rest}>
          <Box sx={styles.container}>
            <OurServiceItemAccordion
              active={accordionState.dev}
              onClick={() => handleClick('dev')}
              content={CONTENT_LIST[0]}
              title={'Desenvolvimento nativo'}
            />
            <OurServiceItemAccordion
              active={accordionState.social}
              onClick={() => handleClick('social')}
              content={CONTENT_LIST[1]}
              title={'Redes sociais'}
            />
            <OurServiceItemAccordion
              active={accordionState.visual}
              onClick={() => handleClick('visual')}
              content={CONTENT_LIST[2]}
              title={'Identidade visual'}
            />
            <OurServiceItemAccordion
              active={accordionState.ads}
              onClick={() => handleClick('ads')}
              content={CONTENT_LIST[3]}
              title={'Anúncios'}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default OurServicesMobile;

const styles = AtlasStylesheet.create({
  root: {
    bgcolor: (theme) => theme.palette.secondary.main,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { sm: 'center' },
    p: 3,
    gap: { xs: 8 },
  },
});
