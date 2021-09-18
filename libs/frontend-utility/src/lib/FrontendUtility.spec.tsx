import { render } from '@testing-library/react';

import FrontendUtility from './FrontendUtility';

describe('FrontendUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendUtility />);
    expect(baseElement).toBeTruthy();
  });
});
