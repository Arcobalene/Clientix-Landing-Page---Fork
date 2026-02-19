import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  HeartIcon,
  ClockIcon,
  UserIcon,
  CalendarPlusIcon,
  MapPinIcon,
  StarIcon,
  XCircleIcon } from
'lucide-react';
import { DashboardLayout } from '../components/DashboardLayout';
const navItems = [
{
  id: 'bookings',
  label: 'Мои записи',
  href: '/client',
  icon: <CalendarIcon className="w-5 h-5" />
},
{
  id: 'favorites',
  label: 'Избранные салоны',
  href: '/client/favorites',
  icon: <HeartIcon className="w-5 h-5" />
},
{
  id: 'history',
  label: 'История визитов',
  href: '/client/history',
  icon: <ClockIcon className="w-5 h-5" />
},
{
  id: 'profile',
  label: 'Профиль',
  href: '/client/profile',
  icon: <UserIcon className="w-5 h-5" />
}];

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function ClientDashboard() {
  return (
    <DashboardLayout
      role="client"
      navItems={navItems}
      userName="Анна Михайлова"
      userRole="Клиент"
      greeting="Здравствуйте, Анна!">

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-6">

        {/* Quick action */}
        <motion.div variants={fadeUp}>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-coral text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">

            <CalendarPlusIcon className="w-4 h-4" />
            Записаться в салон
          </Link>
        </motion.div>

        {/* Upcoming bookings */}
        <motion.div variants={fadeUp}>
          <h2 className="text-base font-bold text-dark mb-4">
            Ближайшие записи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Booking 1 */}
            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-coral">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-lg font-black text-dark">
                    25 февраля, 14:00
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Beauty Lab
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal">
                  подтверждено
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                Маникюр + покрытие гель-лак
              </div>
              <div className="text-xs text-gray-400 mb-3">Мастер: Елена И.</div>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-coral hover:text-coral-dark transition-colors">
                <XCircleIcon className="w-3.5 h-3.5" />
                Отменить запись
              </button>
            </div>

            {/* Booking 2 */}
            <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-amber-400">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-lg font-black text-dark">
                    2 марта, 11:00
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Гламур
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600">
                  ожидание
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                Стрижка + укладка
              </div>
              <div className="text-xs text-gray-400 mb-3">Мастер: Ольга К.</div>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-coral hover:text-coral-dark transition-colors">
                <XCircleIcon className="w-3.5 h-3.5" />
                Отменить запись
              </button>
            </div>
          </div>
        </motion.div>

        {/* Visit history */}
        <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-base font-bold text-dark">История визитов</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  <th className="px-6 py-3">Дата</th>
                  <th className="px-6 py-3">Салон</th>
                  <th className="px-6 py-3 hidden sm:table-cell">Услуга</th>
                  <th className="px-6 py-3 hidden md:table-cell">Стоимость</th>
                  <th className="px-6 py-3">Оценка</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="px-6 py-3.5 font-medium text-dark">15 фев</td>
                  <td className="px-6 py-3.5 text-gray-600">Beauty Lab</td>
                  <td className="px-6 py-3.5 text-gray-600 hidden sm:table-cell">
                    Маникюр
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-dark hidden md:table-cell">
                    2 200 ₽
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex gap-0.5">
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-dark">3 фев</td>
                  <td className="px-6 py-3.5 text-gray-600">Эстетика</td>
                  <td className="px-6 py-3.5 text-gray-600 hidden sm:table-cell">
                    Чистка лица
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-dark hidden md:table-cell">
                    3 500 ₽
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex gap-0.5">
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-gray-200 fill-gray-200" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-dark">20 янв</td>
                  <td className="px-6 py-3.5 text-gray-600">Гламур</td>
                  <td className="px-6 py-3.5 text-gray-600 hidden sm:table-cell">
                    Стрижка
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-dark hidden md:table-cell">
                    2 500 ₽
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex gap-0.5">
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-dark">5 янв</td>
                  <td className="px-6 py-3.5 text-gray-600">Beauty Lab</td>
                  <td className="px-6 py-3.5 text-gray-600 hidden sm:table-cell">
                    Окрашивание
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-dark hidden md:table-cell">
                    5 000 ₽
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex gap-0.5">
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Favorite salons */}
        <motion.div variants={fadeUp}>
          <h2 className="text-base font-bold text-dark mb-4">
            Избранные салоны
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral/80 to-coral-light flex items-center justify-center flex-shrink-0">
                <span className="text-white/50 text-xl font-black">BL</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-dark">Beauty Lab</div>
                <div className="flex items-center gap-1 mb-1">
                  <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-dark">5.0</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPinIcon className="w-3 h-3" />
                  ул. Тверская, 15
                </div>
              </div>
              <HeartIcon className="w-5 h-5 text-coral fill-coral flex-shrink-0 ml-auto" />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
                <span className="text-white/50 text-xl font-black">Г</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-dark">Гламур</div>
                <div className="flex items-center gap-1 mb-1">
                  <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-dark">4.7</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPinIcon className="w-3 h-3" />
                  Невский пр., 42
                </div>
              </div>
              <HeartIcon className="w-5 h-5 text-coral fill-coral flex-shrink-0 ml-auto" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>);

}