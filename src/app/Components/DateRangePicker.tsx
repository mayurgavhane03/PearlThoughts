 "use client"
import React from 'react';
import { useDatePickerStore } from './store/useDatePickerStore';

const DateRangePicker: React.FC = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePickerStore();

  return (
    <div className="mb-4 ">
      <label className="block mb-2 text-sm font-medium text-black">Start Date</label>
      <input
        type="date"
        value={startDate || ''}
        onChange={(e) => setStartDate(e.target.value)}
        className="border rounded-md text-black p-2 w-full"
      />

      <label className="block mt-4 mb-2 text-black text-sm font-medium">End Date (Optional)</label>
      <input
        type="date"
        value={endDate || ''}
        onChange={(e) => setEndDate(e.target.value)}
        className="border text-black rounded-md p-2 w-full"
      />
    </div>
  );
};

export default DateRangePicker;
