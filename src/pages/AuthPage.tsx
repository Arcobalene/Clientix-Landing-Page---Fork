import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  MailIcon,
  LockIcon,
  UserIcon,
  PhoneIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  SparklesIcon,
  CalendarCheckIcon,
  BarChart3Icon,
  UsersIcon } from
'lucide-react';
type AuthTab = 'login' | 'register';
interface LoginData {
  email: string;
  password: string;
}
interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}
export function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultTab: AuthTab =
  location.pathname === '/register' ? 'register' : 'login';
  const [activeTab, setActiveTab] = useState<AuthTab>(defaultTab);
  const [direction, setDirection] = useState(0);
  // Login state
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState<Partial<LoginData>>({});
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  // Register state
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [registerErrors, setRegisterErrors] = useState<Record<string, string>>(
    {}
  );
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);
  useEffect(() => {
    const tab: AuthTab =
    location.pathname === '/register' ? 'register' : 'login';
    if (tab !== activeTab) {
      setDirection(tab === 'register' ? 1 : -1);
      setActiveTab(tab);
    }
  }, [location.pathname]);
  const switchTab = (tab: AuthTab) => {
    if (tab === activeTab) return;
    setDirection(tab === 'register' ? 1 : -1);
    setActiveTab(tab);
    navigate(tab === 'login' ? '/login' : '/register', {
      replace: true
    });
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<LoginData> = {};
    if (!loginData.email.trim()) errors.email = 'Введите email';
    if (!loginData.password.trim()) errors.password = 'Введите пароль';
    setLoginErrors(errors);
    if (Object.keys(errors).length === 0) {

      // Mock login success
    }};
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!registerData.name.trim()) errors.name = 'Введите имя';
    if (!registerData.email.trim()) errors.email = 'Введите email';
    if (!registerData.phone.trim()) errors.phone = 'Введите телефон';
    if (!registerData.password) errors.password = 'Введите пароль';else
    if (registerData.password.length < 6)
    errors.password = 'Минимум 6 символов';
    if (registerData.password !== registerData.confirmPassword)
    errors.confirmPassword = 'Пароли не совпадают';
    if (!registerData.agreeTerms)
    errors.agreeTerms = 'Необходимо принять условия';
    setRegisterErrors(errors);
    if (Object.keys(errors).length === 0) {

      // Mock register success
    }};
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0
    })
  };
  return (
    <div className="min-h-screen w-full flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[42%] relative bg-dark overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral/90 via-coral-dark/80 to-teal/70" />

        {/* Floating shapes */}
        <div className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-white/[0.08] animate-pulse" />
        <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-2xl bg-white/[0.06] rotate-12" />
        <div className="absolute bottom-[25%] left-[20%] w-40 h-40 rounded-full bg-white/[0.05]" />
        <div className="absolute bottom-[10%] right-[10%] w-20 h-20 rounded-3xl bg-white/[0.08] -rotate-6" />
        <div className="absolute top-[60%] left-[5%] w-16 h-16 rounded-full bg-white/[0.1]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">
          <div>
            <Link
              to="/"
              className="text-3xl font-black text-white tracking-tight">

              Clientix
            </Link>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl xl:text-4xl font-black text-white leading-tight">
              Управляйте бизнесом
              <br />
              <span className="text-white/80">легко и эффективно</span>
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <CalendarCheckIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Онлайн-запись 24/7
                  </div>
                  <div className="text-white/60 text-sm">
                    Клиенты записываются сами в любое время
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <UsersIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    CRM и база клиентов
                  </div>
                  <div className="text-white/60 text-sm">
                    Полная история визитов и предпочтений
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <BarChart3Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Аналитика в реальном времени
                  </div>
                  <div className="text-white/60 text-sm">
                    Выручка, загрузка и популярные услуги
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white">
                А
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white">
                М
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white">
                Е
              </div>
            </div>
            <span className="text-white/70 text-sm font-medium">
              2 000+ салонов уже с нами
            </span>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col min-h-screen bg-[#F8FAFC]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5">
          <Link
            to="/"
            className="lg:hidden text-2xl font-black text-coral tracking-tight">

            Clientix
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-gray-500 hover:text-teal transition-colors">

            ← На главную
          </Link>
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 pb-10">
          <div className="w-full max-w-md">
            {/* Tab toggle */}
            <div className="relative flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 mb-8">
              <motion.div
                className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-coral shadow-md"
                initial={false}
                animate={{
                  left: activeTab === 'login' ? '6px' : '50%',
                  right: activeTab === 'login' ? '50%' : '6px'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30
                }} />

              <button
                onClick={() => switchTab('login')}
                className={`relative z-10 flex-1 py-3 text-sm font-bold rounded-xl transition-colors duration-200 ${activeTab === 'login' ? 'text-white' : 'text-gray-500'}`}>

                Вход
              </button>
              <button
                onClick={() => switchTab('register')}
                className={`relative z-10 flex-1 py-3 text-sm font-bold rounded-xl transition-colors duration-200 ${activeTab === 'register' ? 'text-white' : 'text-gray-500'}`}>

                Регистрация
              </button>
            </div>

            {/* Form content */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                {activeTab === 'login' ?
                <motion.div
                  key="login"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1]
                  }}>

                    <div className="mb-6">
                      <h1 className="text-2xl font-black text-dark mb-1">
                        С возвращением!
                      </h1>
                      <p className="text-gray-500 text-sm">
                        Войдите в свой аккаунт Clientix
                      </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                      {/* Email */}
                      <div>
                        <label
                        htmlFor="login-email"
                        className="block text-sm font-semibold text-dark mb-1.5">

                          Email
                        </label>
                        <div className="relative">
                          <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                          <input
                          id="login-email"
                          type="email"
                          value={loginData.email}
                          onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            email: e.target.value
                          })
                          }
                          placeholder="you@example.com"
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium text-sm transition-colors focus:outline-none ${loginErrors.email ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal bg-white'}`} />

                        </div>
                        {loginErrors.email &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {loginErrors.email}
                          </p>
                      }
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label
                          htmlFor="login-password"
                          className="block text-sm font-semibold text-dark">

                            Пароль
                          </label>
                          <button
                          type="button"
                          className="text-xs font-semibold text-teal hover:text-teal-dark transition-colors">

                            Забыли пароль?
                          </button>
                        </div>
                        <div className="relative">
                          <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                          <input
                          id="login-password"
                          type={showLoginPassword ? 'text' : 'password'}
                          value={loginData.password}
                          onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value
                          })
                          }
                          placeholder="••••••••"
                          className={`w-full pl-11 pr-12 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium text-sm transition-colors focus:outline-none ${loginErrors.password ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal bg-white'}`} />

                          <button
                          type="button"
                          onClick={() =>
                          setShowLoginPassword(!showLoginPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label={
                          showLoginPassword ?
                          'Скрыть пароль' :
                          'Показать пароль'
                          }>

                            {showLoginPassword ?
                          <EyeOffIcon className="w-4.5 h-4.5" /> :

                          <EyeIcon className="w-4.5 h-4.5" />
                          }
                          </button>
                        </div>
                        {loginErrors.password &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {loginErrors.password}
                          </p>
                      }
                      </div>

                      {/* Submit */}
                      <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-coral text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">

                        Войти
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-xs text-gray-400 font-medium">
                        или
                      </span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Social buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-100 bg-white text-sm font-semibold text-gray-600 hover:border-gray-200 hover:shadow-sm transition-all">
                        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                          <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                          fill="#4285F4" />

                          <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853" />

                          <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05" />

                          <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335" />

                        </svg>
                        Google
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-100 bg-white text-sm font-semibold text-gray-600 hover:border-gray-200 hover:shadow-sm transition-all">
                        <svg
                        className="w-4.5 h-4.5"
                        viewBox="0 0 24 24"
                        fill="#0077FF">

                          <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.183 1.815.616.42 1.084.328 1.084.328l2.175-.03s1.138-.07.598-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.248.998-1.33 1.398-2.142 1.273-2.49-.12-.331-.86-.244-.86-.244l-2.45.015s-.182-.025-.316.056c-.131.079-.215.263-.215.263s-.387 1.028-.903 1.903c-1.088 1.848-1.524 1.946-1.702 1.832-.414-.265-.31-1.066-.31-1.634 0-1.777.27-2.518-.525-2.71-.264-.064-.458-.106-1.132-.113-.866-.009-1.598.003-2.013.207-.276.136-.489.437-.36.454.16.02.522.098.714.358.248.336.24 1.09.24 1.09s.143 2.093-.333 2.352c-.327.178-.775-.185-1.738-1.845-.493-.85-.866-1.79-.866-1.79s-.072-.176-.2-.271c-.155-.115-.372-.151-.372-.151l-2.327.015s-.35.01-.478.162c-.114.135-.009.414-.009.414s1.82 4.258 3.882 6.403c1.889 1.966 4.033 1.836 4.033 1.836h.972z" />
                        </svg>
                        ВКонтакте
                      </button>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-6">
                      Нет аккаунта?{' '}
                      <button
                      onClick={() => switchTab('register')}
                      className="text-coral font-bold hover:underline">

                        Зарегистрируйтесь
                      </button>
                    </p>
                  </motion.div> :

                <motion.div
                  key="register"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1]
                  }}>

                    <div className="mb-6">
                      <h1 className="text-2xl font-black text-dark mb-1">
                        Создайте аккаунт
                      </h1>
                      <p className="text-gray-500 text-sm">
                        Начните управлять записями за 5 минут
                      </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label
                        htmlFor="reg-name"
                        className="block text-sm font-semibold text-dark mb-1.5">

                          Имя
                        </label>
                        <div className="relative">
                          <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                          <input
                          id="reg-name"
                          type="text"
                          value={registerData.name}
                          onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            name: e.target.value
                          })
                          }
                          placeholder="Ваше имя"
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium text-sm transition-colors focus:outline-none ${registerErrors.name ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal bg-white'}`} />

                        </div>
                        {registerErrors.name &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {registerErrors.name}
                          </p>
                      }
                      </div>

                      {/* Email */}
                      <div>
                        <label
                        htmlFor="reg-email"
                        className="block text-sm font-semibold text-dark mb-1.5">

                          Email
                        </label>
                        <div className="relative">
                          <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                          <input
                          id="reg-email"
                          type="email"
                          value={registerData.email}
                          onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            email: e.target.value
                          })
                          }
                          placeholder="you@example.com"
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium text-sm transition-colors focus:outline-none ${registerErrors.email ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal bg-white'}`} />

                        </div>
                        {registerErrors.email &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {registerErrors.email}
                          </p>
                      }
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                        htmlFor="reg-phone"
                        className="block text-sm font-semibold text-dark mb-1.5">

                          Телефон
                        </label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                          <input
                          id="reg-phone"
                          type="tel"
                          value={registerData.phone}
                          onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            phone: e.target.value
                          })
                          }
                          placeholder="+7 (999) 123-45-67"
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium text-sm transition-colors focus:outline-none ${registerErrors.phone ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal bg-white'}`} />

                        </div>
                        {registerErrors.phone &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {registerErrors.phone}
                          </p>
                      }
                      </div>

                      {/* Password */}
                      <div>
                        <label
                        htmlFor="reg-password"
                        className="block text-sm font-semibold text-dark mb-1.5">

                          Пароль
                        </label>
                        <div className="relative">
                          <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                          <input
                          id="reg-password"
                          type={showRegPassword ? 'text' : 'password'}
                          value={registerData.password}
                          onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            password: e.target.value
                          })
                          }
                          placeholder="Минимум 6 символов"
                          className={`w-full pl-11 pr-12 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium text-sm transition-colors focus:outline-none ${registerErrors.password ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal bg-white'}`} />

                          <button
                          type="button"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label={
                          showRegPassword ?
                          'Скрыть пароль' :
                          'Показать пароль'
                          }>

                            {showRegPassword ?
                          <EyeOffIcon className="w-4.5 h-4.5" /> :

                          <EyeIcon className="w-4.5 h-4.5" />
                          }
                          </button>
                        </div>
                        {registerErrors.password &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {registerErrors.password}
                          </p>
                      }
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label
                        htmlFor="reg-confirm"
                        className="block text-sm font-semibold text-dark mb-1.5">

                          Подтвердите пароль
                        </label>
                        <div className="relative">
                          <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                          <input
                          id="reg-confirm"
                          type={showRegConfirm ? 'text' : 'password'}
                          value={registerData.confirmPassword}
                          onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            confirmPassword: e.target.value
                          })
                          }
                          placeholder="Повторите пароль"
                          className={`w-full pl-11 pr-12 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium text-sm transition-colors focus:outline-none ${registerErrors.confirmPassword ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal bg-white'}`} />

                          <button
                          type="button"
                          onClick={() => setShowRegConfirm(!showRegConfirm)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label={
                          showRegConfirm ?
                          'Скрыть пароль' :
                          'Показать пароль'
                          }>

                            {showRegConfirm ?
                          <EyeOffIcon className="w-4.5 h-4.5" /> :

                          <EyeIcon className="w-4.5 h-4.5" />
                          }
                          </button>
                        </div>
                        {registerErrors.confirmPassword &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {registerErrors.confirmPassword}
                          </p>
                      }
                      </div>

                      {/* Terms */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="mt-0.5">
                            <input
                            type="checkbox"
                            checked={registerData.agreeTerms}
                            onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              agreeTerms: e.target.checked
                            })
                            }
                            className="sr-only" />

                            <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${registerData.agreeTerms ? 'bg-teal border-teal' : registerErrors.agreeTerms ? 'border-coral' : 'border-gray-300 group-hover:border-gray-400'}`}>

                              {registerData.agreeTerms &&
                            <svg
                              className="w-3.5 h-3.5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}>

                                  <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7" />

                                </svg>
                            }
                            </div>
                          </div>
                          <span
                          className={`text-xs leading-snug ${registerErrors.agreeTerms ? 'text-coral' : 'text-gray-500'}`}>

                            Я согласен(а) с{' '}
                            <a
                            href="#"
                            className="text-teal font-semibold hover:underline">

                              условиями использования
                            </a>{' '}
                            и{' '}
                            <a
                            href="#"
                            className="text-teal font-semibold hover:underline">

                              политикой конфиденциальности
                            </a>
                          </span>
                        </label>
                        {registerErrors.agreeTerms &&
                      <p className="mt-1 text-xs text-coral font-medium">
                            {registerErrors.agreeTerms}
                          </p>
                      }
                      </div>

                      {/* Submit */}
                      <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-coral text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">

                        <SparklesIcon className="w-4 h-4" />
                        Создать аккаунт
                      </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                      Уже есть аккаунт?{' '}
                      <button
                      onClick={() => switchTab('login')}
                      className="text-coral font-bold hover:underline">

                        Войдите
                      </button>
                    </p>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>);

}