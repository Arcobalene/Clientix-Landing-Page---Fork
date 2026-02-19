import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  CalendarPlusIcon,
  HomeIcon,
  MapPinIcon,
  ClockIcon,
  UserIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
interface BookingSummary {
  salonName: string;
  services: string[];
  date: string;
  time: string;
  clientName: string;
  totalPrice: number;
}
interface ConfirmationProps {
  summary: BookingSummary;
}
export function Confirmation({ summary }: ConfirmationProps) {
  // Format date for display
  const formatDate = (dateStr: string) => {
    const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'];

    const [year, month, day] = dateStr.split('-').map(Number);
    return `${day} ${months[month - 1]} ${year}`;
  };
  return (
    <div className="text-center max-w-lg mx-auto">
      {/* Animated checkmark */}
      <motion.div
        initial={{
          scale: 0,
          rotate: -180
        }}
        animate={{
          scale: 1,
          rotate: 0
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.1
        }}
        className="mx-auto mb-6">

        <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center mx-auto">
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.4
            }}>

            <CheckCircle2Icon
              className="w-14 h-14 text-teal"
              strokeWidth={1.5} />

          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.3
        }}>

        <h2 className="text-2xl md:text-3xl font-black text-dark mb-2">
          Запись подтверждена!
        </h2>
        <p className="text-gray-500 mb-8">
          {summary.clientName}, мы ждём вас! Детали записи отправлены на ваш
          телефон.
        </p>
      </motion.div>

      {/* Summary card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.5
        }}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 text-left mb-8">

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPinIcon className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                Салон
              </div>
              <div className="text-dark font-bold">{summary.salonName}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ClockIcon className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                Дата и время
              </div>
              <div className="text-dark font-bold">
                {formatDate(summary.date)}, {summary.time}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <UserIcon className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                Услуги
              </div>
              <div className="text-dark font-bold">
                {summary.services.join(', ')}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
            <span className="text-gray-500 font-medium">Итого</span>
            <span className="text-xl font-black text-dark">
              {summary.totalPrice.toLocaleString()} ₽
            </span>
          </div>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.7
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3">

        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:bg-coral-dark transition-all">

          <HomeIcon className="w-5 h-5" />
          Вернуться на главную
        </Link>
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-teal text-teal font-bold text-base rounded-full hover:bg-teal hover:text-white transition-all">
          <CalendarPlusIcon className="w-5 h-5" />
          Добавить в календарь
        </button>
      </motion.div>
    </div>);

}