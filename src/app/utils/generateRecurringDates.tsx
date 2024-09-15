 "use client"
import { format, addDays, addWeeks, addMonths, addYears } from 'date-fns';

interface GenerateRecurringDatesParams {
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  startDate: string | null;
  endDate: string | null;
  daysOfWeek: string[];
  nthDay: string | null;
}

export function generateRecurringDates({
  recurrenceType,
  interval,
  startDate,
  endDate,
}: GenerateRecurringDatesParams): string[] {
  if (!startDate) return [];

  let dates: string[] = [];
  let currentDate = new Date(startDate);
  let end = endDate ? new Date(endDate) : addYears(currentDate, 1);

  while (currentDate <= end) {
    dates.push(format(currentDate, 'yyyy-MM-dd'));

    switch (recurrenceType) {
      case 'daily':
        currentDate = addDays(currentDate, interval);
        break;
      case 'weekly':
        currentDate = addWeeks(currentDate, interval);
        break;
      case 'monthly':
        currentDate = addMonths(currentDate, interval);
        break;
      case 'yearly':
        currentDate = addYears(currentDate, interval);
        break;
      default:
        break;
    }
  }

  return dates;
}
