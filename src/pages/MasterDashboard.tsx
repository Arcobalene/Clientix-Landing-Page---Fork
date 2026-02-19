import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  UsersIcon,
  BarChart3Icon,
  StarIcon,
  UserIcon,
  TrendingUpIcon,
  CoffeeIcon } from
'lucide-react';
import { DashboardLayout } from '../components/DashboardLayout';
const navItems = [
{
  id: 'schedule',
  label: 'Расписание',
  href: '/master',
  icon: <CalendarIcon className="w-5 h-5" />
},
{
  id: 'clients',
  label: 'Мои клиенты',
  href: '/master/clients',
  icon: <UsersIcon className="w-5 h-5" />
},
{
  id: 'stats',
  label: 'Статистика',
  href: '/master/stats',
  icon: <BarChart3Icon className="w-5 h-5" />
},
{
  id: 'reviews',
  label: 'Отзывы',
  href: '/master/reviews',
  icon: <StarIcon className="w-5 h-5" />
},
{
  id: 'profile',
  label: 'Профиль',
  href: '/master/profile',
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
export function MasterDashboard() {
  return (
    <DashboardLayout
      role="master"
      navItems={navItems}
      userName="Елена Иванова"
      userRole="Мастер маникюра"
      greeting="Добрый день, Елена!">

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-6">

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">
              Записей сегодня
            </div>
            <div className="text-2xl font-black text-dark">6</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUpIcon className="w-3.5 h-3.5 text-coral" />
              <span className="text-xs font-bold text-coral">
                Полная загрузка
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">
              Заработок за месяц
            </div>
            <div className="text-2xl font-black text-dark">₽124 500</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUpIcon className="w-3.5 h-3.5 text-teal" />
              <span className="text-xs font-bold text-teal">
                +15% к прошлому
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">
              Рейтинг
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-dark">4.9</span>
              <StarIcon className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-xs font-bold text-coral mt-1">128 отзывов</div>
          </div>
        </motion.div>

        {/* Today's schedule */}
        <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-base font-bold text-dark">
              Расписание на сегодня
            </h2>
          </div>
          <div className="p-4 sm:p-6 space-y-3">
            {/* 09:00 */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-teal/[0.04] border-l-4 border-teal">
              <div className="w-14 text-center flex-shrink-0">
                <div className="text-sm font-black text-teal">09:00</div>
                <div className="text-[10px] text-gray-400 font-medium">
                  90 мин
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-dark">Анна М.</div>
                <div className="text-xs text-gray-500">
                  Маникюр + покрытие гель-лак
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal flex-shrink-0 hidden sm:inline-flex">
                подтверждено
              </span>
            </div>

            {/* 10:30 Free */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border-l-4 border-gray-200">
              <div className="w-14 text-center flex-shrink-0">
                <div className="text-sm font-black text-gray-400">10:30</div>
                <div className="text-[10px] text-gray-300 font-medium">
                  30 мин
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-400 italic">
                  Свободно
                </div>
              </div>
            </div>

            {/* 11:00 */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-teal/[0.04] border-l-4 border-teal">
              <div className="w-14 text-center flex-shrink-0">
                <div className="text-sm font-black text-teal">11:00</div>
                <div className="text-[10px] text-gray-400 font-medium">
                  60 мин
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-dark">Елена К.</div>
                <div className="text-xs text-gray-500">Педикюр</div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal flex-shrink-0 hidden sm:inline-flex">
                подтверждено
              </span>
            </div>

            {/* 12:00 Lunch */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/50 border-l-4 border-amber-300">
              <div className="w-14 text-center flex-shrink-0">
                <div className="text-sm font-black text-amber-600">12:00</div>
                <div className="text-[10px] text-gray-400 font-medium">
                  60 мин
                </div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <CoffeeIcon className="w-4 h-4 text-amber-500" />
                <div className="text-sm font-semibold text-amber-700">Обед</div>
              </div>
            </div>

            {/* 13:00 */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-coral/[0.04] border-l-4 border-coral">
              <div className="w-14 text-center flex-shrink-0">
                <div className="text-sm font-black text-coral">13:00</div>
                <div className="text-[10px] text-gray-400 font-medium">
                  60 мин
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-dark">Ольга С.</div>
                <div className="text-xs text-gray-500">
                  Маникюр классический
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 flex-shrink-0 hidden sm:inline-flex">
                ожидание
              </span>
            </div>

            {/* 14:00 */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-teal/[0.04] border-l-4 border-teal">
              <div className="w-14 text-center flex-shrink-0">
                <div className="text-sm font-black text-teal">14:00</div>
                <div className="text-[10px] text-gray-400 font-medium">
                  45 мин
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-dark">Мария Д.</div>
                <div className="text-xs text-gray-500">Покрытие гель-лак</div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal flex-shrink-0 hidden sm:inline-flex">
                подтверждено
              </span>
            </div>
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-base font-bold text-dark">Последние отзывы</h2>
          </div>
          <div className="divide-y divide-gray-50">
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex gap-0.5">
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-sm font-bold text-dark">Анна М.</span>
                <span className="text-xs text-gray-400">2 дня назад</span>
              </div>
              <p className="text-sm text-gray-500">
                Елена — лучший мастер! Маникюр держится уже 3 недели, всё
                идеально. Рекомендую всем!
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex gap-0.5">
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-sm font-bold text-dark">Мария Д.</span>
                <span className="text-xs text-gray-400">1 неделю назад</span>
              </div>
              <p className="text-sm text-gray-500">
                Очень аккуратная работа и приятное общение. Всегда записываюсь
                только к Елене.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>);

}