import React from 'react';
import { render } from '@testing-library/react';
import Box from '../components/Box'; // YourComponent dosyasını buraya doğru şekilde import etmelisiniz

test('YourComponent renders with correct styles and children', () => {
  const mockChildren = 'Test Children';

  const { container, getByText } = render(
    <Box className="test-class">
      {mockChildren}
    </Box>
  );

  // Componentin doğru şekilde render edildiğini kontrol ediyoruz
  expect(getByText('Test Children')).toBeTruthy()

});
