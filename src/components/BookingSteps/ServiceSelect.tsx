import React from 'react';
import { motion } from 'framer-motion';
import {
  ScissorsIcon,
  SparklesIcon,
  SmileIcon,
  HandIcon,
  CheckIcon,
  ClockIcon } from
'lucide-react';
interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
}
interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  services: Service[];
}
const categories: Category[] = [
{
  id: 'haircuts',
  name: 'Стрижки',
  icon: <ScissorsIcon className="w-5 h-5" />,
  services: [
  {
    id: 'h1',
    name: 'Женская стрижка',
    price: 2500,
    duration: 60
  },
  {
    id: 'h2',
    name: 'Мужская стрижка',
    price: 1500,
    duration: 40
  },
  {
    id: 'h3',
    name: 'Окрашивание',
    price: 5000,
    duration: 120
  },
  {
    id: 'h4',
    name: 'Укладка',
    price: 1800,
    duration: 45
  }]

},
{
  id: 'nails',
  name: 'Маникюр',
  icon: <SparklesIcon className="w-5 h-5" />,
  services: [
  {
    id: 'n1',
    name: 'Маникюр классический',
    price: 1200,
    duration: 60
  },
  {
    id: 'n2',
    name: 'Маникюр + покрытие гель-лак',
    price: 2200,
    duration: 90
  },
  {
    id: 'n3',
    name: 'Педикюр',
    price: 2000,
    duration: 75
  },
  {
    id: 'n4',
    name: 'Наращивание ногтей',
    price: 4500,
    duration: 150
  }]

},
{
  id: 'cosmetology',
  name: 'Косметология',
  icon: <SmileIcon className="w-5 h-5" />,
  services: [
  {
    id: 'c1',
    name: 'Чистка лица',
    price: 3500,
    duration: 60
  },
  {
    id: 'c2',
    name: 'Пилинг',
    price: 2800,
    duration: 45
  },
  {
    id: 'c3',
    name: 'Биоревитализация',
    price: 8000,
    duration: 40
  },
  {
    id: 'c4',
    name: 'Мезотерапия',
    price: 6500,
    duration: 50
  }]

},
{
  id: 'massage',
  name: 'Массаж',
  icon: <HandIcon className="w-5 h-5" />,
  services: [
  {
    id: 'm1',
    name: 'Массаж спины',
    price: 2500,
    duration: 40
  },
  {
    id: 'm2',
    name: 'Общий массаж',
    price: 4000,
    duration: 60
  },
  {
    id: 'm3',
    name: 'Антицеллюлитный массаж',
    price: 3500,
    duration: 50
  },
  {
    id: 'm4',
    name: 'Массаж лица',
    price: 2000,
    duration: 30
  }]

}];

interface ServiceSelectProps {
  selectedServices: string[];
  onToggleService: (id: string) => void;
}
export function ServiceSelect({
  selectedServices,
  onToggleService
}: ServiceSelectProps) {
  const allServices = categories.flatMap((c) => c.services);
  const selected = allServices.filter((s) => selectedServices.includes(s.id));
  const totalPrice = selected.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selected.reduce((sum, s) => sum + s.duration, 0);
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-dark mb-2">
        Выберите услуги
      </h2>
      <p className="text-gray-500 mb-8">Можно выбрать несколько услуг</p>

      <div className="space-y-8">
        {categories.map((category) =>
        <div key={category.id}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-dark">{category.name}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.services.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <motion.button
                  key={service.id}
                  whileTap={{
                    scale: 0.98
                  }}
                  onClick={() => onToggleService(service.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${isSelected ? 'border-coral bg-coral/[0.04] shadow-sm' : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'}`}>

                    <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-coral border-coral' : 'border-gray-300'}`}>

                      {isSelected &&
                    <CheckIcon className="w-4 h-4 text-white" />
                    }
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-dark text-sm">
                        {service.name}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-bold text-coral">
                          {service.price.toLocaleString()} ₽
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <ClockIcon className="w-3 h-3" />
                          {service.duration} мин
                        </span>
                      </div>
                    </div>
                  </motion.button>);

            })}
            </div>
          </div>
        )}
      </div>

      {/* Summary bar */}
      {selectedServices.length > 0 &&
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="mt-8 p-5 rounded-2xl bg-dark text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

          <div>
            <div className="text-sm text-gray-400">
              Выбрано услуг:{' '}
              <span className="text-white font-bold">
                {selectedServices.length}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-xl font-black">
                {totalPrice.toLocaleString()} ₽
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <ClockIcon className="w-4 h-4" />
                {totalDuration} мин
              </span>
            </div>
          </div>
        </motion.div>
      }
    </div>);

}