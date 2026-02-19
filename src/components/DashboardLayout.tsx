import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, LogOutIcon, ChevronRightIcon } from 'lucide-react';
interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}
interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'salon' | 'client' | 'master' | 'admin';
  navItems: NavItem[];
  userName: string;
  userRole: string;
  greeting: string;
}
const roleBadgeStyles: Record<string, string> = {
  salon: 'bg-coral/20 text-coral',
  client: 'bg-teal/20 text-teal',
  master: 'bg-amber-100 text-amber-700',
  admin: 'bg-purple-100 text-purple-700'
};
const roleLabels: Record<string, string> = {
  salon: 'Салон',
  client: 'Клиент',
  master: 'Мастер',
  admin: 'Администратор'
};
export function DashboardLayout({
  children,
  role,
  navItems,
  userName,
  userRole,
  greeting
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const today = new Date();
  const dateStr = today.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const sidebarContent =
  <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4">
        <Link to="/" className="text-2xl font-black text-coral tracking-tight">
          Clientix
        </Link>
        <div
        className={`inline-flex items-center mt-2 px-2.5 py-1 rounded-lg text-xs font-bold ${roleBadgeStyles[role]}`}>

          {roleLabels[role]}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.id}
            to={item.href}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${isActive ? 'bg-white/10 text-white border-l-4 border-coral -ml-[2px]' : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.05]'}`}>

              <span className="flex-shrink-0 w-5 h-5">{item.icon}</span>
              {item.label}
            </Link>);

      })}
      </nav>

      {/* User */}
      <div className="px-4 py-5 border-t border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-coral/30 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
            {userName.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-white truncate">
              {userName}
            </div>
            <div className="text-xs text-gray-500">{userRole}</div>
          </div>
        </div>
        <Link
        to="/login"
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-300 hover:bg-white/[0.05] transition-colors">

          <LogOutIcon className="w-4 h-4" />
          Выйти
        </Link>
      </div>
    </div>;

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-dark z-30">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.2
            }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)} />

            <motion.aside
            initial={{
              x: -280
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: -280
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="fixed inset-y-0 left-0 w-64 bg-dark z-50 lg:hidden">

              <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-5 right-4 p-1 text-gray-400 hover:text-white"
              aria-label="Закрыть меню">

                <XIcon className="w-5 h-5" />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        }
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-[#F8FAFC]/95 backdrop-blur-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-dark rounded-lg"
                aria-label="Открыть меню">

                <MenuIcon className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-lg md:text-xl font-black text-dark">
                  {greeting}
                </h1>
                <p className="text-xs text-gray-400 font-medium capitalize">
                  {dateStr}
                </p>
              </div>
            </div>
            <Link to="/" className="lg:hidden text-xl font-black text-coral">
              Clientix
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="px-4 sm:px-6 md:px-8 py-6 md:py-8">{children}</main>
      </div>
    </div>);

}