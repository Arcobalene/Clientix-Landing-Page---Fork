import React, { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { SalonSelect } from '../components/BookingSteps/SalonSelect';
import { ServiceSelect } from '../components/BookingSteps/ServiceSelect';
import { DateTimeSelect } from '../components/BookingSteps/DateTimeSelect';
import { ClientForm } from '../components/BookingSteps/ClientForm';
import { Confirmation } from '../components/BookingSteps/Confirmation';
interface ClientData {
  name: string;
  phone: string;
  email: string;
  comment: string;
  agreeTerms: boolean;
}
const SALON_NAMES: Record<string, string> = {
  'beauty-lab': 'Beauty Lab',
  glamour: 'Гламур',
  estetika: 'Эстетика',
  touch: 'Прикосновение'
};
const ALL_SERVICES: Record<
  string,
  {
    name: string;
    price: number;
  }> =
{
  h1: {
    name: 'Женская стрижка',
    price: 2500
  },
  h2: {
    name: 'Мужская стрижка',
    price: 1500
  },
  h3: {
    name: 'Окрашивание',
    price: 5000
  },
  h4: {
    name: 'Укладка',
    price: 1800
  },
  n1: {
    name: 'Маникюр классический',
    price: 1200
  },
  n2: {
    name: 'Маникюр + покрытие гель-лак',
    price: 2200
  },
  n3: {
    name: 'Педикюр',
    price: 2000
  },
  n4: {
    name: 'Наращивание ногтей',
    price: 4500
  },
  c1: {
    name: 'Чистка лица',
    price: 3500
  },
  c2: {
    name: 'Пилинг',
    price: 2800
  },
  c3: {
    name: 'Биоревитализация',
    price: 8000
  },
  c4: {
    name: 'Мезотерапия',
    price: 6500
  },
  m1: {
    name: 'Массаж спины',
    price: 2500
  },
  m2: {
    name: 'Общий массаж',
    price: 4000
  },
  m3: {
    name: 'Антицеллюлитный массаж',
    price: 3500
  },
  m4: {
    name: 'Массаж лица',
    price: 2000
  }
};
const steps = [
{
  label: 'Салон',
  shortLabel: 'Салон'
},
{
  label: 'Услуга',
  shortLabel: 'Услуга'
},
{
  label: 'Дата и время',
  shortLabel: 'Дата'
},
{
  label: 'Подтверждение',
  shortLabel: 'Данные'
}];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0
  })
};
export function BookingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isBooked, setIsBooked] = useState(false);
  // Booking state
  const [selectedSalon, setSelectedSalon] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientData, setClientData] = useState<ClientData>({
    name: '',
    phone: '',
    email: '',
    comment: '',
    agreeTerms: false
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
    prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };
  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return selectedSalon !== null;
      case 1:
        return selectedServices.length > 0;
      case 2:
        return selectedDate !== null && selectedTime !== null;
      case 3:
        return true;
      default:
        return false;
    }
  };
  const validateClientForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!clientData.name.trim()) errors.name = 'Введите ваше имя';
    if (!clientData.phone.trim()) errors.phone = 'Введите номер телефона';
    if (!clientData.agreeTerms) errors.agreeTerms = 'Необходимо принять условия';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const goNext = () => {
    if (currentStep === 3) {
      if (!validateClientForm()) return;
      setIsBooked(true);
      return;
    }
    if (!canProceed()) return;
    setDirection(1);
    setCurrentStep((s) => s + 1);
  };
  const goBack = () => {
    if (currentStep === 0) return;
    setDirection(-1);
    setCurrentStep((s) => s - 1);
  };
  if (isBooked) {
    const serviceNames = selectedServices.map(
      (id) => ALL_SERVICES[id]?.name || id
    );
    const totalPrice = selectedServices.reduce(
      (sum, id) => sum + (ALL_SERVICES[id]?.price || 0),
      0
    );
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <main className="pt-28 md:pt-36 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Confirmation
              summary={{
                salonName: SALON_NAMES[selectedSalon || ''] || 'Салон',
                services: serviceNames,
                date: selectedDate || '',
                time: selectedTime || '',
                clientName: clientData.name,
                totalPrice
              }} />

          </div>
        </main>
      </div>);

  }
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Step indicator */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              {steps.map((step, i) => {
                const isCompleted = i < currentStep;
                const isCurrent = i === currentStep;
                return (
                  <Fragment key={i}>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${isCompleted ? 'bg-teal text-white' : isCurrent ? 'bg-coral text-white shadow-lg shadow-coral/30' : 'bg-gray-100 text-gray-400'}`}>

                        {isCompleted ?
                        <CheckIcon className="w-5 h-5" /> :

                        i + 1
                        }
                      </div>
                      <span
                        className={`text-xs font-semibold hidden sm:block ${isCurrent ? 'text-coral' : isCompleted ? 'text-teal' : 'text-gray-400'}`}>

                        {step.label}
                      </span>
                      <span
                        className={`text-xs font-semibold sm:hidden ${isCurrent ? 'text-coral' : isCompleted ? 'text-teal' : 'text-gray-400'}`}>

                        {step.shortLabel}
                      </span>
                    </div>

                    {i < steps.length - 1 &&
                    <div className="flex-1 h-0.5 mx-2 rounded-full overflow-hidden bg-gray-100">
                        <motion.div
                        className="h-full bg-teal"
                        initial={false}
                        animate={{
                          width: isCompleted ? '100%' : '0%'
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1]
                        }} />

                      </div>
                    }
                  </Fragment>);

              })}
            </div>
          </div>

          {/* Step content */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}>

                {currentStep === 0 &&
                <SalonSelect
                  selectedSalonId={selectedSalon}
                  onSelect={setSelectedSalon} />

                }
                {currentStep === 1 &&
                <ServiceSelect
                  selectedServices={selectedServices}
                  onToggleService={toggleService} />

                }
                {currentStep === 2 &&
                <DateTimeSelect
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onSelectDate={setSelectedDate}
                  onSelectTime={setSelectedTime} />

                }
                {currentStep === 3 &&
                <ClientForm
                  data={clientData}
                  onChange={setClientData}
                  errors={formErrors} />

                }
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={goBack}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-dark hover:bg-white hover:shadow-sm'}`}>

              <ArrowLeftIcon className="w-4 h-4" />
              Назад
            </button>

            <button
              onClick={goNext}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base transition-all ${canProceed() ? 'bg-coral text-white shadow-lg hover:shadow-xl hover:bg-coral-dark hover:scale-[1.02]' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}>

              {currentStep === 3 ? 'Записаться' : 'Далее'}
              {currentStep < 3 && <ArrowRightIcon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </main>
    </div>);

}