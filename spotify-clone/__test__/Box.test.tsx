import React from 'react';
import { render } from '@testing-library/react';
import Box from '../components/Box';

test('YourComponent renders with correct styles and children', () => {
  const mockChildren = 'Test Children';

  const { container, getByText } = render(
    <Box className="test-class">
      {mockChildren}
    </Box>
  );
  expect(getByText('Test Children')).toBeTruthy()

});
