import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboardIcon,
  UsersIcon,
  CreditCardIcon,
  SendIcon,
  SettingsIcon,
  SearchIcon,
  ShieldBanIcon,
  LogInIcon,
  Trash2Icon,
  CheckCircleIcon,
  XCircleIcon,
  AlertTriangleIcon,
  BotIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
  TrendingUpIcon,
  BuildingIcon,
  UserIcon,
  ScissorsIcon,
  DollarSignIcon,
  SaveIcon,
  EyeIcon,
  CopyIcon } from
'lucide-react';
import { DashboardLayout } from '../components/DashboardLayout';
const navItems = [
{
  id: 'dashboard',
  label: 'Дашборд',
  href: '/admin',
  icon: <LayoutDashboardIcon className="w-5 h-5" />
},
{
  id: 'users',
  label: 'Пользователи',
  href: '/admin/users',
  icon: <UsersIcon className="w-5 h-5" />
},
{
  id: 'billing',
  label: 'Биллинг',
  href: '/admin/billing',
  icon: <CreditCardIcon className="w-5 h-5" />
},
{
  id: 'telegram',
  label: 'Telegram бот',
  href: '/admin/telegram',
  icon: <SendIcon className="w-5 h-5" />
},
{
  id: 'settings',
  label: 'Настройки',
  href: '/admin/settings',
  icon: <SettingsIcon className="w-5 h-5" />
}];

type AdminTab = 'overview' | 'users' | 'billing' | 'telegram';
interface User {
  id: number;
  name: string;
  email: string;
  role: 'salon' | 'client' | 'master';
  status: 'active' | 'blocked';
  registered: string;
  lastActive: string;
}
const mockUsers: User[] = [
{
  id: 1,
  name: 'Beauty Lab',
  email: 'info@beautylab.ru',
  role: 'salon',
  status: 'active',
  registered: '12 янв 2025',
  lastActive: '2 мин назад'
},
{
  id: 2,
  name: 'Анна Михайлова',
  email: 'anna@mail.ru',
  role: 'client',
  status: 'active',
  registered: '15 янв 2025',
  lastActive: '1 час назад'
},
{
  id: 3,
  name: 'Елена Иванова',
  email: 'elena@gmail.com',
  role: 'master',
  status: 'active',
  registered: '20 янв 2025',
  lastActive: '30 мин назад'
},
{
  id: 4,
  name: 'Гламур',
  email: 'glamour@salon.ru',
  role: 'salon',
  status: 'active',
  registered: '5 фев 2025',
  lastActive: '5 мин назад'
},
{
  id: 5,
  name: 'Мария Петрова',
  email: 'maria.p@yandex.ru',
  role: 'client',
  status: 'blocked',
  registered: '10 фев 2025',
  lastActive: '3 дня назад'
},
{
  id: 6,
  name: 'Ольга Козлова',
  email: 'olga.k@mail.ru',
  role: 'master',
  status: 'active',
  registered: '18 фев 2025',
  lastActive: '15 мин назад'
},
{
  id: 7,
  name: 'Эстетика',
  email: 'estetika@clinic.ru',
  role: 'salon',
  status: 'active',
  registered: '22 фев 2025',
  lastActive: '1 час назад'
},
{
  id: 8,
  name: 'Светлана Волкова',
  email: 'sveta.v@gmail.com',
  role: 'client',
  status: 'active',
  registered: '25 фев 2025',
  lastActive: '10 мин назад'
}];

