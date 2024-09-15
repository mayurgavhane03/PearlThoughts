import { render, screen, fireEvent } from '@testing-library/react';
import { useDatePickerStore } from '../store/useDatePickerStore';
import RecurrenceOptions from '../RecurrenceOptions';

jest.mock('../store/useDatePickerStore');

describe('RecurrenceOptions Component', () => {
  beforeEach(() => {
    (useDatePickerStore as any as jest.Mock).mockReturnValue({
      recurrenceType: 'daily',
      interval: 1,
      setRecurrenceType: jest.fn(),
      setInterval: jest.fn(),
    });
  });

  test('renders recurrence type and interval input fields', () => {
    render(<RecurrenceOptions />);

    expect(screen.getByLabelText(/Recurrence Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Every/i)).toBeInTheDocument();
  });

  test('calls setRecurrenceType on select change', () => {
    const { setRecurrenceType } = useDatePickerStore();
    
    render(<RecurrenceOptions />);
    
    fireEvent.change(screen.getByLabelText(/Recurrence Type/i), { target: { value: 'weekly' } });
    expect(setRecurrenceType).toHaveBeenCalledWith('weekly');
  });

  
});
