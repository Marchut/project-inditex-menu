import React from 'react';
import { render } from '@testing-library/react';
import Body from './Body';

test('renders Body component', () => {
  const { getByText } = render(<Body />);
  const linkElement = getByText(/Body Component/i);
  expect(linkElement).toBeInTheDocument();
});
