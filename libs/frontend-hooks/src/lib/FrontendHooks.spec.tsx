import { render } from '@testing-library/react';

import FrontendHooks from './FrontendHooks';

describe('FrontendHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendHooks />);
    expect(baseElement).toBeTruthy();
  });
});
