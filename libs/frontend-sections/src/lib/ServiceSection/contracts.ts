import { NodeInterface } from './utils/node';

type ScrollSizeComputeType = (
  services: NodeInterface<ServiceInterface>[]
) => number | null;

export interface ServiceInterface {
  id: number;
  title: string;
  content: string[];
  size?: number;
  getSize?(services: ServiceInterface[]): number;
  icon?(): string | JSX.Element;
  getScrollSize: ScrollSizeComputeType;
}
