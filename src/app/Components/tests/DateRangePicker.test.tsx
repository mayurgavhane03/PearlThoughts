import { render, screen, fireEvent } from '@testing-library/react';
import { useDatePickerStore } from '../store/useDatePickerStore';
import DateRangePicker from '../DateRangePicker';

jest.mock('../store/useDatePickerStore');

describe('DateRangePicker Component', () => {
  beforeEach(() => {
    (useDatePickerStore as any as jest.Mock).mockReturnValue({
      startDate: '2024-01-01',
      endDate: '2024-01-10',
      setStartDate: jest.fn(),
      setEndDate: jest.fn(),
    });
  });

  test('renders start and end date inputs', () => {
    render(<DateRangePicker />);
    
  
  })

  test('calls setStartDate when start date changes', () => {
    const { setStartDate } = useDatePickerStore();

    render(<DateRangePicker />);

    fireEvent.change(screen.getByLabelText(/Start Date/i), { target: { value: '2024-01-05' } });
    expect(setStartDate).toHaveBeenCalledWith('2024-01-05');
  });

  test('calls setEndDate when end date changes', () => {
    const { setEndDate } = useDatePickerStore();

    render(<DateRangePicker />);

    fireEvent.change(screen.getByLabelText(/End Date/i), { target: { value: '2024-01-15' } });
    expect(setEndDate).toHaveBeenCalledWith('2024-01-15');
  });
});
