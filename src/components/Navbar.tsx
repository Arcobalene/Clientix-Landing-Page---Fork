import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, UserPlusIcon, CalendarCheckIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const navLinks = [
{
  label: 'Возможности',
  href: '#features'
},
{
  label: 'Как это работает',
  href: '#how-it-works'
},
{
  label: 'Тарифы',
  href: '#pricing'
},
{
  label: 'FAQ',
  href: '#faq'
}];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="text-2xl font-black text-coral tracking-tight">

            Clientix
          </Link>

          {!isBookingPage &&
          <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-teal transition-colors">

                  {link.label}
                </a>
            )}
            </div>
          }

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-coral text-white font-bold text-sm rounded-full hover:bg-coral-dark transition-colors shadow-md hover:shadow-lg">

              <CalendarCheckIcon className="w-4 h-4" />
              Записаться
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 text-gray-600 font-bold text-sm rounded-full hover:border-gray-300 hover:text-dark transition-all">

              Вход
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-teal text-teal font-bold text-sm rounded-full hover:bg-teal hover:text-white transition-all">

              <UserPlusIcon className="w-4 h-4" />
              Регистрация
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}>

            {mobileOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden">

            <div className="px-4 py-4 space-y-3">
              {!isBookingPage &&
            navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-teal transition-colors">

                    {link.label}
                  </a>
            )}
              <Link
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-coral text-white font-bold rounded-full">

                <CalendarCheckIcon className="w-4 h-4" />
                Записаться в салон
              </Link>
              <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-full">

                Вход
              </Link>
              <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-teal text-teal font-bold rounded-full">

                <UserPlusIcon className="w-4 h-4" />
                Регистрация
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}