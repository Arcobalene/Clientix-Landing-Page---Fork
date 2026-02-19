import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboardIcon,
  CalendarIcon,
  UsersIcon,
  UserIcon,
  ScissorsIcon,
  BarChart3Icon,
  SettingsIcon,
  TrendingUpIcon,
  StarIcon } from
'lucide-react';
import { DashboardLayout } from '../components/DashboardLayout';
const navItems = [
{
  id: 'dashboard',
  label: 'Дашборд',
  href: '/salon',
  icon: <LayoutDashboardIcon className="w-5 h-5" />
},
{
  id: 'bookings',
  label: 'Записи',
  href: '/salon/bookings',
  icon: <CalendarIcon className="w-5 h-5" />
},
{
  id: 'masters',
  label: 'Мастера',
  href: '/salon/masters',
  icon: <UsersIcon className="w-5 h-5" />
},
{
  id: 'clients',
  label: 'Клиенты',
  href: '/salon/clients',
  icon: <UserIcon className="w-5 h-5" />
},
{
  id: 'services',
  label: 'Услуги',
  href: '/salon/services',
  icon: <ScissorsIcon className="w-5 h-5" />
},
{
  id: 'analytics',
  label: 'Аналитика',
  href: '/salon/analytics',
  icon: <BarChart3Icon className="w-5 h-5" />
},
{
  id: 'settings',
  label: 'Настройки',
  href: '/salon/settings',
  icon: <SettingsIcon className="w-5 h-5" />
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
export function SalonDashboard() {
  return (
    <DashboardLayout
      role="salon"
      navItems={navItems}
      userName="Beauty Lab"
      userRole="Владелец салона"
      greeting="Добро пожаловать, Beauty Lab">

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-6">

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">
              Записи сегодня
            </div>
            <div className="text-2xl font-black text-dark">24</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUpIcon className="w-3.5 h-3.5 text-teal" />
              <span className="text-xs font-bold text-teal">+12%</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">
              Выручка за день
            </div>
            <div className="text-2xl font-black text-dark">₽48 500</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUpIcon className="w-3.5 h-3.5 text-teal" />
              <span className="text-xs font-bold text-teal">+8%</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">
              Новые клиенты
            </div>
            <div className="text-2xl font-black text-dark">7</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs font-bold text-coral">+3 за неделю</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">
              Загрузка мастеров
            </div>
            <div className="text-2xl font-black text-dark">87%</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs font-bold text-teal">Отлично</span>
            </div>
          </div>
        </motion.div>

        {/* Schedule + Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Schedule */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm">

            <div className="px-6 py-4 border-b border-gray-50">
              <h2 className="text-base font-bold text-dark">
                Расписание на сегодня
              </h2>
            </div>
            <div className="divide-y divide-gray-50">
              {/* Row 1 */}
              <div className="flex items-center gap-4 px-6 py-3.5">
                <div className="text-sm font-bold text-coral w-12 flex-shrink-0">
                  10:00
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-dark">Анна М.</div>
                  <div className="text-xs text-gray-400">
                    Маникюр + покрытие
                  </div>
                </div>
                <div className="hidden sm:block text-xs text-gray-400 font-medium">
                  Мастер Елена
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal flex-shrink-0">
                  подтверждено
                </span>
              </div>
              {/* Row 2 */}
              <div className="flex items-center gap-4 px-6 py-3.5">
                <div className="text-sm font-bold text-teal w-12 flex-shrink-0">
                  11:30
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-dark">
                    Елена К.
                  </div>
                  <div className="text-xs text-gray-400">Стрижка + укладка</div>
                </div>
                <div className="hidden sm:block text-xs text-gray-400 font-medium">
                  Мастер Ольга
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal flex-shrink-0">
                  подтверждено
                </span>
              </div>
              {/* Row 3 */}
              <div className="flex items-center gap-4 px-6 py-3.5">
                <div className="text-sm font-bold text-coral w-12 flex-shrink-0">
                  13:00
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-dark">
                    Ольга С.
                  </div>
                  <div className="text-xs text-gray-400">Чистка лица</div>
                </div>
                <div className="hidden sm:block text-xs text-gray-400 font-medium">
                  Мастер Анна
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 flex-shrink-0">
                  ожидание
                </span>
              </div>
              {/* Row 4 */}
              <div className="flex items-center gap-4 px-6 py-3.5">
                <div className="text-sm font-bold text-teal w-12 flex-shrink-0">
                  14:30
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-dark">
                    Мария Д.
                  </div>
                  <div className="text-xs text-gray-400">Окрашивание</div>
                </div>
                <div className="hidden sm:block text-xs text-gray-400 font-medium">
                  Мастер Елена
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal flex-shrink-0">
                  подтверждено
                </span>
              </div>
              {/* Row 5 */}
              <div className="flex items-center gap-4 px-6 py-3.5">
                <div className="text-sm font-bold text-coral w-12 flex-shrink-0">
                  16:00
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-dark">
                    Светлана В.
                  </div>
                  <div className="text-xs text-gray-400">Массаж лица</div>
                </div>
                <div className="hidden sm:block text-xs text-gray-400 font-medium">
                  Мастер Ольга
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-coral/10 text-coral flex-shrink-0">
                  новая
                </span>
              </div>
            </div>
          </motion.div>

          {/* Popular services */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-base font-bold text-dark mb-5">
              Популярные услуги
            </h2>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-600 font-medium">Маникюр</span>
                  <span className="font-bold text-dark">34%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[34%] bg-coral rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-600 font-medium">Стрижка</span>
                  <span className="font-bold text-dark">28%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[28%] bg-teal rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-600 font-medium">
                    Косметология
                  </span>
                  <span className="font-bold text-dark">22%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[22%] bg-coral/70 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-600 font-medium">Массаж</span>
                  <span className="font-bold text-dark">16%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[16%] bg-teal/70 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
                Отличный маникюр! Мастер Елена — настоящий профессионал.
                Обязательно вернусь снова.
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex gap-0.5">
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <StarIcon className="w-4 h-4 text-gray-200 fill-gray-200" />
                </div>
                <span className="text-sm font-bold text-dark">Елена К.</span>
                <span className="text-xs text-gray-400">5 дней назад</span>
              </div>
              <p className="text-sm text-gray-500">
                Хорошая стрижка, приятная атмосфера. Немного пришлось подождать,
                но результат стоит того.
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
                Потрясающее окрашивание! Цвет получился именно таким, как я
                хотела. Спасибо!
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>);

}