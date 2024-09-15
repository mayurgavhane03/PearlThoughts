import { renderHook, act } from '@testing-library/react';
import { useDatePickerStore } from '../store/useDatePickerStore';

describe('useDatePickerStore', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useDatePickerStore());

    expect(result.current.startDate).toBeNull();
    expect(result.current.endDate).toBeNull();
    expect(result.current.recurrenceType).toBe('daily');
  });

  it('should update start date', () => {
    const { result } = renderHook(() => useDatePickerStore());

    act(() => {
      result.current.setStartDate('2024-01-01');
    });

    expect(result.current.startDate).toBe('2024-01-01');
  });
});
