import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangleIcon } from 'lucide-react';
const problems = [
'Клиенты забывают о записи и не приходят',
'Вы тратите часы на ручное ведение записей',
'Нет понимания, какие услуги приносят прибыль',
'Клиенты уходят к конкурентам из-за неудобной записи'];

export function ProblemSection() {
  return (
    <section className="relative bg-teal py-20 md:py-28 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/[0.04]" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-3xl bg-white/[0.03] rotate-12" />

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
          className="text-center mb-14">

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Знакомые проблемы?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Если хотя бы одна из них — про вас, Clientix поможет
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1
            }}
            className="bg-white/[0.08] backdrop-blur-sm border-l-4 border-coral rounded-xl p-6 hover:bg-white/[0.12] transition-colors">

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center">
                  <AlertTriangleIcon className="w-5 h-5 text-coral" />
                </div>
                <p className="text-white font-semibold leading-snug">
                  {problem}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}