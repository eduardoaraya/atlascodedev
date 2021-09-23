import { ServiceInterface } from '../contracts';
import LinkedList, { LinkedListInterface } from './linkedList';
import { NodeInterface } from './node';

const computeContentService = (content: string[]) => {
  const total = content.join(' ').length + 26;
  return total;
};

export default (
  services: ServiceInterface[]
): LinkedListInterface<ServiceInterface> => {
  const list = new LinkedList<ServiceInterface>();
  services.forEach(({ id, title, content }: ServiceInterface) =>
    list.add({
      id,
      title,
      content,
      size: computeContentService(content),
      icon: () => 'Icon',
      getScrollSize: (services: NodeInterface<ServiceInterface>[]) =>
        services.reduce(
          (total: number, current: NodeInterface<ServiceInterface>) => {
            if (!current?.getElement() || current?.getElement()?.id >= id) {
              return total;
            }
            return (total += current?.getElement()?.size ?? 0);
          },
          0
        ),
    })
  );
  return list;
};
