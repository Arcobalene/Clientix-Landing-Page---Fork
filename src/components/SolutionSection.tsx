import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  BellIcon,
  UsersIcon,
  BarChart3Icon,
  ClockIcon,
  GiftIcon } from
'lucide-react';
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const features: Feature[] = [
{
  icon: <CalendarIcon className="w-7 h-7" />,
  title: 'Онлайн-запись 24/7',
  description:
  'Клиенты записываются сами через виджет на вашем сайте или соцсетях'
},
{
  icon: <BellIcon className="w-7 h-7" />,
  title: 'Умные напоминания',
  description: 'Автоматические SMS и push-уведомления снижают неявки на 40%'
},
{
  icon: <UsersIcon className="w-7 h-7" />,
  title: 'CRM и база клиентов',
  description:
  'Полная история визитов, предпочтения и заметки по каждому клиенту'
},
{
  icon: <BarChart3Icon className="w-7 h-7" />,
  title: 'Аналитика и отчёты',
  description:
  'Выручка, загрузка мастеров, популярные услуги — всё в реальном времени'
},
{
  icon: <ClockIcon className="w-7 h-7" />,
  title: 'Управление расписанием',
  description:
  'Гибкое расписание для каждого мастера с учётом перерывов и выходных'
},
{
  icon: <GiftIcon className="w-7 h-7" />,
  title: 'Программа лояльности',
  description: 'Бонусы, скидки и акции для удержания и возврата клиентов'
}];

export function SolutionSection() {
  return (
    <section
      id="features"
      className="relative bg-white py-20 md:py-28 overflow-hidden">

      {/* Decorative shapes */}
      <div className="absolute top-20 right-[-60px] w-48 h-48 rounded-full bg-teal/[0.05]" />
      <div className="absolute bottom-10 left-[-30px] w-36 h-36 rounded-3xl bg-coral/[0.05] rotate-6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-black text-dark mb-4">
            Всё, что нужно для роста вашего бизнеса
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Мощные инструменты, простой интерфейс
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.08
            }}
            whileHover={{
              scale: 1.03,
              y: -4
            }}
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default">

              <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}