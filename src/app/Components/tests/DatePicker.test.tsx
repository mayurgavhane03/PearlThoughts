import { render } from '@testing-library/react';
import DatePicker from '../DatePicker';
 

jest.mock('../store/useDatePickerStore');

describe('DatePicker Component', () => {
  beforeEach(() => {
    jest.spyOn(require('../store/useDatePickerStore'), 'useDatePickerStore').mockImplementation(() => ({
      startDate: '2024-01-01',
      endDate: '2024-01-10',
      setStartDate: jest.fn(),
      setEndDate: jest.fn(),
    }));
  });

  it('should render DatePicker component correctly', () => {
    render(<DatePicker />);
  });
});
