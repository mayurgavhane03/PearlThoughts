// components/RecurrencePreview.tsx
import React, { useState } from 'react';
import { format } from 'date-fns';
import { generateCalendarDays, getNextMonth, getPreviousMonth } from '../utils/generateCalendar';
import { useDatePickerStore } from './store/useDatePickerStore';

const RecurrencePreview: React.FC = () => {
  const { generatedDates } = useDatePickerStore();
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Track the current month being displayed
  
  // Generate the days of the current month
  const calendarDays = generateCalendarDays(currentMonth);
  
  // Check if a day is part of the generated recurring dates
  const isRecurringDate = (date: Date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return generatedDates.includes(formattedDate);
  };

  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold text-black mb-2">Preview</h3>

      {/* Navigation for months */}
      <div className="flex justify-between items-center mb-2">
        <button
          className="bg-gray-300 text-black rounded-md px-2 py-1"
          onClick={() => setCurrentMonth(getPreviousMonth(currentMonth))}
        >
          Previous
        </button>
        <span className="font-medium text-black">{format(currentMonth, 'MMMM yyyy')}</span>
        <button
          className="bg-gray-300 text-black rounded-md px-2 py-1"
          onClick={() => setCurrentMonth(getNextMonth(currentMonth))}
        >
          Next
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid text-black grid-cols-7 gap-2 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-semibold">{day}</div>
        ))}
        {calendarDays.map(({ date, formattedDate }) => (
          <div
            key={formattedDate}
            className={`p-2 rounded-md ${
              isRecurringDate(date) ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {format(date, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecurrencePreview;