const roleIcons: Record<string, React.ReactNode> = {
  salon: <BuildingIcon className="w-3.5 h-3.5" />,
  client: <UserIcon className="w-3.5 h-3.5" />,
  master: <ScissorsIcon className="w-3.5 h-3.5" />
};
const roleColors: Record<string, string> = {
  salon: 'bg-coral/10 text-coral',
  client: 'bg-teal/10 text-teal',
  master: 'bg-amber-50 text-amber-700'
};
const roleLabels: Record<string, string> = {
  salon: 'Салон',
  client: 'Клиент',
  master: 'Мастер'
};
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
export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(
    null
  );
  // Telegram bot state
  const [botToken, setBotToken] = useState('6847291038:AAH_example_token_here');
  const [webhookUrl, setWebhookUrl] = useState(
    'https://api.clientix.ru/webhook/telegram'
  );
  const [botNotifications, setBotNotifications] = useState({
    newBooking: true,
    cancelBooking: true,
    newClient: true,
    dailyReport: false,
    paymentReceived: true
  });
  const [showToken, setShowToken] = useState(false);
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });
  const toggleBlock = (id: number) => {
    setUsers(
      users.map((u) =>
      u.id === id ?
      {
        ...u,
        status: u.status === 'active' ? 'blocked' : 'active'
      } as User :
      u
      )
    );
  };
  const deleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
    setShowDeleteConfirm(null);
  };
  const tabs: {
    id: AdminTab;
    label: string;
    icon: React.ReactNode;
  }[] = [
  {
    id: 'overview',
    label: 'Обзор',
    icon: <LayoutDashboardIcon className="w-4 h-4" />
  },
  {
    id: 'users',
    label: 'Пользователи',
    icon: <UsersIcon className="w-4 h-4" />
  },
  {
    id: 'billing',
    label: 'Биллинг',
    icon: <CreditCardIcon className="w-4 h-4" />
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: <SendIcon className="w-4 h-4" />
  }];

  return (
    <DashboardLayout
      role="admin"
      navItems={navItems}
      userName="Администратор"
      userRole="Суперадмин"
      greeting="Панель администратора">

      {/* Tab navigation */}
      <div className="flex gap-1 p-1 bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-x-auto">
        {tabs.map((tab) =>
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>

            {activeTab === tab.id &&
          <motion.div
            layoutId="admin-tab"
            className="absolute inset-0 bg-dark rounded-lg"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30
            }} />

          }
            <span className="relative z-10">{tab.icon}</span>
            <span className="relative z-10">{tab.label}</span>
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' &&
        <motion.div
          key="overview"
          variants={stagger}
          initial="hidden"
          animate="show"
          exit={{
            opacity: 0
          }}
          className="space-y-6">

            <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Всего пользователей
                </div>
                <div className="text-2xl font-black text-dark">2 847</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUpIcon className="w-3.5 h-3.5 text-teal" />
                  <span className="text-xs font-bold text-teal">
                    +124 за месяц
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Активных салонов
                </div>
                <div className="text-2xl font-black text-dark">342</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUpIcon className="w-3.5 h-3.5 text-teal" />
                  <span className="text-xs font-bold text-teal">
                    +18 за месяц
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Выручка MRR
                </div>
                <div className="text-2xl font-black text-dark">₽1.2M</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUpIcon className="w-3.5 h-3.5 text-teal" />
                  <span className="text-xs font-bold text-teal">+12%</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Записей сегодня
                </div>
                <div className="text-2xl font-black text-dark">1 456</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUpIcon className="w-3.5 h-3.5 text-coral" />
                  <span className="text-xs font-bold text-coral">+8%</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm">

                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="text-base font-bold text-dark">
                    Последние регистрации
                  </h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {mockUsers.slice(0, 5).map((user) =>
                <div
                  key={user.id}
                  className="flex items-center gap-3 px-6 py-3">

                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-dark truncate">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${roleColors[user.role]}`}>

                        {roleIcons[user.role]}
                        {roleLabels[user.role]}
                      </span>
                    </div>
                )}
                </div>
              </motion.div>

              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm">

                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="text-base font-bold text-dark">
                    Статистика по ролям
                  </h2>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium flex items-center gap-2">
                        <BuildingIcon className="w-4 h-4 text-coral" /> Салоны
                      </span>
                      <span className="font-bold text-dark">342</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[34%] bg-coral rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium flex items-center gap-2">
                        <UserIcon className="w-4 h-4 text-teal" /> Клиенты
                      </span>
                      <span className="font-bold text-dark">1 892</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[66%] bg-teal rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium flex items-center gap-2">
                        <ScissorsIcon className="w-4 h-4 text-amber-600" />{' '}
                        Мастера
                      </span>
                      <span className="font-bold text-dark">613</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[22%] bg-amber-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        }

        {/* USERS TAB */}
        {activeTab === 'users' &&
        <motion.div
          key="users"
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="space-y-4">

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по имени или email..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-gray-100 bg-white text-sm font-medium text-dark placeholder-gray-300 focus:outline-none focus:border-teal transition-colors" />

              </div>
              <div className="flex gap-2">
                {['all', 'salon', 'client', 'master'].map((r) =>
              <button
                key={r}
                onClick={() => setRoleFilter(r)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${roleFilter === r ? 'bg-dark text-white shadow-sm' : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-200'}`}>

                    {r === 'all' ? 'Все' : roleLabels[r]}
                  </button>
              )}
              </div>
            </div>

            {/* Users table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-gray-400 font-semibold uppercase tracking-wider border-b border-gray-50">
                      <th className="px-6 py-3">Пользователь</th>
                      <th className="px-6 py-3 hidden md:table-cell">Роль</th>
                      <th className="px-6 py-3 hidden lg:table-cell">
                        Регистрация
                      </th>
                      <th className="px-6 py-3 hidden sm:table-cell">Статус</th>
                      <th className="px-6 py-3 text-right">Действия</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredUsers.map((user) =>
                  <tr key={user.id} className="group">
                        <td className="px-6 py-3.5">
                          <div className="flex items-center gap-3">
                            <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${user.status === 'blocked' ? 'bg-red-50 text-red-400' : 'bg-gray-100 text-gray-500'}`}>

                              {user.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <div
                            className={`text-sm font-semibold truncate ${user.status === 'blocked' ? 'text-gray-400 line-through' : 'text-dark'}`}>

                                {user.name}
                              </div>
                              <div className="text-xs text-gray-400 truncate">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-3.5 hidden md:table-cell">
                          <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${roleColors[user.role]}`}>

                            {roleIcons[user.role]}
                            {roleLabels[user.role]}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 hidden lg:table-cell">
                          <div className="text-xs text-gray-500">
                            {user.registered}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {user.lastActive}
                          </div>
                        </td>
                        <td className="px-6 py-3.5 hidden sm:table-cell">
                          {user.status === 'active' ?
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-teal">
                              <CheckCircleIcon className="w-3.5 h-3.5" />{' '}
                              Активен
                            </span> :

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-red-500">
                              <XCircleIcon className="w-3.5 h-3.5" />{' '}
                              Заблокирован
                            </span>
                      }
                        </td>
                        <td className="px-6 py-3.5">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Login as user */}
                            <button
                          title="Войти под пользователем"
                          className="p-2 rounded-lg text-gray-400 hover:text-teal hover:bg-teal/10 transition-all">

                              <LogInIcon className="w-4 h-4" />
                            </button>
                            {/* Block/Unblock */}
                            <button
                          onClick={() => toggleBlock(user.id)}
                          title={
                          user.status === 'active' ?
                          'Заблокировать' :
                          'Разблокировать'
                          }
                          className={`p-2 rounded-lg transition-all ${user.status === 'active' ? 'text-gray-400 hover:text-amber-600 hover:bg-amber-50' : 'text-amber-600 bg-amber-50 hover:bg-amber-100'}`}>

                              <ShieldBanIcon className="w-4 h-4" />
                            </button>
                            {/* Delete */}
                            <div className="relative">
                              <button
                            onClick={() =>
                            setShowDeleteConfirm(
                              showDeleteConfirm === user.id ?
                              null :
                              user.id
                            )
                            }
                            title="Удалить"
                            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all">

                                <Trash2Icon className="w-4 h-4" />
                              </button>
                              <AnimatePresence>
                                {showDeleteConfirm === user.id &&
                            <motion.div
                              initial={{
                                opacity: 0,
                                scale: 0.9
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.9
                              }}
                              className="absolute right-0 top-full mt-1 z-20 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-56">

                                    <div className="flex items-center gap-2 mb-2">
                                      <AlertTriangleIcon className="w-4 h-4 text-red-500" />
                                      <span className="text-sm font-bold text-dark">
                                        Удалить?
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-3">
                                      Это действие нельзя отменить. Все данные
                                      пользователя будут удалены.
                                    </p>
                                    <div className="flex gap-2">
                                      <button
                                  onClick={() => deleteUser(user.id)}
                                  className="flex-1 px-3 py-2 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors">

                                        Удалить
                                      </button>
                                      <button
                                  onClick={() =>
                                  setShowDeleteConfirm(null)
                                  }
                                  className="flex-1 px-3 py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">

                                        Отмена
                                      </button>
                                    </div>
                                  </motion.div>
                            }
                              </AnimatePresence>
                            </div>
                          </div>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
              {filteredUsers.length === 0 &&
            <div className="py-12 text-center">
                  <div className="text-gray-300 mb-2">
                    <SearchIcon className="w-8 h-8 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Пользователи не найдены
                  </div>
                </div>
            }
            </div>
          </motion.div>
        }

        {/* BILLING TAB */}
        {activeTab === 'billing' &&
        <motion.div
          key="billing"
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="space-y-6">

            {/* Revenue stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  MRR
                </div>
                <div className="text-2xl font-black text-dark">₽1 248 000</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUpIcon className="w-3.5 h-3.5 text-teal" />
                  <span className="text-xs font-bold text-teal">
                    +12% к прошлому месяцу
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Платящих клиентов
                </div>
                <div className="text-2xl font-black text-dark">287</div>
                <div className="text-xs font-bold text-teal mt-1">
                  84% конверсия
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Средний чек
                </div>
                <div className="text-2xl font-black text-dark">₽4 348</div>
                <div className="text-xs font-bold text-coral mt-1">ARPU</div>
              </div>
            </div>

            {/* Plans */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="px-6 py-4 border-b border-gray-50">
                <h2 className="text-base font-bold text-dark">
                  Тарифные планы
                </h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border-2 border-gray-100 p-5">
                  <div className="text-sm font-bold text-dark mb-1">Старт</div>
                  <div className="text-2xl font-black text-dark mb-2">
                    ₽1 490
                    <span className="text-sm text-gray-400 font-medium">
                      /мес
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    До 2 мастеров
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal" />
                    <span className="text-xs font-bold text-dark">
                      142 подписчика
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-coral p-5 ring-2 ring-coral/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-dark">Про</span>
                    <span className="px-2 py-0.5 bg-coral/10 text-coral text-[10px] font-bold rounded-full">
                      Популярный
                    </span>
                  </div>
                  <div className="text-2xl font-black text-dark mb-2">
                    ₽3 490
                    <span className="text-sm text-gray-400 font-medium">
                      /мес
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    Безлимит мастеров
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-coral" />
                    <span className="text-xs font-bold text-dark">
                      145 подписчиков
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-gray-100 p-5">
                  <div className="text-sm font-bold text-dark mb-1">
                    Пробный
                  </div>
                  <div className="text-2xl font-black text-dark mb-2">
                    ₽0
                    <span className="text-sm text-gray-400 font-medium">
                      /14 дней
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    Полный доступ
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-bold text-dark">
                      55 пробных
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment history */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="px-6 py-4 border-b border-gray-50">
                <h2 className="text-base font-bold text-dark">
                  Последние платежи
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-gray-400 font-semibold uppercase tracking-wider border-b border-gray-50">
                      <th className="px-6 py-3">Клиент</th>
                      <th className="px-6 py-3 hidden sm:table-cell">Тариф</th>
                      <th className="px-6 py-3">Сумма</th>
                      <th className="px-6 py-3 hidden md:table-cell">Дата</th>
                      <th className="px-6 py-3">Статус</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="px-6 py-3.5 font-semibold text-dark">
                        Beauty Lab
                      </td>
                      <td className="px-6 py-3.5 text-gray-500 hidden sm:table-cell">
                        Про
                      </td>
                      <td className="px-6 py-3.5 font-bold text-dark">
                        ₽3 490
                      </td>
                      <td className="px-6 py-3.5 text-gray-400 hidden md:table-cell">
                        19 фев 2026
                      </td>
                      <td className="px-6 py-3.5">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal">
                          оплачено
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-semibold text-dark">
                        Гламур
                      </td>
                      <td className="px-6 py-3.5 text-gray-500 hidden sm:table-cell">
                        Про
                      </td>
                      <td className="px-6 py-3.5 font-bold text-dark">
                        ₽3 490
                      </td>
                      <td className="px-6 py-3.5 text-gray-400 hidden md:table-cell">
                        18 фев 2026
                      </td>
                      <td className="px-6 py-3.5">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal">
                          оплачено
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-semibold text-dark">
                        Эстетика
                      </td>
                      <td className="px-6 py-3.5 text-gray-500 hidden sm:table-cell">
                        Старт
                      </td>
                      <td className="px-6 py-3.5 font-bold text-dark">
                        ₽1 490
                      </td>
                      <td className="px-6 py-3.5 text-gray-400 hidden md:table-cell">
                        17 фев 2026
                      </td>
                      <td className="px-6 py-3.5">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal">
                          оплачено
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-semibold text-dark">
                        Прикосновение
                      </td>
                      <td className="px-6 py-3.5 text-gray-500 hidden sm:table-cell">
                        Про
                      </td>
                      <td className="px-6 py-3.5 font-bold text-dark">
                        ₽3 490
                      </td>
                      <td className="px-6 py-3.5 text-gray-400 hidden md:table-cell">
                        15 фев 2026
                      </td>
                      <td className="px-6 py-3.5">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-coral/10 text-coral">
                          просрочено
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        }

        {/* TELEGRAM TAB */}
        {activeTab === 'telegram' &&
        <motion.div
          key="telegram"
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="space-y-6">

            {/* Bot status */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#229ED9]/10 flex items-center justify-center">
                  <BotIcon className="w-7 h-7 text-[#229ED9]" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-dark">Clientix Bot</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="text-xs font-bold text-teal">Активен</span>
                    <span className="text-xs text-gray-400">
                      • @clientix_bot
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {/* Bot Token */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Токен бота
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                      type={showToken ? 'text' : 'password'}
                      value={botToken}
                      onChange={(e) => setBotToken(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white text-sm font-mono text-dark placeholder-gray-300 focus:outline-none focus:border-teal transition-colors pr-20" />

                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                        <button
                        onClick={() => setShowToken(!showToken)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all"
                        title={showToken ? 'Скрыть' : 'Показать'}>

                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button
                        onClick={() =>
                        navigator.clipboard?.writeText(botToken)
                        }
                        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all"
                        title="Копировать">

                          <CopyIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Webhook URL */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Webhook URL
                  </label>
                  <input
                  type="text"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white text-sm font-mono text-dark placeholder-gray-300 focus:outline-none focus:border-teal transition-colors" />

                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="px-6 py-4 border-b border-gray-50">
                <h2 className="text-base font-bold text-dark">
                  Уведомления бота
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Настройте, какие события отправлять через Telegram
                </p>
              </div>
              <div className="divide-y divide-gray-50">
                {[
              {
                key: 'newBooking' as const,
                label: 'Новая запись',
                desc: 'Уведомление при создании новой записи клиентом'
              },
              {
                key: 'cancelBooking' as const,
                label: 'Отмена записи',
                desc: 'Уведомление при отмене записи'
              },
              {
                key: 'newClient' as const,
                label: 'Новый клиент',
                desc: 'Уведомление при регистрации нового клиента'
              },
              {
                key: 'dailyReport' as const,
                label: 'Ежедневный отчёт',
                desc: 'Сводка за день в 21:00'
              },
              {
                key: 'paymentReceived' as const,
                label: 'Получен платёж',
                desc: 'Уведомление о поступлении оплаты'
              }].
              map((item) =>
              <div
                key={item.key}
                className="flex items-center justify-between px-6 py-4">

                    <div>
                      <div className="text-sm font-semibold text-dark">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </div>
                    <button
                  onClick={() =>
                  setBotNotifications({
                    ...botNotifications,
                    [item.key]: !botNotifications[item.key]
                  })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${botNotifications[item.key] ? 'bg-teal' : 'bg-gray-200'}`}
                  aria-label={`Переключить ${item.label}`}>

                      <motion.div
                    className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                    animate={{
                      left: botNotifications[item.key] ? '24px' : '4px'
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25
                    }} />

                    </button>
                  </div>
              )}
              </div>
            </div>

            {/* Save button */}
            <div className="flex justify-end">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-coral text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all">
                <SaveIcon className="w-4 h-4" />
                Сохранить настройки
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </DashboardLayout>);

}