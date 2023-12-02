import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box'; // YourComponent dosyasını buraya doğru şekilde import etmelisiniz

test('YourComponent renders with correct styles and children', () => {
  // Mock bir children içeriği
  const mockChildren = 'Test Children';

  // render fonksiyonuyla componenti render ediyoruz
  const { container } = render(
    <Box className="test-class">
      {mockChildren}
    </Box>
  );

  // Componentin doğru şekilde render edildiğini kontrol ediyoruz
  expect(container.firstChild).toBeInTheDocument();

  // Componentin doğru className'lere sahip olduğunu kontrol ediyoruz
  expect(container.firstChild).toHaveClass('bg-neutral-900');
  expect(container.firstChild).toHaveClass('rounded-lg');
  expect(container.firstChild).toHaveClass('h-fit');
  expect(container.firstChild).toHaveClass('w-full');
  expect(container.firstChild).toHaveClass('test-class');

  // Children içeriğini kontrol ediyoruz
  expect(container.firstChild).toHaveTextContent(mockChildren);
});
