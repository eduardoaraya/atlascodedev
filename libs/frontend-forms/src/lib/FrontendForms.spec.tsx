import { render } from '@testing-library/react';

import FrontendForms from './FrontendForms';

describe('FrontendForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendForms />);
    expect(baseElement).toBeTruthy();
  });
});
