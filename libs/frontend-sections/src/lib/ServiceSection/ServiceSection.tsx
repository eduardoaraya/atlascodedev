import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import ServiceContent from './components/ServiceContent';
import ServiceTabs from './components/ServiceTabs';
import { ServiceInterface } from './contracts';
import servicesData from './services-data';
import { getDefaultStyle } from './style';
import { LinkedListInterface } from './utils/linkedList';
import { NodeInterface } from './utils/node';
import serviceFactory from './utils/serviceFactory';

export interface ServiceSectionProps {
  services?: ServiceInterface[];
}

export const ServiceSection: React.FC<ServiceSectionProps> =
  (): JSX.Element => {
    const services: LinkedListInterface<ServiceInterface> =
      serviceFactory(servicesData);

    const [content, setContent] =
      useState<NodeInterface<ServiceInterface> | null>(null);

    const setTargetContent = (state: NodeInterface<ServiceInterface> | null) =>
      setContent(state);

    const getScroll = () => {
      if (content === null) return 0;
      if (content?.getElement() === null) return 0;
      return content.getElement()?.getScrollSize(services.getData());
    };

    useEffect(() => {
      setTimeout(() => {
        setTargetContent(services?.getTail());
      }, 1500);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      let time: NodeJS.Timeout;
      if (window !== undefined) {
        time = setInterval(() => {
          setTargetContent(content?.getNext() ?? services?.getTail());
        }, 3000);
      }
      return () => {
        if (window !== undefined) {
          clearInterval(time);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content]);

    return (
      <Box component="section" sx={getDefaultStyle(3000)}>
        <Container>
          <Box className="service-content">
            <Typography variant="h1" color="white">
              Nossos serviços
            </Typography>
            <Box className="service-row">
              <ServiceTabs
                services={services}
                stateContent={content}
                handleClick={(content) => setTargetContent(content)}
              />
              <Box className="service-content-scroll">
                <Box
                  className="service-description"
                  sx={{
                    transform: `translate3d(0, -${getScroll()}px, 0)`,
                  }}
                >
                  <ServiceContent services={services} stateContent={content} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };

export default ServiceSection;
