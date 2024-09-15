// utils/generateCalendar.ts
import { eachDayOfInterval, startOfMonth, endOfMonth, format, addMonths, subMonths } from 'date-fns';

export function generateCalendarDays(month: Date) {
  const start = startOfMonth(month);
  const end = endOfMonth(month);
  
  return eachDayOfInterval({ start, end }).map((day) => ({
    date: day,
    formattedDate: format(day, 'yyyy-MM-dd'),
  }));
}

export function getNextMonth(month: Date) {
  return addMonths(month, 1);
}

export function getPreviousMonth(month: Date) {
  return subMonths(month, 1);
}
