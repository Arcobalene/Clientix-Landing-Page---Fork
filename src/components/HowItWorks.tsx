import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[#F8FAFC] py-20 md:py-28 overflow-hidden">

      <div className="absolute top-0 left-[20%] w-32 h-32 rounded-full bg-coral/[0.05]" />
      <div className="absolute bottom-10 right-[10%] w-40 h-40 rounded-3xl bg-teal/[0.05] -rotate-12" />

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
            Начните за 3 простых шага
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
          {/* Step 1 */}
          <motion.div
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
              delay: 0
            }}
            className="relative">

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl font-black text-gradient-coral mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Зарегистрируйтесь
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Создайте аккаунт за 2 минуты и настройте профиль вашего бизнеса
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:flex absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 text-coral">
              <ArrowRightIcon className="w-8 h-8" strokeWidth={3} />
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
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
              delay: 0.15
            }}
            className="relative">

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl font-black text-gradient-coral mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Настройте услуги
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Добавьте мастеров, услуги, расписание и виджет онлайн-записи
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:flex absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 text-coral">
              <ArrowRightIcon className="w-8 h-8" strokeWidth={3} />
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
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
              delay: 0.3
            }}>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl font-black text-gradient-coral mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Принимайте клиентов
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Клиенты записываются онлайн, вы управляете всем из одной панели
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}