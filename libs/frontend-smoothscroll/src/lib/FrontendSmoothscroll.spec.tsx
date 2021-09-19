import { render } from '@testing-library/react';

import FrontendSmoothscroll from './FrontendSmoothscroll';

describe('FrontendSmoothscroll', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendSmoothscroll />);
    expect(baseElement).toBeTruthy();
  });
});
