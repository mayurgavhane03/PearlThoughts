 "use client"
 import React from 'react';
 import RecurrenceOptions from './RecurrenceOptions';
 import DateRangePicker from './DateRangePicker';
 import RecurrencePreview from './RecurrencePreview';
 import { generateRecurringDates } from '../utils/generateRecurringDates';
import { useDatePickerStore } from './store/useDatePickerStore';
 
 const DatePicker: React.FC = () => {
   const { recurrenceType, interval, startDate, endDate, daysOfWeek, nthDay, setGeneratedDates } =
     useDatePickerStore();
 
   const handleGeneratePreview = () => {
     const dates = generateRecurringDates({
       recurrenceType,
       interval,
       startDate,
       endDate,
       daysOfWeek,
       nthDay,
     });
     setGeneratedDates(dates); // Update the store with the generated dates
   };
 
   return (
     <div className="bg-white p-4 shadow-md rounded-lg">
       <h2 className="text-xl text-black font-semibold mb-4">Recurring Date Picker</h2>
       <RecurrenceOptions />
       <DateRangePicker />
       
       {/* Button to trigger preview generation */}
       <button
         onClick={handleGeneratePreview}
         className="bg-blue-500 text-white rounded-md p-2 mt-4"
       >
         Generate Preview
       </button>
       
       <RecurrencePreview />
     </div>
   );
 };
 
 export default DatePicker;
 