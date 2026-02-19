import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
interface SalonSelectProps {
  selectedSalonId: string | null;
  onSelect: (id: string) => void;
}
export function SalonSelect({ selectedSalonId, onSelect }: SalonSelectProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-dark mb-2">
        Выберите салон
      </h2>
      <p className="text-gray-500 mb-8">
        Выберите удобный для вас салон из списка
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {/* Salon 1: Beauty Lab */}
        <motion.button
          whileHover={{
            y: -2
          }}
          whileTap={{
            scale: 0.98
          }}
          onClick={() => onSelect('beauty-lab')}
          className={`text-left rounded-2xl overflow-hidden border-2 transition-all duration-200 ${selectedSalonId === 'beauty-lab' ? 'border-coral ring-4 ring-coral/20 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'}`}>

          <div className="h-32 bg-gradient-to-br from-coral/80 to-coral-light relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-6xl font-black">BL</span>
            </div>
            {selectedSalonId === 'beauty-lab' &&
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-coral flex items-center justify-center shadow-md">

                <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}>

                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7" />

                </svg>
              </motion.div>
            }
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-dark mb-1">Beauty Lab</h3>
            <div className="flex items-center gap-1 mb-3">
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm text-gray-500 ml-1">5.0</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
              <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
              <span>ул. Тверская, 15, Москва</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ClockIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>09:00 — 21:00</span>
            </div>
          </div>
        </motion.button>

        {/* Salon 2: Гламур */}
        <motion.button
          whileHover={{
            y: -2
          }}
          whileTap={{
            scale: 0.98
          }}
          onClick={() => onSelect('glamour')}
          className={`text-left rounded-2xl overflow-hidden border-2 transition-all duration-200 ${selectedSalonId === 'glamour' ? 'border-coral ring-4 ring-coral/20 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'}`}>

          <div className="h-32 bg-gradient-to-br from-teal to-teal-light relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-6xl font-black">Г</span>
            </div>
            {selectedSalonId === 'glamour' &&
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-coral flex items-center justify-center shadow-md">

                <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}>

                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7" />

                </svg>
              </motion.div>
            }
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-dark mb-1">Гламур</h3>
            <div className="flex items-center gap-1 mb-3">
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-gray-200 fill-gray-200" />
              <span className="text-sm text-gray-500 ml-1">4.7</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
              <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
              <span>Невский пр., 42, Санкт-Петербург</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ClockIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>10:00 — 22:00</span>
            </div>
          </div>
        </motion.button>

        {/* Salon 3: Эстетика */}
        <motion.button
          whileHover={{
            y: -2
          }}
          whileTap={{
            scale: 0.98
          }}
          onClick={() => onSelect('estetika')}
          className={`text-left rounded-2xl overflow-hidden border-2 transition-all duration-200 ${selectedSalonId === 'estetika' ? 'border-coral ring-4 ring-coral/20 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'}`}>

          <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-6xl font-black">Э</span>
            </div>
            {selectedSalonId === 'estetika' &&
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-coral flex items-center justify-center shadow-md">

                <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}>

                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7" />

                </svg>
              </motion.div>
            }
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-dark mb-1">Эстетика</h3>
            <div className="flex items-center gap-1 mb-3">
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm text-gray-500 ml-1">4.9</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
              <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
              <span>ул. Ленина, 88, Казань</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ClockIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>09:00 — 20:00</span>
            </div>
          </div>
        </motion.button>

        {/* Salon 4: Прикосновение */}
        <motion.button
          whileHover={{
            y: -2
          }}
          whileTap={{
            scale: 0.98
          }}
          onClick={() => onSelect('touch')}
          className={`text-left rounded-2xl overflow-hidden border-2 transition-all duration-200 ${selectedSalonId === 'touch' ? 'border-coral ring-4 ring-coral/20 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'}`}>

          <div className="h-32 bg-gradient-to-br from-amber-400 to-orange-400 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-6xl font-black">П</span>
            </div>
            {selectedSalonId === 'touch' &&
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-coral flex items-center justify-center shadow-md">

                <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}>

                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7" />

                </svg>
              </motion.div>
            }
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-dark mb-1">Прикосновение</h3>
            <div className="flex items-center gap-1 mb-3">
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-amber-400 fill-amber-400" />
              <StarIcon className="w-4 h-4 text-gray-200 fill-gray-200" />
              <span className="text-sm text-gray-500 ml-1">4.6</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
              <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
              <span>ул. Красная, 22, Краснодар</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ClockIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>08:00 — 21:00</span>
            </div>
          </div>
        </motion.button>
      </div>
    </div>);

}