import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

// Example component for testing
const ExampleButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
    >
      {children}
    </button>
  );
};

describe('ExampleButton', () => {
  it('renders with correct text', () => {
    render(<ExampleButton>Click me</ExampleButton>);

    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<ExampleButton>Test Button</ExampleButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-blue-500',
      'text-white',
      'px-4',
      'py-2',
      'rounded'
    );
  });

  it('calls onClick handler when clicked', async () => {
    const mockClick = vi.fn();
    render(<ExampleButton onClick={mockClick}>Click me</ExampleButton>);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('is accessible', () => {
    render(<ExampleButton>Accessible Button</ExampleButton>);

    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toBeEnabled();
  });
});

// Example utility function test
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

describe('formatDate utility', () => {
  it('formats date correctly', () => {
    const testDate = new Date('2024-01-15T10:30:00.000Z');
    expect(formatDate(testDate)).toBe('2024-01-15');
  });

  it('handles different dates', () => {
    const testDate = new Date('2023-12-31T23:59:59.999Z');
    expect(formatDate(testDate)).toBe('2023-12-31');
  });
});
