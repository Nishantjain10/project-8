import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  addWeeks, subWeeks,
  format, startOfWeek,
  isToday
} from 'date-fns';
import { useEvents } from '../hooks/useEvents';
import EventCard from './EventCard';

export default function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { events } = useEvents();

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = [0, 1, 2, 3, 4].map(days => {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + days);
    return day;
  });

  const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));

  return (
    <div className="bg-transparent p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
          Week of {format(weekDays[0], 'MMM d, yyyy')}
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={prevWeek}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextWeek}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {weekDays.map((day) => (
          <div
            key={day.toString()}
            className={`bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg mb-4 sm:mb-10 ${
              isToday(day) ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''
            }`}
          >
            <div className={`text-center p-2 ${
              isToday(day) 
                ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' 
                : 'bg-gray-50/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300'
            } rounded-t-lg`}>
              <p className="font-semibold">{format(day, 'EEEE')}</p>
              <p className="text-sm opacity-75">{format(day, 'MMM d')}</p>
            </div>
            <div className="space-y-4 p-2">
              {events[format(day, 'yyyy-MM-dd')]?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400">Events brought to you by
        <a
          href="https://guild.host/?utm_source=referral&utm_medium=chat&utm_campaign=general_link"
          target="_blank" rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline"> Guild.host
        </a>
      </p>
    </div>
  );
}