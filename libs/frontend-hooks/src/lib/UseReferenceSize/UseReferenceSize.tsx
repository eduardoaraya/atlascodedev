import React from 'react';

export const useReferenceSize = (
  reference: React.RefObject<HTMLElement>
): number[] => {
  const [size, setSize] = React.useState<number[]>([0, 0]);

  React.useLayoutEffect(() => {
    setSize([
      reference.current?.offsetWidth ?? 0,
      reference.current?.offsetHeight ?? 0,
    ]);
  }, [reference]);

  React.useLayoutEffect(() => {
    const updateSize = () => {
      setSize([
        reference.current?.offsetWidth ?? 0,
        reference.current?.offsetHeight ?? 0,
      ]);
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [reference]);

  return size;
};

export default useReferenceSize;
