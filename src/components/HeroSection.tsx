import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon, CalendarCheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-[-80px] w-64 h-64 rounded-full bg-coral/[0.07]" />
      <div className="absolute top-40 right-[-40px] w-48 h-48 rounded-3xl bg-teal/[0.08] rotate-12" />
      <div className="absolute bottom-20 left-[10%] w-32 h-32 rounded-full bg-teal/[0.06]" />
      <div className="absolute top-[60%] right-[15%] w-24 h-24 rounded-2xl bg-coral/[0.06] -rotate-6" />
      <div className="absolute top-10 right-[30%] w-16 h-16 rounded-full bg-coral/[0.1]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">

            <span className="text-gradient-coral">
              Клиенты записываются сами.
            </span>
            <br />
            <span className="text-dark">Вы — управляете.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">

            CRM-платформа для салонов красоты, косметологии и медицинских
            кабинетов. Онлайн-запись, управление клиентами и аналитика — в одном
            месте.
          </motion.p>

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
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-coral text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200">

              Начать бесплатно
            </a>
            <Link
              to="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-teal-dark hover:scale-[1.03] transition-all duration-200">

              <CalendarCheckIcon className="w-5 h-5" />
              Записаться в салон
            </Link>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-600 font-bold text-lg rounded-full hover:border-gray-300 hover:text-gray-800 transition-all duration-200">

              <PlayCircleIcon className="w-5 h-5" />
              Смотреть демо
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.7,
              delay: 0.45
            }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">

            <span className="flex items-center gap-1.5">
              <span className="text-teal font-bold">✓</span> Бесплатный период
              14 дней
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-teal font-bold">✓</span> Без привязки карты
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-teal font-bold">✓</span> Настройка за 5
              минут
            </span>
          </motion.div>
        </div>

        {/* Browser mockup */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-16 md:mt-20 max-w-5xl mx-auto">

          <div className="rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
            {/* Browser toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-4 py-1.5 text-xs text-gray-400 font-medium border border-gray-200 max-w-md mx-auto">
                  app.clientix.ru/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="flex min-h-[300px] md:min-h-[400px]">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-48 bg-dark p-4 gap-3">
                <div className="text-coral font-black text-lg mb-4">
                  Clientix
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white text-sm font-medium">
                  <div className="w-4 h-4 rounded bg-coral/80" />
                  Дашборд
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 text-sm">
                  <div className="w-4 h-4 rounded bg-gray-600" />
                  Записи
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 text-sm">
                  <div className="w-4 h-4 rounded bg-gray-600" />
                  Клиенты
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 text-sm">
                  <div className="w-4 h-4 rounded bg-gray-600" />
                  Аналитика
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 text-sm">
                  <div className="w-4 h-4 rounded bg-gray-600" />
                  Настройки
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 md:p-6 bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">
                      Записи сегодня
                    </div>
                    <div className="text-xl font-bold text-dark">24</div>
                    <div className="text-xs text-teal font-semibold">+12%</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">Выручка</div>
                    <div className="text-xl font-bold text-dark">₽48K</div>
                    <div className="text-xs text-teal font-semibold">+8%</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm hidden md:block">
                    <div className="text-xs text-gray-400 mb-1">
                      Новые клиенты
                    </div>
                    <div className="text-xl font-bold text-dark">7</div>
                    <div className="text-xs text-coral font-semibold">+3</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm hidden md:block">
                    <div className="text-xs text-gray-400 mb-1">Загрузка</div>
                    <div className="text-xl font-bold text-dark">87%</div>
                    <div className="text-xs text-teal font-semibold">
                      Отлично
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2 bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-sm font-bold text-dark mb-3">
                      Расписание на сегодня
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-coral/10 border-l-4 border-coral">
                        <div className="text-xs font-bold text-coral w-12">
                          10:00
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-dark">
                            Анна М.
                          </div>
                          <div className="text-xs text-gray-400">
                            Маникюр + покрытие
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-teal/10 border-l-4 border-teal">
                        <div className="text-xs font-bold text-teal w-12">
                          11:30
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-dark">
                            Елена К.
                          </div>
                          <div className="text-xs text-gray-400">
                            Стрижка + укладка
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-coral/10 border-l-4 border-coral">
                        <div className="text-xs font-bold text-coral w-12">
                          13:00
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-dark">
                            Ольга С.
                          </div>
                          <div className="text-xs text-gray-400">
                            Чистка лица
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm hidden md:block">
                    <div className="text-sm font-bold text-dark mb-3">
                      Популярные услуги
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Маникюр</span>
                          <span className="font-bold text-dark">34%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[34%] bg-coral rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Стрижка</span>
                          <span className="font-bold text-dark">28%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[28%] bg-teal rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Косметология</span>
                          <span className="font-bold text-dark">22%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[22%] bg-coral/70 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}