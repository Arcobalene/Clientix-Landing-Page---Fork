import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
interface FAQItem {
  question: string;
  answer: string;
}
const faqItems: FAQItem[] = [
{
  question: 'Есть ли бесплатный пробный период?',
  answer:
  'Да! Вы получаете 14 дней бесплатного доступа ко всем функциям без привязки карты.'
},
{
  question: 'Как клиенты будут записываться?',
  answer:
  'Через виджет онлайн-записи, который вы размещаете на сайте, в соцсетях или отправляете ссылкой.'
},
{
  question: 'Можно ли перенести данные из другой системы?',
  answer:
  'Да, мы поможем импортировать базу клиентов из Excel или другой CRM.'
},
{
  question: 'Какие способы оплаты поддерживаются?',
  answer:
  'Банковские карты, электронные кошельки и безналичный расчёт для юрлиц.'
},
{
  question: 'Есть ли мобильное приложение?',
  answer:
  'Да, приложение доступно для iOS и Android для вас и ваших мастеров.'
},
{
  question: 'Как связаться с поддержкой?',
  answer:
  'Чат в приложении, email и телефон. Среднее время ответа — 15 минут.'
}];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle




}: {item: FAQItem;isOpen: boolean;onToggle: () => void;}) {
  return (
    <div
      className={`border-l-4 rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-coral bg-white shadow-md' : 'border-transparent bg-white shadow-sm'}`}>

      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}>

        <span className="text-lg font-bold text-dark pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{
            duration: 0.3
          }}
          className="flex-shrink-0">

          <ChevronDownIcon
            className={`w-5 h-5 ${isOpen ? 'text-coral' : 'text-gray-400'}`} />

        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="overflow-hidden">

            <div className="px-6 pb-6 text-gray-500 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative bg-[#F8FAFC] py-20 md:py-28 overflow-hidden">

      <div className="absolute top-20 right-10 w-36 h-36 rounded-full bg-coral/[0.04]" />
      <div className="absolute bottom-10 left-20 w-28 h-28 rounded-3xl bg-teal/[0.04] -rotate-6" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Частые вопросы
          </h2>
        </motion.div>

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
            amount: 0.2
          }}
          transition={{
            duration: 0.6
          }}
          className="space-y-3">

          {faqItems.map((item, i) =>
          <FAQAccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)} />

          )}
        </motion.div>
      </div>
    </section>);

}