import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  prefix: string;
  label: string;
  barWidth: string;
  barColor: string;
}
const stats: StatItem[] = [
{
  value: '-40%',
  numericValue: 40,
  suffix: '%',
  prefix: '-',
  label: 'Снижение неявок',
  barWidth: '80%',
  barColor: 'bg-coral'
},
{
  value: '+35%',
  numericValue: 35,
  suffix: '%',
  prefix: '+',
  label: 'Рост повторных визитов',
  barWidth: '70%',
  barColor: 'bg-teal'
},
{
  value: '2 мин',
  numericValue: 2,
  suffix: ' мин',
  prefix: '',
  label: 'Среднее время записи клиента',
  barWidth: '40%',
  barColor: 'bg-coral'
},
{
  value: '4.9★',
  numericValue: 4.9,
  suffix: '★',
  prefix: '',
  label: 'Средняя оценка от пользователей',
  barWidth: '98%',
  barColor: 'bg-teal'
}];

function AnimatedNumber({
  value,
  suffix,
  prefix,
  inView





}: {value: number;suffix: string;prefix: string;inView: boolean;}) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    const isDecimal = value % 1 !== 0;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * value;
      setDisplay(isDecimal ? parseFloat(val.toFixed(1)) : Math.round(val));
      if (current >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>);

}
export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute top-10 left-[5%] w-28 h-28 rounded-full bg-coral/[0.05]" />
      <div className="absolute bottom-20 right-[8%] w-36 h-36 rounded-3xl bg-teal/[0.05] rotate-12" />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}>

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
            Результаты наших клиентов
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) =>
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
              delay: i * 0.1
            }}
            className="text-center">

              <div className="text-5xl md:text-6xl font-black text-dark mb-2">
                <AnimatedNumber
                value={stat.numericValue}
                suffix={stat.suffix}
                prefix={stat.prefix}
                inView={inView} />

              </div>
              <p className="text-gray-500 font-medium mb-4">{stat.label}</p>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                initial={{
                  width: 0
                }}
                whileInView={{
                  width: stat.barWidth
                }}
                viewport={{
                  once: true,
                  amount: 0.3
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`h-full rounded-full ${stat.barColor}`} />

              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}