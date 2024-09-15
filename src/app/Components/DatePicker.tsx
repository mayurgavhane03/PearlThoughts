"use client";
import React, { useEffect } from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import DateRangePicker from "./DateRangePicker";
import RecurrencePreview from "./RecurrencePreview";
import { generateRecurringDates } from "../utils/generateRecurringDates";
import { useDatePickerStore } from "./store/useDatePickerStore";

const DatePicker: React.FC = () => {
  const {
    recurrenceType,
    interval,
    startDate,
    endDate,
    daysOfWeek,
    nthDay,
    setGeneratedDates,
  } = useDatePickerStore();

  useEffect(() => {
    if (endDate) {
      // Generate preview when endDate is available
      const dates = generateRecurringDates({
        recurrenceType,
        interval,
        startDate,
        endDate,
        daysOfWeek,
        nthDay,
      });
      setGeneratedDates(dates); // Update the store with the generated dates
    }
  }, [
    endDate,
    recurrenceType,
    interval,
    startDate,
    daysOfWeek,
    nthDay,
    setGeneratedDates,
  ]);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl text-black font-semibold mb-4">
        Recurring Date Picker
      </h2>
      <RecurrenceOptions />
      <DateRangePicker />

      <RecurrencePreview />
    </div>
  );
};

export default DatePicker;
