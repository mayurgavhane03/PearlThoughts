import { render, screen, fireEvent } from '@testing-library/react';

import { format } from 'date-fns';
import { useDatePickerStore } from '../store/useDatePickerStore';
import RecurrencePreview from '../RecurrencePreview';

jest.mock('../store/useDatePickerStore');

describe('RecurrencePreview Component', () => {
  beforeEach(() => {
    (useDatePickerStore as any as jest.Mock).mockReturnValue({
      generatedDates: ['2024-01-01', '2024-01-02'],
    });
  });

  test('renders the calendar with correct month', () => {
    render(<RecurrencePreview />);

    const currentMonth = format(new Date(), 'MMMM yyyy');
    expect(screen.getByText(currentMonth)).toBeInTheDocument();
  });

  test('highlights recurring dates', () => {
    render(<RecurrencePreview />);

    const recurringDates = screen.getAllByText(/1|2/);
    recurringDates.forEach((date) => {
      expect(date).toHaveClass('bg-blue-500');
    });
  });

  test('changes to the next and previous months', () => {
    render(<RecurrencePreview />);

    const nextButton = screen.getByText(/Next/i);
    const prevButton = screen.getByText(/Previous/i);

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(screen.getByText(/January 2024/)).toBeInTheDocument();
  });
});
