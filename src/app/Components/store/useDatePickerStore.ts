import { create } from 'zustand'

interface DatePickerState {
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  daysOfWeek: string[];
  nthDay: string | null;
  startDate: string | null;
  endDate: string | null;
  generatedDates: string[];  // <-- New state to hold generated dates
  setRecurrenceType: (recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  setInterval: (interval: number) => void;
  setDaysOfWeek: (daysOfWeek: string[]) => void;
  setNthDay: (nthDay: string | null) => void;
  setStartDate: (startDate: string | null) => void;
  setEndDate: (endDate: string | null) => void;
  setGeneratedDates: (dates: string[]) => void;  // <-- Function to update generated dates
}

export const useDatePickerStore = create<DatePickerState>((set) => ({
  recurrenceType: 'daily',
  interval: 1,
  daysOfWeek: [],
  nthDay: null,
  startDate: null,
  endDate: null,
  generatedDates: [],  // Initial state for generated dates
  setRecurrenceType: (recurrenceType) => set({ recurrenceType }),
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (daysOfWeek) => set({ daysOfWeek }),
  setNthDay: (nthDay) => set({ nthDay }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setGeneratedDates: (dates) => set({ generatedDates: dates }),  // Update generated dates
}));
