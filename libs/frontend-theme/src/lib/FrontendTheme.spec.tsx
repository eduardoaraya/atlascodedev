import { render } from '@testing-library/react';

import FrontendTheme from './FrontendTheme';

describe('FrontendTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendTheme />);
    expect(baseElement).toBeTruthy();
  });
});
