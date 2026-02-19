import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from 'lucide-react';
interface DateTimeSelectProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
}
const DAYS_RU = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTHS_RU = [
'Январь',
'Февраль',
'Март',
'Апрель',
'Май',
'Июнь',
'Июль',
'Август',
'Сентябрь',
'Октябрь',
'Ноябрь',
'Декабрь'];

const TIME_SLOTS = [
'09:00',
'09:30',
'10:00',
'10:30',
'11:00',
'11:30',
'12:00',
'12:30',
'13:00',
'13:30',
'14:00',
'14:30',
'15:00',
'15:30',
'16:00',
'16:30',
'17:00',
'17:30',
'18:00',
'18:30',
'19:00',
'19:30',
'20:00'];

// Simulate some unavailable slots
const UNAVAILABLE_SLOTS = new Set(['10:00', '10:30', '13:00', '15:30', '18:00']);
function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let startDow = firstDay.getDay();
  // Convert Sunday=0 to Monday-based (Mon=0)
  startDow = startDow === 0 ? 6 : startDow - 1;
  const days: (number | null)[] = [];
  for (let i = 0; i < startDow; i++) {
    days.push(null);
  }
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(d);
  }
  return days;
}
export function DateTimeSelect({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime
}: DateTimeSelectProps) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const calendarDays = useMemo(
    () => getCalendarDays(viewYear, viewMonth),
    [viewYear, viewMonth]
  );
  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };
  const goPrevMonth = () => {
    const isCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();
    if (isCurrentMonth) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };
  const isCurrentMonth =
  viewYear === today.getFullYear() && viewMonth === today.getMonth();
  const formatDateStr = (day: number) => {
    const m = String(viewMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${viewYear}-${m}-${d}`;
  };
  const isPastDay = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    return date < todayStart;
  };
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-dark mb-2">
        Выберите дату и время
      </h2>
      <p className="text-gray-500 mb-8">Укажите удобные дату и время визита</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={goPrevMonth}
                disabled={isCurrentMonth}
                className={`p-2 rounded-lg transition-colors ${isCurrentMonth ? 'text-gray-200 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'}`}
                aria-label="Предыдущий месяц">

                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-bold text-dark">
                {MONTHS_RU[viewMonth]} {viewYear}
              </h3>
              <button
                onClick={goNextMonth}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                aria-label="Следующий месяц">

                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS_RU.map((day) =>
              <div
                key={day}
                className="text-center text-xs font-semibold text-gray-400 py-2">

                  {day}
                </div>
              )}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} />;
                }
                const dateStr = formatDateStr(day);
                const isSelected = selectedDate === dateStr;
                const isPast = isPastDay(day);
                const isToday =
                viewYear === today.getFullYear() &&
                viewMonth === today.getMonth() &&
                day === today.getDate();
                return (
                  <button
                    key={dateStr}
                    disabled={isPast}
                    onClick={() => onSelectDate(dateStr)}
                    className={`relative h-10 rounded-xl text-sm font-semibold transition-all duration-150 ${isPast ? 'text-gray-200 cursor-not-allowed' : isSelected ? 'bg-coral text-white shadow-md' : isToday ? 'bg-coral/10 text-coral hover:bg-coral/20' : 'text-dark hover:bg-gray-100'}`}>

                    {day}
                  </button>);

              })}
            </div>
          </div>

          {/* Specialist */}
          <div className="mt-5 p-4 rounded-2xl bg-teal/[0.06] border border-teal/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-teal" />
              </div>
              <div>
                <div className="text-sm font-bold text-dark">
                  Мастер: Анна Иванова
                </div>
                <div className="text-xs text-gray-500">
                  Стилист-колорист • Стаж 8 лет
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time slots */}
        <div>
          <h3 className="text-lg font-bold text-dark mb-4">
            {selectedDate ? 'Доступное время' : 'Сначала выберите дату'}
          </h3>

          {selectedDate ?
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {TIME_SLOTS.map((slot) => {
              const isUnavailable = UNAVAILABLE_SLOTS.has(slot);
              const isSelected = selectedTime === slot;
              return (
                <motion.button
                  key={slot}
                  whileTap={
                  !isUnavailable ?
                  {
                    scale: 0.95
                  } :
                  undefined
                  }
                  disabled={isUnavailable}
                  onClick={() => onSelectTime(slot)}
                  className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-150 ${isUnavailable ? 'bg-gray-50 text-gray-300 cursor-not-allowed line-through' : isSelected ? 'bg-coral text-white shadow-md' : 'bg-white border border-gray-100 text-dark hover:border-coral/40 hover:shadow-sm'}`}>

                    {slot}
                  </motion.button>);

            })}
            </div> :

          <div className="flex items-center justify-center h-48 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">
                Выберите дату в календаре
              </p>
            </div>
          }
        </div>
      </div>
    </div>);

}