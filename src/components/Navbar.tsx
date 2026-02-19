import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
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
          <a href="#" className="text-2xl font-black text-coral tracking-tight">
            Clientix
          </a>

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

          <div className="hidden md:block">
            <a
              href="#pricing"
              className="inline-flex items-center px-6 py-2.5 bg-coral text-white font-bold text-sm rounded-full hover:bg-coral-dark transition-colors shadow-md hover:shadow-lg">

              Попробовать бесплатно
            </a>
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
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-teal transition-colors">

                  {link.label}
                </a>
            )}
              <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3 bg-coral text-white font-bold rounded-full mt-2">

                Попробовать бесплатно
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}