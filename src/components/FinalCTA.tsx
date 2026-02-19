import React from 'react';
import { motion } from 'framer-motion';
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-coral py-20 md:py-28">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-[10%] w-40 h-40 rounded-full bg-white/[0.08]" />
        <div className="absolute bottom-10 right-[15%] w-56 h-56 rounded-full bg-white/[0.05]" />
        <div className="absolute top-[40%] right-[5%] w-24 h-24 rounded-3xl bg-white/[0.06] rotate-12" />
        <div className="absolute bottom-[20%] left-[5%] w-20 h-20 rounded-2xl bg-white/[0.07] -rotate-6" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
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
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">

            Готовы автоматизировать запись клиентов?
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15
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
              duration: 0.6,
              delay: 0.1
            }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">

            Присоединяйтесь к 2000+ салонам, которые уже используют Clientix
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 15
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
              duration: 0.6,
              delay: 0.2
            }}>

            <a
              href="#pricing"
              className="inline-flex items-center px-10 py-5 bg-white text-coral font-black text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-200">

              Попробовать бесплатно — 14 дней
            </a>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.6,
              delay: 0.35
            }}
            className="mt-6 text-sm text-white/60 font-medium">

            Без привязки карты • Настройка за 5 минут
          </motion.p>
        </div>
      </div>
    </section>);

}