import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LikeButton from '../components/LikeButton';
import '@testing-library/jest-dom'


jest.mock("@/hooks/useUser", () => ({
  useUser: jest.fn(() => ({
    user: { id: 1 } // Örnek kullanıcı id'si
  })),
}));
// useSessionContext ve useRouter mock'ları eklenebilir
jest.mock("@supabase/auth-helpers-react", () => ({
  useSessionContext: jest.fn(() => ({
    supabaseClient: {
      from: jest.fn(() => ({
        select: jest.fn(() => ({
          eq: jest.fn(() => ({
            eq: jest.fn(() => ({
              single: jest.fn(() => ({
                data: { id: 1 }, // Örnek veri
                error: null,
              })),
            })),
          })),
        })),
        delete: jest.fn(() => ({
          eq: jest.fn(() => ({
            eq: jest.fn(() => ({
              error: null,
            })),
          })),
        })),
        insert: jest.fn(() => ({
          error: null,
        })),
      })),
    },
  })),
}));

describe('LikeButton component', () => {
  it('renders LikeButton component', async () => {
    const { getByRole } = render(<LikeButton songId="1" />);

    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    await waitFor(() => {});
  });

});
