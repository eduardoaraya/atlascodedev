import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface OurServicesMobileProps extends BoxProps {}

const CONTENT_LIST: string[] = [
  'Apresente seu negócio através de uma plataforma totalmente personalizada e gerencie as seções do seu website em tempo real com o nosso painel administrativo. Precisando de mais tempo? Nós podemos automatizar funções para facilitar ainda mais o funcionamento da sua empresa.',

  'Encante os clientes que visitarem a sua página com estratégias pensadas para o seu negócio. Passe mais credibilidade e conquiste a sua audiência através de conteúdos de qualidade, fortalecendo cada vez mais a imagem da sua marca e criando um vínculo com seus consumidores.',

  'Alcance todo o potencial do seu negócio com uma identidade visual pensada e alinhada ao seu própósito e objetivo estratégico. Cada vez que a sua marca aparece é uma oportunidade para reforçar o seu posicionamento e fortalecer ainda mais a sua imagem no mercado.',

  'Cause grande impacto com campanhas segmentadas para seu público-alvo nas redes sociais, ou até mesmo deixe que o seus clientes encontrem você através de pesquisas específicas no Google. O investimento em mídias pagas é de grande importância para alavancar ainda mais as suas vendas no mundo digital.',
];

export function OurServicesMobile({ sx, ...rest }: OurServicesMobileProps) {
  return <Box sx={{ ...sx, ...styles.root }} {...rest}></Box>;
}

export default OurServicesMobile;

const styles = AtlasStylesheet.create({
  root: {},

  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});
