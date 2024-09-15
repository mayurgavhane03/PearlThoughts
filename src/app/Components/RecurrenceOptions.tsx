"use client" 
import React from 'react';
import { useDatePickerStore } from './store/useDatePickerStore';

const recurrenceTypes = ['daily', 'weekly', 'monthly', 'yearly'] as const;

const RecurrenceOptions: React.FC = () => {
  const { recurrenceType, setRecurrenceType, interval, setInterval } = useDatePickerStore();

  return (
    <div className="mb-4">
      <label className="block mb-2 text-black text-sm  font-medium">Recurrence Type</label>
      <select
        className="border text-black rounded-md p-2 w-full"
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value as typeof recurrenceType)}
      >
        {recurrenceTypes.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      <label className="block text-black mt-4 mb-2 text-sm font-medium">Every</label>
      <input
        type="number"
        value={interval}
        min="1"
        onChange={(e) => setInterval(Number(e.target.value))}
        className="border text-black  rounded-md p-2 w-full"
      />
    </div>
  );
};

export default RecurrenceOptions;
