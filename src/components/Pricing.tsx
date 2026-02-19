import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-white py-20 md:py-28 overflow-hidden">

      <div className="absolute top-20 left-[-40px] w-48 h-48 rounded-full bg-coral/[0.05]" />
      <div className="absolute bottom-10 right-[-30px] w-36 h-36 rounded-3xl bg-teal/[0.05] rotate-12" />

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
            Простые и прозрачные тарифы
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Без скрытых платежей. Отмена в любой момент.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Старт tier */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.5
            }}
            className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-100 shadow-sm hover:shadow-lg transition-shadow">

            <h3 className="text-2xl font-bold text-dark mb-2">Старт</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-dark">1 490</span>
              <span className="text-lg text-gray-400 font-medium">₽/мес</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-teal" />
                </div>
                <span className="text-gray-700">До 2 мастеров</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-teal" />
                </div>
                <span className="text-gray-700">Онлайн-запись</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-teal" />
                </div>
                <span className="text-gray-700">SMS-напоминания</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-teal" />
                </div>
                <span className="text-gray-700">Базовая аналитика</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-teal" />
                </div>
                <span className="text-gray-700">Email-поддержка</span>
              </li>
            </ul>

            <a
              href="#"
              className="block w-full text-center px-8 py-4 bg-teal text-white font-bold text-lg rounded-full hover:bg-teal-dark transition-colors">

              Начать бесплатно
            </a>
          </motion.div>

          {/* Про tier (popular) */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-coral ring-2 ring-coral/30 shadow-coral-glow hover:shadow-xl transition-shadow">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-block px-5 py-1.5 bg-coral text-white text-sm font-bold rounded-full shadow-md">
                Популярный
              </span>
            </div>

            <h3 className="text-2xl font-bold text-dark mb-2">Про</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-dark">3 490</span>
              <span className="text-lg text-gray-400 font-medium">₽/мес</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-coral" />
                </div>
                <span className="text-gray-700 font-medium">
                  Безлимит мастеров
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-coral" />
                </div>
                <span className="text-gray-700">Всё из тарифа Старт</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-coral" />
                </div>
                <span className="text-gray-700">CRM и база клиентов</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-coral" />
                </div>
                <span className="text-gray-700">Расширенная аналитика</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-coral" />
                </div>
                <span className="text-gray-700">Программа лояльности</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-coral" />
                </div>
                <span className="text-gray-700">Приоритетная поддержка</span>
              </li>
            </ul>

            <a
              href="#"
              className="block w-full text-center px-8 py-4 bg-gradient-coral text-white font-bold text-lg rounded-full hover:shadow-lg transition-all">

              Начать бесплатно
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}