import React from 'react';
import { motion } from 'framer-motion';
import {
  ScissorsIcon,
  SparklesIcon,
  HeartPulseIcon,
  HandIcon,
  PaintbrushIcon,
  SmileIcon } from
'lucide-react';
interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  accentColor: string;
}
const categories: Category[] = [
{
  title: 'Салоны красоты',
  description: 'Стрижки, окрашивание, укладки и полный спектр бьюти-услуг',
  icon: <ScissorsIcon className="w-8 h-8" />,
  bgColor: 'bg-coral/10',
  accentColor: 'text-coral'
},
{
  title: 'Барбершопы',
  description: 'Мужские стрижки, бритьё и уход за бородой',
  icon: <SparklesIcon className="w-8 h-8" />,
  bgColor: 'bg-teal/10',
  accentColor: 'text-teal'
},
{
  title: 'Косметологические клиники',
  description:
  'Процедуры по уходу за кожей, инъекции и аппаратная косметология',
  icon: <SmileIcon className="w-8 h-8" />,
  bgColor: 'bg-coral/10',
  accentColor: 'text-coral'
},
{
  title: 'Медицинские кабинеты',
  description:
  'Приём пациентов, ведение карт и управление расписанием врачей',
  icon: <HeartPulseIcon className="w-8 h-8" />,
  bgColor: 'bg-teal/10',
  accentColor: 'text-teal'
},
{
  title: 'Массажные салоны',
  description: 'Все виды массажа и SPA-процедуры с удобной записью',
  icon: <HandIcon className="w-8 h-8" />,
  bgColor: 'bg-coral/10',
  accentColor: 'text-coral'
},
{
  title: 'Ногтевые студии',
  description: 'Маникюр, педикюр, наращивание и дизайн ногтей',
  icon: <PaintbrushIcon className="w-8 h-8" />,
  bgColor: 'bg-teal/10',
  accentColor: 'text-teal'
}];

export function ForWhom() {
  return (
    <section className="relative bg-[#F8FAFC] py-20 md:py-28 overflow-hidden">
      <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-coral/[0.04]" />
      <div className="absolute bottom-20 left-10 w-44 h-44 rounded-3xl bg-teal/[0.04] rotate-6" />

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

          <h2 className="text-3xl md:text-5xl font-black text-dark mb-4">
            Для кого Clientix?
          </h2>
        </motion.div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
          {categories.map((cat, i) =>
          <motion.div
            key={i}
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
              duration: 0.5,
              delay: i * 0.08
            }}
            whileHover={{
              scale: 1.03
            }}
            className="flex-shrink-0 w-72 lg:w-auto snap-start bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 cursor-default">

              <div
              className={`w-16 h-16 rounded-2xl ${cat.bgColor} ${cat.accentColor} flex items-center justify-center mb-5`}>

                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}