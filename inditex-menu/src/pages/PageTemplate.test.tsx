import React from 'react';
import { render } from '@testing-library/react';
import PageTemplate from './PageTemplate';

test('renders PageTemplate component', () => {
  const { getByText } = render(<PageTemplate />);
  const linkElement = getByText(/PageTemplate Component/i);
  expect(linkElement).toBeInTheDocument();
});
